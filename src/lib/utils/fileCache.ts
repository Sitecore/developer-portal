/**
 * In-memory file system cache for markdown files
 * Reduces repeated file system operations during build time
 */

type CacheEntry<T> = {
	data: T;
	timestamp: number;
};

class FileSystemCache {
	private cache = new Map<string, CacheEntry<any>>();
	private ttl: number; // Time to live in milliseconds

	constructor(ttl: number = 5 * 60 * 1000) {
		// Default 5 minutes TTL
		this.ttl = ttl;
	}

	/**
	 * Get cached value if it exists and hasn't expired
	 */
	get<T>(key: string): T | null {
		const entry = this.cache.get(key);
		if (!entry) {
			return null;
		}

		const now = Date.now();
		if (now - entry.timestamp > this.ttl) {
			this.cache.delete(key);
			return null;
		}

		return entry.data as T;
	}

	/**
	 * Set a value in the cache
	 */
	set<T>(key: string, data: T): void {
		this.cache.set(key, {
			data,
			timestamp: Date.now(),
		});
	}

	/**
	 * Clear the cache
	 */
	clear(): void {
		this.cache.clear();
	}

	/**
	 * Clear expired entries
	 */
	clearExpired(): void {
		const now = Date.now();
		for (const [key, entry] of this.cache.entries()) {
			if (now - entry.timestamp > this.ttl) {
				this.cache.delete(key);
			}
		}
	}
}

// Global cache instance for file system operations
export const fileCache = new FileSystemCache(5 * 60 * 1000); // 5 minutes TTL
