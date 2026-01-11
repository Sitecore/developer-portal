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
	SearchByChangeTypesAndBreakingChangeDocument,
	type SearchByChangeTypesAndBreakingChangeQuery,
	type SearchByChangeTypesAndBreakingChangeQueryVariables,
	SearchByChangeTypesDocument,
	type SearchByChangeTypesQuery,
	type SearchByChangeTypesQueryVariables,
	SearchByDateDocument,
	type SearchByDateQuery,
	type SearchByDateQueryVariables,
	SearchByProductAndBreakingDocument,
	type SearchByProductAndBreakingQueryVariables,
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
	SearchDocument,
	SearchOnlyBreakingChangesDocument,
	type SearchOnlyBreakingChangesQuery,
	type SearchOnlyBreakingChangesQueryVariables,
	type SearchQuery,
	type SearchQueryVariables,
} from "@data/gql/generated/graphql";

import type { SearchByProductAndBreakingQuery } from "@data/gql/generated/graphql";
import {
	getCachedEntryCount,
	requestDeduplicator,
	setCachedEntryCount,
} from "./cache";
import { getSelectedIds } from "./common/changelog";
import { fetchGraphQL } from "./common/fetch";
import { ChangelogNotFoundError, ChangelogValidationError } from "./errors";
import { ParseStatus, type Status } from "./types";
import {
	type ChangelogEntry,
	type ChangelogEntryList,
	ParseRawData,
	parseChangeLogItem,
} from "./types/changeLogEntry";
import type { ChangelogCredentials } from "./types/changelog";
import { type ChangeType, ParseChangeType } from "./types/changeType";
import { ParseProduct, type Product } from "./types/product";
import { createDateRange, parseDateString } from "./utils/date";

/**
 * Options for getting changelog entries
 */
export interface GetEntriesOptions {
	/** Product ID(s) to filter by (pipe-separated string) */
	productId?: string;
	/** Change type ID(s) to filter by (pipe-separated string) */
	changeTypeId?: string;
	/** Number of entries per page */
	pageSize?: number;
	/** Cursor for pagination */
	endCursor?: string;
	/** Filter for breaking changes only */
	breaking?: boolean;
}

/**
 * Options for getting an entry by title
 */
export interface GetEntryByTitleOptions {
	/** Entry title to search for */
	entryTitle: string;
	/** Optional product ID to filter by */
	productId?: string;
}

/**
 * Options for getting an entry by title and date
 */
export interface GetEntryByTitleAndDateOptions {
	/** Entry title to search for */
	entryTitle: string;
	/** Date string in format DDMMYYYY */
	date: string;
	/** Product ID to filter by */
	productId: string;
}

/**
 * Get today's date plus one day
 * @returns Date object representing tomorrow
 */
function getTomorrow(): Date {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow;
}

/**
 * Main Changelog class for interacting with changelog data
 */
export class Changelog {
	private credentials: ChangelogCredentials;
	private isPreview: boolean;

	/**
	 * Create a new Changelog instance
	 * @param changelogCredentials - Credentials for accessing changelog API
	 * @param usePreview - Whether to use preview endpoint (default: false)
	 */
	constructor(
		changelogCredentials: ChangelogCredentials,
		usePreview?: boolean,
	) {
		this.credentials = changelogCredentials;
		this.isPreview = usePreview ?? false;
	}

	/**
	 * Get all changelog entries (deprecated - use getEntries instead)
	 * @deprecated Use getEntries() instead
	 * @returns List of changelog entries
	 */
	async getAllEntries(): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
		return this.getEntries({ pageSize: 10 });
	}

	/**
	 * Get a changelog entry by title and date
	 * @param optionsOrTitle - Options object or entry title (legacy)
	 * @param date - Date string (legacy, required if first param is string)
	 * @param productId - Product ID (legacy, required if first param is string)
	 * @returns Changelog entry
	 * @throws ChangelogValidationError if entryTitle is missing
	 * @throws ChangelogNotFoundError if entry is not found
	 */
	async getEntryByTitleAndDate(
		optionsOrTitle: GetEntryByTitleAndDateOptions | string,
		date?: string,
		productId?: string,
	): Promise<ChangelogEntry> {
		let options: GetEntryByTitleAndDateOptions;

		// Handle legacy signature
		if (typeof optionsOrTitle === "string") {
			if (!date || !productId) {
				throw new ChangelogValidationError(
					"Date and productId are required when using legacy signature",
				);
			}
			options = { entryTitle: optionsOrTitle, date, productId };
		} else {
			options = optionsOrTitle;
		}

		if (!options.entryTitle) {
			throw new ChangelogValidationError(
				"Entry title is required to search by title and date",
			);
		}

		const parsedDate = parseDateString(options.date);
		const { startDate, endDate } = createDateRange(parsedDate);

		const cacheKey = `entry:${options.entryTitle}:${options.date}:${options.productId}`;

		return requestDeduplicator.execute(cacheKey, async () => {
			const response = await fetchGraphQL<
				SearchByTitleAndDateQuery,
				SearchByTitleAndDateQueryVariables
			>(SearchByTitleAndDateDocument, this.credentials, this.isPreview, {
				startDate,
				endDate,
				productId: options.productId,
				entryTitle: options.entryTitle
					.split("-")
					.map((term: string) => term.trim()),
			});

			const results =
				response.data.data?.results?.filter(
					(r): r is NonNullable<typeof r> => r !== null,
				) ?? [];

			if (results.length === 0) {
				throw new ChangelogNotFoundError(
					`No changelog entry found for title "${options.entryTitle}" and date "${options.date}"`,
					{
						entryTitle: options.entryTitle,
						date: options.date,
						productId: options.productId,
					},
				);
			}

			return parseChangeLogItem(results[0]);
		});
	}

	/**
	 * Get a changelog entry by title
	 * @param optionsOrTitle - Options object or entry title (legacy)
	 * @param productId - Optional product ID (legacy, used if first param is string)
	 * @returns Changelog entry
	 * @throws ChangelogNotFoundError if entry is not found
	 */
	async getEntryByTitle(
		optionsOrTitle: GetEntryByTitleOptions | string,
		productId?: string,
	): Promise<ChangelogEntry> {
		const options: GetEntryByTitleOptions =
			typeof optionsOrTitle === "string"
				? { entryTitle: optionsOrTitle, productId }
				: optionsOrTitle;

		const cacheKey = `entry:${options.entryTitle}:${options.productId ?? "all"}`;

		return requestDeduplicator.execute(cacheKey, async () => {
			const response = await fetchGraphQL<
				SearchByTitleQuery,
				SearchByTitleQueryVariables
			>(SearchByTitleDocument, this.credentials, this.isPreview, {
				date: new Date(),
				productId: options.productId ? [options.productId] : [],
				entryTitle: options.entryTitle
					.split("-")
					.map((term: string) => term.trim()),
			});

			const results =
				response.data.data?.results?.filter(
					(r): r is NonNullable<typeof r> => r !== null,
				) ?? [];

			if (results.length === 0) {
				throw new ChangelogNotFoundError(
					`No changelog entry found for title "${options.entryTitle}"`,
					{
						entryTitle: options.entryTitle,
						productId: options.productId,
					},
				);
			}

			return parseChangeLogItem(results[0]);
		});
	}

	/**
	 * Get changelog entries by date
	 * @param date - Date to search around
	 * @param pageSize - Number of entries per page (default: 5)
	 * @param endCursor - Cursor for pagination
	 * @returns List of changelog entries
	 */
	async getEntriesByDate(
		date: Date,
		pageSize?: number,
		endCursor?: string,
	): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
		const { startDate, endDate } = createDateRange(date);

		const response = await fetchGraphQL<
			SearchByDateQuery,
			SearchByDateQueryVariables
		>(SearchByDateDocument, this.credentials, this.isPreview, {
			startDate,
			endDate,
			first: pageSize ?? 5,
			after: endCursor ?? null,
		});

		return ParseRawData(response.data);
	}

	/**
	 * Get changelog entries by product
	 * @param productId - Product ID to filter by
	 * @returns List of changelog entries
	 */
	async getEntriesByProduct(
		productId: string,
		_breaking?: boolean,
	): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
		const response = await fetchGraphQL<
			SearchByProductQuery,
			SearchByProductQueryVariables
		>(SearchByProductDocument, this.credentials, this.isPreview, {
			date: new Date(),
			productId: getSelectedIds(productId),
			//breaking: breaking ?? false,
		});

		return ParseRawData(response.data);
	}

	/**
	 * Get paginated changelog entries (legacy method)
	 * @deprecated Use getEntries() instead
	 * @param pageSize - Page size as string
	 * @param productId - Product ID
	 * @param changeTypeId - Change type ID
	 * @param endCursor - Cursor for pagination
	 * @param breaking - Filter for breaking changes
	 * @returns List of changelog entries
	 */
	async getEntriesPaginated(
		pageSize: string,
		productId: string,
		changeTypeId: string,
		endCursor?: string,
		breaking?: boolean,
	): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
		return this.getEntries({
			productId,
			changeTypeId,
			pageSize: Number(pageSize),
			endCursor,
			breaking,
		});
	}

	/**
	 * Get changelog entries by title, product, and change type
	 * @param options - Options for filtering entries
	 * @returns List of changelog entries
	 */
	async getEntriesByTitleProductChangeType(
		options: GetEntriesOptions & { entryTitle?: string },
	): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
		const {
			entryTitle,
			productId,
			changeTypeId,
			pageSize,
			endCursor,
			breaking = false,
		} = options;

		// If there is no search query provided, return the normal entries
		if (entryTitle === undefined) {
			return this.getEntries({
				productId,
				changeTypeId,
				pageSize,
				endCursor,
				breaking,
			});
		}

		const entryTitleArray = entryTitle
			.split("-")
			.map((term: string) => term.trim());

		const response = await fetchGraphQL<
			SearchByProductsAndChangeTypesQuery,
			SearchByProductsAndChangeTypesQueryVariables
		>(
			SearchByProductsAndChangeTypesDocument,
			this.credentials,
			this.isPreview,
			{
				first: pageSize ?? 5,
				after: endCursor ?? "",
				date: new Date(),
				productIds: getSelectedIds(productId),
				changeTypeIds: getSelectedIds(changeTypeId),
				entryTitle: entryTitleArray,
			},
		);

		return ParseRawData(response.data);
	}

	/**
	 * Get changelog entries with optional filtering
	 * @param options - Options for filtering and pagination
	 * @returns List of changelog entries
	 */
	async getEntries(
		options: GetEntriesOptions = {},
	): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
		const {
			productId,
			changeTypeId,
			pageSize,
			endCursor,
			breaking = false,
		} = options;
		const productIds = getSelectedIds(productId);
		const changeTypeIds = getSelectedIds(changeTypeId);

		// If there is no product ID and no change type ID and no breaking change, get the entries by date
		if (productIds.length === 0 && changeTypeIds.length === 0) {
			if (breaking) {
				const response = await fetchGraphQL<
					SearchOnlyBreakingChangesQuery,
					SearchOnlyBreakingChangesQueryVariables
				>(SearchOnlyBreakingChangesDocument, this.credentials, this.isPreview, {
					first: pageSize ?? 5,
					after: endCursor ?? "",
					date: getTomorrow(),
					breaking: breaking,
				});

				return ParseRawData(response.data);
			}

			const response = await fetchGraphQL<SearchQuery, SearchQueryVariables>(
				SearchDocument,
				this.credentials,
				this.isPreview,
				{
					first: pageSize ?? 5,
					after: endCursor ?? "",
					date: getTomorrow(),
				},
			);

			return ParseRawData(response.data);
		}

		// If there is a product ID and no change type ID and no breaking change, get the entries by product and breaking change if specified
		if (productIds.length > 0 && changeTypeIds.length === 0) {
			if (breaking) {
				const response = await fetchGraphQL<
					SearchByProductAndBreakingQuery,
					SearchByProductAndBreakingQueryVariables
				>(
					SearchByProductAndBreakingDocument,
					this.credentials,
					this.isPreview,
					{
						first: pageSize ?? 5,
						after: endCursor ?? "",
						date: getTomorrow(),
						productId: productIds,
						breaking: breaking,
					},
				);

				return ParseRawData(response.data);
			}

			const response = await fetchGraphQL<
				SearchByProductQuery,
				SearchByProductQueryVariables
			>(SearchByProductDocument, this.credentials, this.isPreview, {
				first: pageSize ?? 5,
				after: endCursor ?? "",
				date: getTomorrow(),
				productId: productIds,
			});

			return ParseRawData(response.data);
		}

		// If there is no product ID and a change type ID and no breaking change, get the entries by change type and breaking change if specified
		if (productIds.length === 0 && changeTypeIds.length > 0) {
			if (breaking === true) {
				const response = await fetchGraphQL<
					SearchByChangeTypesAndBreakingChangeQuery,
					SearchByChangeTypesAndBreakingChangeQueryVariables
				>(
					SearchByChangeTypesAndBreakingChangeDocument,
					this.credentials,
					this.isPreview,
					{
						first: pageSize ?? 5,
						after: endCursor ?? "",
						date: getTomorrow(),
						changeTypeIds: changeTypeIds,
						breaking: breaking,
					},
				);

				return ParseRawData(response.data);
			}
			const response = await fetchGraphQL<
				SearchByChangeTypesQuery,
				SearchByChangeTypesQueryVariables
			>(SearchByChangeTypesDocument, this.credentials, this.isPreview, {
				first: pageSize ?? 5,
				after: endCursor ?? "",
				date: getTomorrow(),
				changeTypeIds: changeTypeIds,
			});

			return ParseRawData(response.data);
		}

		// If there is a product ID and a change type ID and a breaking change, get the entries by product and change type and breaking change
		const response = await fetchGraphQL<
			SearchByProductsAndChangeTypesAndBreakingChangeQuery,
			SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables
		>(
			SearchByProductsAndChangeTypesAndBreakingChangeDocument,
			this.credentials,
			this.isPreview,
			{
				first: pageSize ?? 5,
				after: endCursor ?? "",
				date: new Date(),
				productIds: productIds.length > 0 ? productIds : [],
				changeTypeIds: changeTypeIds.length > 0 ? changeTypeIds : [],
				breaking: breaking,
			},
		);

		return ParseRawData(response.data);
	}

	/**
	 * Get all available change types
	 * @returns Array of change types
	 */
	async getChangeTypes(): Promise<Array<ChangeType>> {
		const cacheKey = `changeTypes:${this.isPreview}`;

		return requestDeduplicator.execute(cacheKey, async () => {
			const response = await fetchGraphQL<
				GetAllChangetypesQuery,
				GetAllChangetypesQueryVariables
			>(GetAllChangetypesDocument, this.credentials, this.isPreview);

			return ParseChangeType(response.data);
		});
	}

	/**
	 * Get all available statuses
	 * @returns Array of statuses
	 */
	async getStatus(): Promise<Array<Status>> {
		const cacheKey = `statuses:${this.isPreview}`;

		return requestDeduplicator.execute(cacheKey, async () => {
			const response = await fetchGraphQL<
				GetAllStatusQuery,
				GetAllStatusQueryVariables
			>(GetAllStatusDocument, this.credentials, this.isPreview);

			return ParseStatus(response.data);
		});
	}

	/**
	 * Get all products with entry counts
	 * @returns Array of products with hasEntries flag set
	 */
	async getProducts(): Promise<Array<Product>> {
		// Get all products
		const response = await fetchGraphQL<
			GetAllProductsQuery,
			GetAllProductsQueryVariables
		>(GetAllProductsDocument, this.credentials, this.isPreview);
		const products = ParseProduct(response.data);

		// Check whether there are entries that have it selected
		// Batch requests for better performance
		const results = await Promise.all(
			products.map(async (product) => {
				// No need to check in preview mode
				if (this.isPreview) {
					product.hasEntries = true;
					return product;
				}

				const count = await GetEntryCountByProductId(
					this.credentials,
					product.id,
					this.isPreview,
				);
				product.hasEntries = count > 0;
				return product;
			}),
		);

		return results;
	}
}

/**
 * Get entry count for a specific product ID
 * Uses caching to avoid repeated API calls
 * @param credentials - Changelog credentials
 * @param productId - Product ID to get count for
 * @param preview - Whether to use preview endpoint
 * @returns Number of entries for the product
 */
export async function GetEntryCountByProductId(
	credentials: ChangelogCredentials,
	productId: string,
	preview: boolean,
): Promise<number> {
	// Check cache first
	const cachedCount = getCachedEntryCount(productId, preview);
	if (cachedCount !== null) {
		return cachedCount;
	}

	const cacheKey = `entryCount:${productId}:${preview}`;

	// Use request deduplication to avoid concurrent requests for the same product
	return requestDeduplicator.execute(cacheKey, async () => {
		// Double-check cache after deduplication (another request might have populated it)
		const cachedCountAfter = getCachedEntryCount(productId, preview);
		if (cachedCountAfter !== null) {
			return cachedCountAfter;
		}

		// Fetch from API if not in cache
		const response = await fetchGraphQL<
			GetNumberOfEntriesByProductQuery,
			GetNumberOfEntriesByProductQueryVariables
		>(GetNumberOfEntriesByProductDocument, credentials, preview, {
			productId: [productId],
		});

		const count = response.data.changelog?.results?.length ?? 0;

		// Store in cache
		setCachedEntryCount(productId, preview, count);

		return count;
	});
}
