import { ClientSecretCredential } from "@azure/identity";
import {
	BlobSASPermissions,
	BlobServiceClient,
	generateBlobSASQueryParameters,
	SASProtocol,
} from "@azure/storage-blob";

export interface AzureStorageConfig {
	storageAccountName: string;
	containerName: string;
	accountKey?: string; // Optional for AD authentication
	tenantId?: string; // For AD authentication
	clientId?: string; // For AD authentication
	clientSecret?: string; // For AD authentication
}

export function getAzureStorageConfig(): AzureStorageConfig {
	if (
		!process.env.DOWNLOADS_ACCOUNTNAME ||
		!process.env.DOWNLOADS_CONTAINERNAME ||
		!process.env.DOWNLOADS_TENANTID ||
		!process.env.DOWNLOADS_CLIENTID ||
		!process.env.DOWNLOADS_CLIENTSECRET
	) {
		throw new Error("Missing required environment variables for Azure Storage");
	}

	return {
		storageAccountName: process.env.DOWNLOADS_ACCOUNTNAME!,
		containerName: process.env.DOWNLOADS_CONTAINERNAME!,
		tenantId: process.env.DOWNLOADS_TENANTID!,
		clientId: process.env.DOWNLOADS_CLIENTID!,
		clientSecret: process.env.DOWNLOADS_CLIENTSECRET!,
	};
}

/**
 * Validates that a SAS URL is properly formatted and contains required parameters
 */
export function validateSasUrl(sasUrl: string): boolean {
	try {
		const url = new URL(sasUrl);

		// Check for required SAS parameters
		const requiredParams = ["sv", "st", "se", "sp", "sig"];
		const hasAllParams = requiredParams.every((param) =>
			url.searchParams.has(param),
		);

		if (!hasAllParams) {
			console.error(
				"Missing required SAS parameters:",
				requiredParams.filter((param) => !url.searchParams.has(param)),
			);
			return false;
		}

		// Validate URL format
		if (!url.hostname.includes(".blob.core.windows.net")) {
			console.error("Invalid Azure Blob Storage URL format");
			return false;
		}

		return true;
	} catch (error) {
		console.error("Invalid SAS URL format:", error);
		return false;
	}
}

/**
 * Tests if a SAS URL is accessible by making a HEAD request
 */
export async function testSasUrlAccess(sasUrl: string): Promise<boolean> {
	try {
		const response = await fetch(sasUrl, { method: "HEAD" });
		return response.ok;
	} catch (error) {
		console.error("SAS URL access test failed:", error);
		return false;
	}
}

/**
 * Creates a BlobServiceClient for testing blob operations
 * Supports both storage account key and Azure AD authentication
 */
export function createBlobServiceClient(
	config: AzureStorageConfig,
): BlobServiceClient {
	// Use Azure AD authentication if credentials are provided
	if (config.tenantId && config.clientId && config.clientSecret) {
		const credential = new ClientSecretCredential(
			config.tenantId,
			config.clientId,
			config.clientSecret,
		);
		return new BlobServiceClient(
			`https://${config.storageAccountName}.blob.core.windows.net`,
			credential,
		);
	}

	// Fall back to storage account key authentication
	if (config.accountKey) {
		const connectionString = `DefaultEndpointsProtocol=https;AccountName=${config.storageAccountName};AccountKey=${config.accountKey};EndpointSuffix=core.windows.net`;
		return BlobServiceClient.fromConnectionString(connectionString);
	}

	throw new Error(
		"Either Azure AD credentials (tenantId, clientId, clientSecret) or storage account key must be provided",
	);
}

/**
 * Validates that a blob exists in the container
 */
export async function validateBlobExists(
	config: AzureStorageConfig,
	blobName: string,
): Promise<boolean> {
	try {
		const blobServiceClient = createBlobServiceClient(config);
		const containerClient = blobServiceClient.getContainerClient(
			config.containerName,
		);
		const blobClient = containerClient.getBlobClient(blobName);

		const exists = await blobClient.exists();
		return exists;
	} catch (error) {
		console.error("Error validating blob existence:", error);
		return false;
	}
}

/**
 * Gets blob properties to validate access and metadata
 */
export async function getBlobProperties(
	config: AzureStorageConfig,
	blobName: string,
) {
	try {
		const blobServiceClient = createBlobServiceClient(config);
		const containerClient = blobServiceClient.getContainerClient(
			config.containerName,
		);
		const blobClient = containerClient.getBlobClient(blobName);

		const properties = await blobClient.getProperties();
		return {
			exists: true,
			size: properties.contentLength,
			contentType: properties.contentType,
			lastModified: properties.lastModified,
			etag: properties.etag,
		};
	} catch (error) {
		console.error("Error getting blob properties:", error);
		return {
			exists: false,
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}
}

/**
 * Generates a SAS token for a blob using Azure AD authentication
 */
export async function generateSasToken(
	config: AzureStorageConfig,
	blobName: string,
	expiresInMinutes: number = 15,
): Promise<string> {
	try {
		const blobServiceClient = createBlobServiceClient(config);

		const startsOn = new Date();
		const expiresOn = new Date();
		expiresOn.setMinutes(expiresOn.getMinutes() + expiresInMinutes);

		const userDelegationKey = await blobServiceClient.getUserDelegationKey(
			startsOn,
			expiresOn,
		);

		const sasToken = generateBlobSASQueryParameters(
			{
				containerName: config.containerName,
				blobName,
				permissions: BlobSASPermissions.parse("r"), // read permission
				startsOn: startsOn,
				expiresOn: expiresOn,
				protocol: SASProtocol.Https,
				version: "2023-11-03",
			},
			userDelegationKey,
			config.storageAccountName,
		).toString();

		return sasToken;
	} catch (error) {
		console.error("Error generating SAS token:", error);
		throw new Error("Failed to generate SAS token");
	}
}

/**
 * Generates a complete SAS URL for a blob
 */
export async function generateSasUrl(
	config: AzureStorageConfig,
	blobName: string,
	expiresInMinutes: number = 15,
): Promise<string> {
	try {
		const sasToken = await generateSasToken(config, blobName, expiresInMinutes);

		const baseUrl = `https://${config.storageAccountName}.blob.core.windows.net/${config.containerName}/${blobName}`;
		const sasUrl = `${baseUrl}?${sasToken}`;

		// Validate the generated SAS URL
		if (!validateSasUrl(sasUrl)) {
			throw new Error("Generated SAS URL is invalid");
		}

		return sasUrl;
	} catch (error) {
		console.error("Error generating SAS URL:", error);
		throw error;
	}
}

/**
 * Validates blob existence and generates a SAS URL in one operation
 */
export async function validateAndGenerateSasUrl(
	config: AzureStorageConfig,
	blobName: string,
	expiresInMinutes: number = 15,
): Promise<string> {
	// First validate that the blob exists
	const blobExists = await validateBlobExists(config, blobName);
	if (!blobExists) {
		throw new Error(`Blob does not exist: ${blobName}`);
	}

	// Generate the SAS URL
	return await generateSasUrl(config, blobName, expiresInMinutes);
}
