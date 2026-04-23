import { Changelog, GetEntryCountByProductId } from "@src/lib/changelog/changelog";
import {
    ChangelogNotFoundError,
    ChangelogValidationError,
} from "@src/lib/changelog/errors";
import type { ChangelogCredentials } from "@src/lib/changelog/types";
import {
    mockedChangelogEntries,
    mockedChangelogEntry,
} from "__mocks__/changelog/changelogEntry.mock";
import { beforeEach, describe, expect, test, vi } from "vitest";

// Mock dependencies
vi.mock("@src/lib/changelog/common/fetch");
vi.mock("@src/lib/changelog/cache");
vi.mock("@src/lib/changelog/types/changeLogEntry", async () => {
	const actual = await vi.importActual("@src/lib/changelog/types/changeLogEntry");
	return {
		...actual,
		ParseRawData: vi.fn(),
		parseChangeLogItem: vi.fn(),
	};
});
vi.mock("@src/lib/changelog/types/changeType", async () => {
	const actual = await vi.importActual("@src/lib/changelog/types/changeType");
	return {
		...actual,
		ParseChangeType: vi.fn(),
	};
});
vi.mock("@src/lib/changelog/types/status", async () => {
	const actual = await vi.importActual("@src/lib/changelog/types/status");
	return {
		...actual,
		ParseStatus: vi.fn(),
	};
});
vi.mock("@src/lib/changelog/types/product", async () => {
	const actual = await vi.importActual("@src/lib/changelog/types/product");
	return {
		...actual,
		ParseProduct: vi.fn(),
	};
});

import {
    getCachedEntryCount,
    requestDeduplicator,
    setCachedEntryCount,
} from "@src/lib/changelog/cache";
import { fetchGraphQL } from "@src/lib/changelog/common/fetch";
import {
    ParseRawData,
    parseChangeLogItem,
} from "@src/lib/changelog/types/changeLogEntry";
import { ParseChangeType } from "@src/lib/changelog/types/changeType";
import { ParseProduct } from "@src/lib/changelog/types/product";
import { ParseStatus } from "@src/lib/changelog/types/status";

describe("Changelog", () => {
	const mockCredentials: ChangelogCredentials = {
		production: {
			endpoint: "https://api.example.com/production",
			token: "prod-token",
		},
		preview: {
			endpoint: "https://api.example.com/preview",
			token: "preview-token",
		},
	};

	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(requestDeduplicator.execute).mockImplementation(
			async (_key, fn) => fn(),
		);
	});

	describe("constructor", () => {
		test("should create instance with credentials and default preview to false", () => {
			const changelog = new Changelog(mockCredentials);
			expect(changelog).toBeInstanceOf(Changelog);
		});

		test("should create instance with preview enabled", () => {
			const changelog = new Changelog(mockCredentials, true);
			expect(changelog).toBeInstanceOf(Changelog);
		});
	});

	describe("getAllEntries", () => {
		test("should call getEntries with default pageSize", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getAllEntries();

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});
	});

	describe("getEntryByTitleAndDate", () => {
		test("should get entry by title and date with options object", async () => {
			const changelog = new Changelog(mockCredentials);
			const options = {
				entryTitle: "Test Entry",
				date: "12072024",
				productId: "product-123",
			};

			vi.mocked(parseChangeLogItem).mockReturnValue(mockedChangelogEntry);
			vi.mocked(fetchGraphQL).mockResolvedValue({
				data: {
					data: {
						results: [{}],
					},
				} as any,
			});

			const result = await changelog.getEntryByTitleAndDate(options);

			expect(result).toEqual(mockedChangelogEntry);
			expect(fetchGraphQL).toHaveBeenCalled();
			expect(requestDeduplicator.execute).toHaveBeenCalled();
		});

		test("should get entry by title and date with legacy signature", async () => {
			const changelog = new Changelog(mockCredentials);

			vi.mocked(parseChangeLogItem).mockReturnValue(mockedChangelogEntry);
			vi.mocked(fetchGraphQL).mockResolvedValue({
				data: {
					data: {
						results: [{}],
					},
				} as any,
			});

			const result = await changelog.getEntryByTitleAndDate(
				"Test Entry",
				"12072024",
				"product-123",
			);

			expect(result).toEqual(mockedChangelogEntry);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should throw ChangelogValidationError when entryTitle is missing", async () => {
			const changelog = new Changelog(mockCredentials);

			await expect(
				changelog.getEntryByTitleAndDate({
					entryTitle: "",
					date: "12072024",
					productId: "product-123",
				}),
			).rejects.toThrow(ChangelogValidationError);
		});

		test("should throw ChangelogValidationError with legacy signature when date or productId missing", async () => {
			const changelog = new Changelog(mockCredentials);

			await expect(
				changelog.getEntryByTitleAndDate(
					"Test Entry",
					undefined,
					"product-123",
				),
			).rejects.toThrow(ChangelogValidationError);
			await expect(
				changelog.getEntryByTitleAndDate("Test Entry", "12072024", undefined),
			).rejects.toThrow(ChangelogValidationError);
		});

		test("should throw ChangelogNotFoundError when entry not found", async () => {
			const changelog = new Changelog(mockCredentials);

			vi.mocked(fetchGraphQL).mockResolvedValue({
				data: {
					data: {
						results: [],
					},
				} as any,
			});

			await expect(
				changelog.getEntryByTitleAndDate({
					entryTitle: "Non-existent",
					date: "12072024",
					productId: "product-123",
				}),
			).rejects.toThrow(ChangelogNotFoundError);
		});
	});

	describe("getEntryByTitle", () => {
		test("should get entry by title with options object", async () => {
			const changelog = new Changelog(mockCredentials);
			const options = {
				entryTitle: "Test Entry",
				productId: "product-123",
			};

			vi.mocked(parseChangeLogItem).mockReturnValue(mockedChangelogEntry);
			vi.mocked(fetchGraphQL).mockResolvedValue({
				data: {
					data: {
						results: [{}],
					},
				} as any,
			});

			const result = await changelog.getEntryByTitle(options);

			expect(result).toEqual(mockedChangelogEntry);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get entry by title with legacy signature", async () => {
			const changelog = new Changelog(mockCredentials);

			vi.mocked(parseChangeLogItem).mockReturnValue(mockedChangelogEntry);
			vi.mocked(fetchGraphQL).mockResolvedValue({
				data: {
					data: {
						results: [{}],
					},
				} as any,
			});

			const result = await changelog.getEntryByTitle(
				"Test Entry",
				"product-123",
			);

			expect(result).toEqual(mockedChangelogEntry);
		});

		test("should throw ChangelogNotFoundError when entry not found", async () => {
			const changelog = new Changelog(mockCredentials);

			vi.mocked(fetchGraphQL).mockResolvedValue({
				data: {
					data: {
						results: [],
					},
				} as any,
			});

			await expect(
				changelog.getEntryByTitle({
					entryTitle: "Non-existent",
				}),
			).rejects.toThrow(ChangelogNotFoundError);
		});
	});

	describe("getEntriesByDate", () => {
		test("should get entries by date with default pageSize", async () => {
			const changelog = new Changelog(mockCredentials);
			const date = new Date("2024-07-12");
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntriesByDate(date);

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get entries by date with custom pageSize and cursor", async () => {
			const changelog = new Changelog(mockCredentials);
			const date = new Date("2024-07-12");
			const mockResult = {
				total: 1,
				hasNext: true,
				endCursor: "cursor-123",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntriesByDate(date, 10, "cursor-123");

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});
	});

	describe("getEntriesByProduct", () => {
		test("should get entries by product", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntriesByProduct("product-123");

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});
	});

	describe("getEntriesPaginated", () => {
		test("should call getEntries with correct parameters", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntriesPaginated(
				"10",
				"product-123",
				"change-123",
				"cursor-123",
				true,
			);

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});
	});

	describe("getEntriesByTitleProductChangeType", () => {
		test("should get entries with entryTitle", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntriesByTitleProductChangeType({
				entryTitle: "Test Entry",
				productId: "product-123",
				changeTypeId: "change-123",
			});

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should call getEntries when entryTitle is undefined", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntriesByTitleProductChangeType({
				productId: "product-123",
				changeTypeId: "change-123",
			});

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});
	});

	describe("getEntries", () => {
		test("should get entries with no filters", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntries();

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get entries with productId filter", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntries({ productId: "product-123" });

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get entries with breaking filter", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntries({ breaking: true });

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get entries with pagination", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: true,
				endCursor: "cursor-123",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntries({
				pageSize: 10,
				endCursor: "cursor-123",
			});

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get entries with all filters", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockResult = {
				total: 1,
				hasNext: false,
				endCursor: "",
				entries: mockedChangelogEntries,
			};

			vi.mocked(ParseRawData).mockReturnValue(mockResult);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getEntries({
				productId: "product-123|product-456",
				changeTypeId: "change-123",
				pageSize: 20,
				endCursor: "cursor-123",
				breaking: true,
			});

			expect(result).toEqual(mockResult);
			expect(fetchGraphQL).toHaveBeenCalled();
		});
	});

	describe("getChangeTypes", () => {
		test("should get change types", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockChangeTypes = [
				{ id: "1", name: "Feature", changeType: "Feature", type: "feature" },
				{ id: "2", name: "Fix", changeType: "Fix", type: "fix" },
			];

			vi.mocked(ParseChangeType).mockReturnValue(mockChangeTypes);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getChangeTypes();

			expect(result).toEqual(mockChangeTypes);
			expect(fetchGraphQL).toHaveBeenCalled();
			expect(requestDeduplicator.execute).toHaveBeenCalled();
		});
	});

	describe("getStatus", () => {
		test("should get statuses", async () => {
			const changelog = new Changelog(mockCredentials);
			const mockStatuses = [
				{
					id: "1",
					name: "Available",
					identifier: "available",
					description: "",
				},
				{
					id: "2",
					name: "Coming Soon",
					identifier: "coming-soon",
					description: "",
				},
			];

			vi.mocked(ParseStatus).mockReturnValue(mockStatuses);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getStatus();

			expect(result).toEqual(mockStatuses);
			expect(fetchGraphQL).toHaveBeenCalled();
			expect(requestDeduplicator.execute).toHaveBeenCalled();
		});
	});

	describe("getProducts", () => {
		test("should get products with entry counts in production mode", async () => {
			const changelog = new Changelog(mockCredentials, false);
			const mockProducts = [
				{
					id: "1",
					name: "Product A",
					darkIcon: "",
					lightIcon: "",
					hasEntries: false,
				},
				{
					id: "2",
					name: "Product B",
					darkIcon: "",
					lightIcon: "",
					hasEntries: false,
				},
			];

			vi.mocked(ParseProduct).mockReturnValue(mockProducts);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });
			vi.mocked(getCachedEntryCount).mockReturnValue(null);
			vi.mocked(fetchGraphQL)
				.mockResolvedValueOnce({ data: {} as any })
				.mockResolvedValueOnce({
					data: {
						changelog: {
							results: [{}, {}],
						},
					} as any,
				});

			const result = await changelog.getProducts();

			expect(result).toHaveLength(2);
			expect(fetchGraphQL).toHaveBeenCalled();
		});

		test("should get products with hasEntries true in preview mode", async () => {
			const changelog = new Changelog(mockCredentials, true);
			const mockProducts = [
				{
					id: "1",
					name: "Product A",
					darkIcon: "",
					lightIcon: "",
					hasEntries: false,
				},
			];

			vi.mocked(ParseProduct).mockReturnValue(mockProducts);
			vi.mocked(fetchGraphQL).mockResolvedValue({ data: {} as any });

			const result = await changelog.getProducts();

			expect(result[0].hasEntries).toBe(true);
		});
	});
});

describe("GetEntryCountByProductId", () => {
	const mockCredentials: ChangelogCredentials = {
		production: {
			endpoint: "https://api.example.com/production",
			token: "prod-token",
		},
		preview: {
			endpoint: "https://api.example.com/preview",
			token: "preview-token",
		},
	};

	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(requestDeduplicator.execute).mockImplementation(
			async (_key, fn) => fn(),
		);
	});

	test("should return cached count if available", async () => {
		vi.mocked(getCachedEntryCount).mockReturnValue(5);

		const result = await GetEntryCountByProductId(
			mockCredentials,
			"product-123",
			false,
		);

		expect(result).toBe(5);
		expect(fetchGraphQL).not.toHaveBeenCalled();
	});

	test("should fetch and cache count if not cached", async () => {
		vi.mocked(getCachedEntryCount).mockReturnValue(null);
		vi.mocked(fetchGraphQL).mockResolvedValue({
			data: {
				changelog: {
					results: [{}, {}, {}],
				},
			} as any,
		});

		const result = await GetEntryCountByProductId(
			mockCredentials,
			"product-123",
			false,
		);

		expect(result).toBe(3);
		expect(setCachedEntryCount).toHaveBeenCalledWith("product-123", false, 3);
		expect(fetchGraphQL).toHaveBeenCalled();
	});

	test("should return 0 if no results", async () => {
		vi.mocked(getCachedEntryCount).mockReturnValue(null);
		vi.mocked(fetchGraphQL).mockResolvedValue({
			data: {
				changelog: {
					results: [],
				},
			} as any,
		});

		const result = await GetEntryCountByProductId(
			mockCredentials,
			"product-123",
			false,
		);

		expect(result).toBe(0);
	});

	test("should use request deduplication", async () => {
		vi.mocked(getCachedEntryCount).mockReturnValue(null);
		vi.mocked(fetchGraphQL).mockResolvedValue({
			data: {
				changelog: {
					results: [{}],
				},
			} as any,
		});

		await GetEntryCountByProductId(mockCredentials, "product-123", false);

		expect(requestDeduplicator.execute).toHaveBeenCalled();
	});

	test("should check cache again after deduplication", async () => {
		vi.mocked(getCachedEntryCount)
			.mockReturnValueOnce(null)
			.mockReturnValueOnce(10);
		vi.mocked(fetchGraphQL).mockResolvedValue({
			data: {
				changelog: {
					results: [{}],
				},
			} as any,
		});

		const result = await GetEntryCountByProductId(
			mockCredentials,
			"product-123",
			false,
		);

		expect(result).toBe(10);
		expect(fetchGraphQL).not.toHaveBeenCalled();
	});
});
