/**
 * Cache management for changelog entry counts and other cached data
 */

interface CacheEntry<T> {
	value: T;
	expiresAt: number;
	lastAccessed: number;
}

interface CacheOptions {
	/** Time to live in milliseconds (default: 1 hour) */
	ttl?: number;
	/** Maximum number of entries in cache (default: 100) */
	maxSize?: number;
	/** Enable automatic cleanup of expired entries (default: true) */
	autoCleanup?: boolean;
}

/**
 * Generic cache manager with TTL and LRU eviction support
 */
class CacheManager<T> {
	private cache = new Map<string, CacheEntry<T>>();
	private readonly ttl: number;
	private readonly maxSize: number;
	private readonly autoCleanup: boolean;
	private cleanupInterval?: ReturnType<typeof setInterval>;

	constructor(options: CacheOptions = {}) {
		this.ttl = options.ttl ?? 60 * 60 * 1000; // 1 hour default
		this.maxSize = options.maxSize ?? 100;
		this.autoCleanup = options.autoCleanup ?? true;

		if (this.autoCleanup) {
			// Clean up expired entries every 5 minutes
			this.cleanupInterval = setInterval(
				() => {
					this.cleanup();
				},
				5 * 60 * 1000,
			);
		}
	}

	/**
	 * Get a value from cache
	 */
	get(key: string): T | null {
		const entry = this.cache.get(key);

		if (!entry) {
			return null;
		}

		// Check if expired
		if (Date.now() > entry.expiresAt) {
			this.cache.delete(key);
			return null;
		}

		// Update last accessed time for LRU
		entry.lastAccessed = Date.now();
		return entry.value;
	}

	/**
	 * Set a value in cache
	 */
	set(key: string, value: T, customTtl?: number): void {
		// If cache is full, evict least recently used entry
		if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
			this.evictLRU();
		}

		this.cache.set(key, {
			value,
			expiresAt: Date.now() + (customTtl ?? this.ttl),
			lastAccessed: Date.now(),
		});
	}

	/**
	 * Delete a value from cache
	 */
	delete(key: string): void {
		this.cache.delete(key);
	}

	/**
	 * Clear all entries from cache
	 */
	clear(): void {
		this.cache.clear();
	}

	/**
	 * Get cache size
	 */
	size(): number {
		return this.cache.size;
	}

	/**
	 * Clean up expired entries
	 */
	private cleanup(): void {
		const now = Date.now();
		for (const [key, entry] of this.cache.entries()) {
			if (now > entry.expiresAt) {
				this.cache.delete(key);
			}
		}
	}

	/**
	 * Evict least recently used entry
	 */
	private evictLRU(): void {
		let lruKey: string | null = null;
		let lruTime = Infinity;

		for (const [key, entry] of this.cache.entries()) {
			if (entry.lastAccessed < lruTime) {
				lruTime = entry.lastAccessed;
				lruKey = key;
			}
		}

		if (lruKey) {
			this.cache.delete(lruKey);
		}
	}

	/**
	 * Dispose of the cache manager and cleanup resources
	 */
	dispose(): void {
		if (this.cleanupInterval) {
			clearInterval(this.cleanupInterval);
		}
		this.clear();
	}
}

/**
 * Cache for entry counts by product ID
 */
const entryCountCache = new CacheManager<number>({
	ttl: 60 * 60 * 1000, // 1 hour
	maxSize: 100,
	autoCleanup: true,
});

/**
 * Get cache key for entry count
 */
function getEntryCountCacheKey(productId: string, preview: boolean): string {
	return `entryCount:${productId}:${preview}`;
}

/**
 * Get cached entry count
 */
export function getCachedEntryCount(
	productId: string,
	preview: boolean,
): number | null {
	const key = getEntryCountCacheKey(productId, preview);
	return entryCountCache.get(key);
}

/**
 * Set cached entry count
 */
export function setCachedEntryCount(
	productId: string,
	preview: boolean,
	count: number,
): void {
	const key = getEntryCountCacheKey(productId, preview);
	entryCountCache.set(key, count);
}

/**
 * Clear entry count cache
 */
export function clearEntryCountCache(): void {
	entryCountCache.clear();
}

/**
 * Request deduplication: track in-flight requests to avoid duplicate API calls
 */
class RequestDeduplicator {
	private inFlightRequests = new Map<string, Promise<unknown>>();

	/**
	 * Execute a request, deduplicating if the same request is already in flight
	 */
	async execute<T>(key: string, requestFn: () => Promise<T>): Promise<T> {
		const existing = this.inFlightRequests.get(key);
		if (existing) {
			return existing as Promise<T>;
		}

		const promise = requestFn()
			.then((result) => {
				this.inFlightRequests.delete(key);
				return result;
			})
			.catch((error) => {
				this.inFlightRequests.delete(key);
				throw error;
			});

		this.inFlightRequests.set(key, promise);
		return promise;
	}

	/**
	 * Clear all in-flight requests
	 */
	clear(): void {
		this.inFlightRequests.clear();
	}
}

/**
 * Global request deduplicator instance
 */
export const requestDeduplicator = new RequestDeduplicator();
