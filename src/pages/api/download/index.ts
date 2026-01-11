import { authOptions } from "@src/lib/auth/options";
import { isAuthenticatedOktaUser } from "@src/lib/auth/verify";
import {
	type AzureStorageConfig,
	getAzureStorageConfig,
	validateAndGenerateSasUrl,
} from "@src/lib/downloads/azure";
import { getQueryValue } from "@src/lib/utils/requests";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await getServerSession(req, res, authOptions);
	const referrer = req.headers.referer || req.headers.referrer;

	// Redirect to login if user is not authenticated
	if (!isAuthenticatedOktaUser(session)) {
		res.setHeader(
			"Location",
			`/login?redirect=/downloads/redirect&file=${req.query.file}&page=${referrer}`,
		);
		res.statusCode = 302;
		res.end();
	}

	// Validate method is GET
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	// Validate file parameter is provided
	if (!req.query.file) {
		return res.status(400).json({ error: "File parameter is required" });
	}

	try {
		const fileName: string = getQueryValue(req.query.file);
		if (!fileName) {
			return res.status(400).json({ error: "File parameter is required" });
		}
		// Create Azure storage configuration
		const config: AzureStorageConfig = getAzureStorageConfig();
		const sasUrl = await validateAndGenerateSasUrl(config, fileName, 15);

		// 🔁 Redirect to the signed URL
		res.setHeader("Location", sasUrl);
		res.statusCode = 302;
		res.end();
	} catch (err) {
		console.error("Error generating SAS token:", err);

		// Handle specific error types
		if (err instanceof Error) {
			if (err.message.includes("Blob does not exist")) {
				return res.status(404).json({ error: "File not found" });
			}
			if (err.message.includes("Generated SAS URL is invalid")) {
				return res
					.status(500)
					.json({ error: "Failed to generate valid download token" });
			}
		}

		return res.status(500).json({ error: "Failed to generate download token" });
	}
}
