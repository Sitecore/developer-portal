import { resolve } from "node:path";
import {
    GetAllChangetypesDocument,
    type GetAllChangetypesQuery,
    type GetAllChangetypesQueryVariables,
    GetAllProductsDocument,
    type GetAllProductsQuery,
    type GetAllProductsQueryVariables,
    GetAllStatusDocument,
    type GetAllStatusQuery,
    type GetAllStatusQueryVariables,
    GetNumberOfEntriesByProductDocument,
    type GetNumberOfEntriesByProductQuery,
    type GetNumberOfEntriesByProductQueryVariables,
    SearchByDateDocument,
    type SearchByDateQuery,
    type SearchByDateQueryVariables,
    SearchByProductDocument,
    type SearchByProductQuery,
    type SearchByProductQueryVariables,
    SearchByProductsAndChangeTypesAndBreakingChangeDocument,
    type SearchByProductsAndChangeTypesAndBreakingChangeQuery,
    type SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables,
    SearchByProductsAndChangeTypesDocument,
    type SearchByProductsAndChangeTypesQuery,
    type SearchByProductsAndChangeTypesQueryVariables,
    SearchByTitleAndDateDocument,
    type SearchByTitleAndDateQuery,
    type SearchByTitleAndDateQueryVariables,
    SearchByTitleDocument,
    type SearchByTitleQuery,
    type SearchByTitleQueryVariables,
} from "@data/gql/generated/graphql";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import { fetchGraphQL } from "@src/lib/changelog/common/fetch";
import { config as dotenvConfig } from "dotenv";
import { describe, expect, test } from "vitest";

// Load environment variables (try .env.local first, then .env, then system env)
dotenvConfig({ path: resolve(process.cwd(), ".env.local") });
dotenvConfig({ path: resolve(process.cwd(), ".env") });

/**
 * Integration tests for GraphQL queries
 * These tests make real API calls to validate query responses
 *
 * Required environment variables:
 * - SITECORE_CS_ENDPOINT
 * - SITECORE_CS_TENANT
 * - SITECORE_CS_ENV
 * - SITECORE_CS_AUTH_TOKEN_DELIVERY
 * - SITECORE_CS_AUTH_TOKEN_PREVIEW (optional, for preview tests)
 */
describe("GraphQL Query Integration Tests", () => {
	const credentials = getChangelogCredentials();
	const preview = false; // Use production endpoint by default

	// Helper function to validate changelog entry structure
	function validateChangelogEntry(entry: any) {
		expect(entry).toBeDefined();
		expect(entry.system).toBeDefined();
		expect(entry.system.id).toBeDefined();
		expect(typeof entry.system.id).toBe("string");
		expect(entry.system.name).toBeDefined();
		expect(typeof entry.system.name).toBe("string");

		// Optional fields that may be null
		if (entry.title !== null) expect(typeof entry.title).toBe("string");
		if (entry.description !== null) expect(entry.description).toBeDefined();
		if (entry.fullArticle !== null) expect(entry.fullArticle).toBeDefined();
		if (entry.readMoreLink !== null)
			expect(typeof entry.readMoreLink).toBe("string");
		if (entry.breakingChange !== null)
			expect(typeof entry.breakingChange).toBe("boolean");
		if (entry.x_version !== null) expect(typeof entry.x_version).toBe("string");
		if (entry.releaseDate !== null) expect(entry.releaseDate).toBeDefined();
		if (entry.scheduled !== null)
			expect(typeof entry.scheduled).toBe("boolean");

		// Nested structures
		if (entry.image !== null) {
			expect(entry.image).toBeDefined();
			if (entry.image.results !== null) {
				expect(Array.isArray(entry.image.results)).toBe(true);
			}
		}
		if (
			entry.sitecoreProduct !== null &&
			entry.sitecoreProduct.results !== null
		) {
			expect(Array.isArray(entry.sitecoreProduct.results)).toBe(true);
		}
		if (entry.changeType !== null && entry.changeType.results !== null) {
			expect(Array.isArray(entry.changeType.results)).toBe(true);
		}
		if (entry.status !== null && entry.status.results !== null) {
			expect(Array.isArray(entry.status.results)).toBe(true);
		}
	}

	// Helper function to validate product structure
	function validateProduct(product: any) {
		expect(product).toBeDefined();
		expect(product.system).toBeDefined();
		expect(product.system.id).toBeDefined();
		expect(typeof product.system.id).toBe("string");
		expect(product.system.name).toBeDefined();
		expect(typeof product.system.name).toBe("string");

		if (product.productName !== null)
			expect(typeof product.productName).toBe("string");
		if (product.productDescription !== null)
			expect(typeof product.productDescription).toBe("string");
		if (product.darkIcon !== null)
			expect(typeof product.darkIcon).toBe("string");
		if (product.lightIcon !== null)
			expect(typeof product.lightIcon).toBe("string");
	}

	// Helper function to validate change type structure
	function validateChangeType(changeType: any) {
		expect(changeType).toBeDefined();
		expect(changeType.system).toBeDefined();
		expect(changeType.system.id).toBeDefined();
		expect(typeof changeType.system.id).toBe("string");
		expect(changeType.system.name).toBeDefined();
		expect(typeof changeType.system.name).toBe("string");

		if (changeType.changeType !== null)
			expect(typeof changeType.changeType).toBe("string");
	}

	// Helper function to validate status structure
	function validateStatus(status: any) {
		expect(status).toBeDefined();
		expect(status.system).toBeDefined();
		expect(status.system.id).toBeDefined();
		expect(typeof status.system.id).toBe("string");
		expect(status.system.name).toBeDefined();
		expect(typeof status.system.name).toBe("string");

		if (status.description !== null)
			expect(typeof status.description).toBe("string");
		if (status.identifier !== null)
			expect(typeof status.identifier).toBe("string");
		if (status.system.label !== null)
			expect(typeof status.system.label).toBe("string");
	}

	describe("GetAllProducts", () => {
		test("should fetch all products with correct structure", async () => {
			const result = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.manySitecoreProduct).toBeDefined();

			const products = result.data.manySitecoreProduct;
			expect(products).not.toBeNull();

			if (products) {
				expect(typeof products.hasMore).toBe("boolean");
				if (products.cursor !== null)
					expect(typeof products.cursor).toBe("string");
				expect(products.results).toBeDefined();
				expect(Array.isArray(products.results)).toBe(true);

				if (products.results && products.results.length > 0) {
					products.results.forEach((product) => {
						if (product) {
							validateProduct(product);
						}
					});
				}
			}
		});

		test("should return products with pagination info", async () => {
			const result = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = result.data.manySitecoreProduct;
			expect(products).not.toBeNull();

			if (products) {
				expect(products.hasMore).toBeDefined();
				expect(products.cursor).toBeDefined();
				expect(products.results).toBeDefined();
			}
		});
	});

	describe("GetAllChangetypes", () => {
		test("should fetch all change types with correct structure", async () => {
			const result = await fetchGraphQL<
				GetAllChangetypesQuery,
				GetAllChangetypesQueryVariables
			>(GetAllChangetypesDocument, credentials, preview);

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.manyChangetype).toBeDefined();

			const changeTypes = result.data.manyChangetype;
			expect(changeTypes).not.toBeNull();

			if (changeTypes) {
				expect(typeof changeTypes.hasMore).toBe("boolean");
				if (changeTypes.cursor !== null)
					expect(typeof changeTypes.cursor).toBe("string");
				expect(changeTypes.results).toBeDefined();
				expect(Array.isArray(changeTypes.results)).toBe(true);

				if (changeTypes.results && changeTypes.results.length > 0) {
					changeTypes.results.forEach((changeType) => {
						if (changeType) {
							validateChangeType(changeType);
						}
					});
				}
			}
		});

		test("should return change types with pagination info", async () => {
			const result = await fetchGraphQL<
				GetAllChangetypesQuery,
				GetAllChangetypesQueryVariables
			>(GetAllChangetypesDocument, credentials, preview);

			const changeTypes = result.data.manyChangetype;
			expect(changeTypes).not.toBeNull();

			if (changeTypes) {
				expect(changeTypes.hasMore).toBeDefined();
				expect(changeTypes.cursor).toBeDefined();
				expect(changeTypes.results).toBeDefined();
			}
		});
	});

	describe("GetAllStatus", () => {
		test("should fetch all statuses with correct structure", async () => {
			const result = await fetchGraphQL<
				GetAllStatusQuery,
				GetAllStatusQueryVariables
			>(GetAllStatusDocument, credentials, preview);

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.manyStatus).toBeDefined();

			const statuses = result.data.manyStatus;
			expect(statuses).not.toBeNull();

			if (statuses) {
				expect(typeof statuses.hasMore).toBe("boolean");
				if (statuses.cursor !== null)
					expect(typeof statuses.cursor).toBe("string");
				expect(statuses.results).toBeDefined();
				expect(Array.isArray(statuses.results)).toBe(true);

				if (statuses.results && statuses.results.length > 0) {
					statuses.results.forEach((status) => {
						if (status) {
							validateStatus(status);
						}
					});
				}
			}
		});

		test("should return statuses with pagination info", async () => {
			const result = await fetchGraphQL<
				GetAllStatusQuery,
				GetAllStatusQueryVariables
			>(GetAllStatusDocument, credentials, preview);

			const statuses = result.data.manyStatus;
			expect(statuses).not.toBeNull();

			if (statuses) {
				expect(statuses.hasMore).toBeDefined();
				expect(statuses.cursor).toBeDefined();
				expect(statuses.results).toBeDefined();
			}
		});
	});

	describe("SearchByDate", () => {
		test("should fetch changelog entries by date range", async () => {
			const startDate = new Date("2024-01-01");
			const endDate = new Date("2024-12-31");

			const result = await fetchGraphQL<
				SearchByDateQuery,
				SearchByDateQueryVariables
			>(SearchByDateDocument, credentials, preview, {
				startDate,
				endDate,
				first: 5,
			});

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.changelog).toBeDefined();

			const changelog = result.data.changelog;
			expect(changelog).not.toBeNull();

			if (changelog) {
				expect(typeof changelog.hasMore).toBe("boolean");
				if (changelog.cursor !== null)
					expect(typeof changelog.cursor).toBe("string");
				expect(changelog.results).toBeDefined();
				expect(Array.isArray(changelog.results)).toBe(true);

				if (changelog.results && changelog.results.length > 0) {
					changelog.results.forEach((entry) => {
						if (entry) {
							validateChangelogEntry(entry);
						}
					});
				}
			}
		});

		test("should support pagination with cursor", async () => {
			const startDate = new Date("2024-01-01");
			const endDate = new Date("2024-12-31");

			const firstResult = await fetchGraphQL<
				SearchByDateQuery,
				SearchByDateQueryVariables
			>(SearchByDateDocument, credentials, preview, {
				startDate,
				endDate,
				first: 2,
			});

			const firstChangelog = firstResult.data.changelog;
			if (firstChangelog?.hasMore && firstChangelog.cursor) {
				const secondResult = await fetchGraphQL<
					SearchByDateQuery,
					SearchByDateQueryVariables
				>(SearchByDateDocument, credentials, preview, {
					startDate,
					endDate,
					first: 2,
					after: firstChangelog.cursor,
				});

				expect(secondResult.data.changelog).toBeDefined();
			}
		});
	});

	describe("SearchByProduct", () => {
		test("should fetch changelog entries by product", async () => {
			// First, get a product ID to use for testing
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length === 0) {
				test.skip("No products available for testing");
				return;
			}

			const productId = products[0]?.system.id;
			if (!productId) {
				test.skip("Product ID not available");
				return;
			}

			const date = new Date();

			const result = await fetchGraphQL<
				SearchByProductQuery,
				SearchByProductQueryVariables
			>(SearchByProductDocument, credentials, preview, {
				date,
				productId: [productId],
				first: 5,
			});

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.changelog).toBeDefined();

			const changelog = result.data.changelog;
			expect(changelog).not.toBeNull();

			if (changelog) {
				expect(typeof changelog.hasMore).toBe("boolean");
				if (changelog.cursor !== null)
					expect(typeof changelog.cursor).toBe("string");
				expect(changelog.results).toBeDefined();
				expect(Array.isArray(changelog.results)).toBe(true);

				if (changelog.results && changelog.results.length > 0) {
					changelog.results.forEach((entry) => {
						if (entry) {
							validateChangelogEntry(entry);
						}
					});
				}
			}
		});

		test("should filter by change type IDs", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);
			const changeTypesResult = await fetchGraphQL<
				GetAllChangetypesQuery,
				GetAllChangetypesQueryVariables
			>(GetAllChangetypesDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			const changeTypes = changeTypesResult.data.manyChangetype?.results;

			if (
				!products ||
				products.length === 0 ||
				!changeTypes ||
				changeTypes.length === 0
			) {
				test.skip("No products or change types available for testing");
				return;
			}

			const productId = products[0]?.system.id;
			const changeTypeId = changeTypes[0]?.system.id;

			if (!productId || !changeTypeId) {
				test.skip("Product ID or change type ID not available");
				return;
			}

			const date = new Date();

			const result = await fetchGraphQL<
				SearchByProductQuery,
				SearchByProductQueryVariables
			>(SearchByProductDocument, credentials, preview, {
				date,
				productId: [productId],
				changeTypeIds: [changeTypeId],
				first: 5,
			});

			expect(result.data.changelog).toBeDefined();
		});
	});

	describe("SearchByTitle", () => {
		test("should fetch changelog entries by title", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length === 0) {
				test.skip("No products available for testing");
				return;
			}

			const productId = products[0]?.system.id;
			if (!productId) {
				test.skip("Product ID not available");
				return;
			}

			const date = new Date();

			const result = await fetchGraphQL<
				SearchByTitleQuery,
				SearchByTitleQueryVariables
			>(SearchByTitleDocument, credentials, preview, {
				date,
				productId: [productId],
				entryTitle: ["test"],
			});

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.data).toBeDefined();

			const changelog = result.data.data;
			expect(changelog).not.toBeNull();

			if (changelog) {
				expect(typeof changelog.hasMore).toBe("boolean");
				if (changelog.cursor !== null)
					expect(typeof changelog.cursor).toBe("string");
				expect(changelog.results).toBeDefined();
				expect(Array.isArray(changelog.results)).toBe(true);

				if (changelog.results && changelog.results.length > 0) {
					changelog.results.forEach((entry) => {
						if (entry) {
							validateChangelogEntry(entry);
						}
					});
				}
			}
		});
	});

	describe("SearchByTitleAndDate", () => {
		test("should fetch changelog entries by title and date range", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length === 0) {
				test.skip("No products available for testing");
				return;
			}

			const productId = products[0]?.system.id;
			if (!productId) {
				test.skip("Product ID not available");
				return;
			}

			const startDate = new Date("2024-01-01");
			const endDate = new Date("2024-12-31");

			const result = await fetchGraphQL<
				SearchByTitleAndDateQuery,
				SearchByTitleAndDateQueryVariables
			>(SearchByTitleAndDateDocument, credentials, preview, {
				startDate,
				endDate,
				productId,
				entryTitle: ["test"],
			});

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.data).toBeDefined();

			const changelog = result.data.data;
			expect(changelog).not.toBeNull();

			if (changelog) {
				expect(typeof changelog.hasMore).toBe("boolean");
				if (changelog.cursor !== null)
					expect(typeof changelog.cursor).toBe("string");
				expect(changelog.results).toBeDefined();
				expect(Array.isArray(changelog.results)).toBe(true);

				if (changelog.results && changelog.results.length > 0) {
					changelog.results.forEach((entry) => {
						if (entry) {
							validateChangelogEntry(entry);
						}
					});
				}
			}
		});
	});

	describe("SearchByProductsAndChangeTypes", () => {
		test("should fetch changelog entries by products and change types", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);
			const changeTypesResult = await fetchGraphQL<
				GetAllChangetypesQuery,
				GetAllChangetypesQueryVariables
			>(GetAllChangetypesDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			const changeTypes = changeTypesResult.data.manyChangetype?.results;

			if (
				!products ||
				products.length === 0 ||
				!changeTypes ||
				changeTypes.length === 0
			) {
				test.skip("No products or change types available for testing");
				return;
			}

			const productIds = [products[0]?.system.id].filter(Boolean) as string[];
			const changeTypeIds = [changeTypes[0]?.system.id].filter(
				Boolean,
			) as string[];

			if (productIds.length === 0 || changeTypeIds.length === 0) {
				test.skip("Product IDs or change type IDs not available");
				return;
			}

			const date = new Date();

			const result = await fetchGraphQL<
				SearchByProductsAndChangeTypesQuery,
				SearchByProductsAndChangeTypesQueryVariables
			>(SearchByProductsAndChangeTypesDocument, credentials, preview, {
				date,
				productIds,
				changeTypeIds,
				entryTitle: [],
				first: 5,
			});

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.changelog).toBeDefined();

			const changelog = result.data.changelog;
			expect(changelog).not.toBeNull();

			if (changelog) {
				expect(typeof changelog.hasMore).toBe("boolean");
				if (changelog.cursor !== null)
					expect(typeof changelog.cursor).toBe("string");
				expect(changelog.results).toBeDefined();
				expect(Array.isArray(changelog.results)).toBe(true);

				if (changelog.results && changelog.results.length > 0) {
					changelog.results.forEach((entry) => {
						if (entry) {
							validateChangelogEntry(entry);
						}
					});
				}
			}
		});

		test("should filter by entry title", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length === 0) {
				test.skip("No products available for testing");
				return;
			}

			const productIds = [products[0]?.system.id].filter(Boolean) as string[];

			if (productIds.length === 0) {
				test.skip("Product IDs not available");
				return;
			}

			const date = new Date();

			const result = await fetchGraphQL<
				SearchByProductsAndChangeTypesQuery,
				SearchByProductsAndChangeTypesQueryVariables
			>(SearchByProductsAndChangeTypesDocument, credentials, preview, {
				date,
				productIds,
				changeTypeIds: [],
				entryTitle: ["test"],
				first: 5,
			});

			expect(result.data.changelog).toBeDefined();
		});
	});

	describe("SearchByProductsAndChangeTypesAndBreakingChange", () => {
		test("should fetch changelog entries with breaking change filter", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length === 0) {
				test.skip("No products available for testing");
				return;
			}

			const productIds = [products[0]?.system.id].filter(Boolean) as string[];

			if (productIds.length === 0) {
				test.skip("Product IDs not available");
				return;
			}

			const date = new Date();

			// Test with breaking: true
			const breakingResult = await fetchGraphQL<
				SearchByProductsAndChangeTypesAndBreakingChangeQuery,
				SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables
			>(
				SearchByProductsAndChangeTypesAndBreakingChangeDocument,
				credentials,
				preview,
				{
					date,
					productIds,
					changeTypeIds: [],
					breaking: true,
					first: 5,
				},
			);

			expect(breakingResult).toBeDefined();
			expect(breakingResult.data).toBeDefined();
			expect(breakingResult.data.changelog).toBeDefined();

			const breakingChangelog = breakingResult.data.changelog;
			if (breakingChangelog?.results) {
				breakingChangelog.results.forEach((entry) => {
					if (entry && entry.breakingChange !== null) {
						expect(entry.breakingChange).toBe(true);
					}
				});
			}

			// Test with breaking: false
			const nonBreakingResult = await fetchGraphQL<
				SearchByProductsAndChangeTypesAndBreakingChangeQuery,
				SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables
			>(
				SearchByProductsAndChangeTypesAndBreakingChangeDocument,
				credentials,
				preview,
				{
					date,
					productIds,
					changeTypeIds: [],
					breaking: false,
					first: 5,
				},
			);

			expect(nonBreakingResult.data.changelog).toBeDefined();
		});
	});

	describe("GetNumberOfEntriesByProduct", () => {
		test("should fetch number of entries by product ID", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length === 0) {
				test.skip("No products available for testing");
				return;
			}

			const productId = products[0]?.system.id;
			if (!productId) {
				test.skip("Product ID not available");
				return;
			}

			const result = await fetchGraphQL<
				GetNumberOfEntriesByProductQuery,
				GetNumberOfEntriesByProductQueryVariables
			>(GetNumberOfEntriesByProductDocument, credentials, preview, {
				productId: [productId],
			});

			expect(result).toBeDefined();
			expect(result.data).toBeDefined();
			expect(result.data.changelog).toBeDefined();

			const changelog = result.data.changelog;
			expect(changelog).not.toBeNull();

			if (changelog) {
				expect(typeof changelog.hasMore).toBe("boolean");
				expect(changelog.results).toBeDefined();
				expect(Array.isArray(changelog.results)).toBe(true);

				if (changelog.results) {
					changelog.results.forEach((entry) => {
						if (entry) {
							expect(entry.system).toBeDefined();
							expect(entry.system.id).toBeDefined();
							expect(typeof entry.system.id).toBe("string");
						}
					});
				}
			}
		});

		test("should handle multiple product IDs", async () => {
			const productsResult = await fetchGraphQL<
				GetAllProductsQuery,
				GetAllProductsQueryVariables
			>(GetAllProductsDocument, credentials, preview);

			const products = productsResult.data.manySitecoreProduct?.results;
			if (!products || products.length < 2) {
				test.skip("Not enough products available for testing");
				return;
			}

			const productIds = [
				products[0]?.system.id,
				products[1]?.system.id,
			].filter(Boolean) as string[];

			if (productIds.length < 2) {
				test.skip("Product IDs not available");
				return;
			}

			const result = await fetchGraphQL<
				GetNumberOfEntriesByProductQuery,
				GetNumberOfEntriesByProductQueryVariables
			>(GetNumberOfEntriesByProductDocument, credentials, preview, {
				productId: productIds,
			});

			expect(result.data.changelog).toBeDefined();
		});
	});
});
