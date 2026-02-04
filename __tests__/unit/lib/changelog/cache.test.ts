import {
  clearEntryCountCache,
  getCachedEntryCount,
  requestDeduplicator,
  setCachedEntryCount,
} from '@lib/changelog/cache';
import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('CacheManager', () => {
  // We need to test the CacheManager through the exported functions
  // since it's not directly exported
  beforeEach(() => {
    clearEntryCountCache();
    vi.clearAllMocks();
  });

  describe('getCachedEntryCount and setCachedEntryCount', () => {
    test('should return null when entry is not cached', () => {
      const result = getCachedEntryCount('product-123', false);
      expect(result).toBeNull();
    });

    test('should set and get cached entry count', () => {
      setCachedEntryCount('product-123', false, 5);
      const result = getCachedEntryCount('product-123', false);
      expect(result).toBe(5);
    });

    test('should handle different product IDs separately', () => {
      setCachedEntryCount('product-123', false, 5);
      setCachedEntryCount('product-456', false, 10);

      expect(getCachedEntryCount('product-123', false)).toBe(5);
      expect(getCachedEntryCount('product-456', false)).toBe(10);
    });

    test('should handle preview and production separately', () => {
      setCachedEntryCount('product-123', false, 5);
      setCachedEntryCount('product-123', true, 10);

      expect(getCachedEntryCount('product-123', false)).toBe(5);
      expect(getCachedEntryCount('product-123', true)).toBe(10);
    });

    test('should clear all cached entry counts', () => {
      setCachedEntryCount('product-123', false, 5);
      setCachedEntryCount('product-456', false, 10);

      clearEntryCountCache();

      expect(getCachedEntryCount('product-123', false)).toBeNull();
      expect(getCachedEntryCount('product-456', false)).toBeNull();
    });
  });

  describe('Cache TTL', () => {
    test('should expire entries after TTL', async () => {
      const originalNow = Date.now;
      let mockNow = 1000000;

      vi.spyOn(Date, 'now').mockImplementation(() => mockNow);

      setCachedEntryCount('product-123', false, 5);
      expect(getCachedEntryCount('product-123', false)).toBe(5);

      // Advance time by more than 1 hour (default TTL)
      mockNow += 60 * 60 * 1000 + 1;

      // Entry should be expired
      expect(getCachedEntryCount('product-123', false)).toBeNull();

      vi.spyOn(Date, 'now').mockRestore();
    });
  });

  describe('Cache size limits', () => {
    test('should handle cache size limits', () => {
      // Fill cache with max entries (default is 100)
      for (let i = 0; i < 100; i++) {
        setCachedEntryCount(`product-${i}`, false, i);
      }

      // All should be cached
      expect(getCachedEntryCount('product-0', false)).toBe(0);
      expect(getCachedEntryCount('product-99', false)).toBe(99);

      // Add one more - should evict LRU
      setCachedEntryCount('product-100', false, 100);

      // First entry might be evicted (LRU)
      // But we can't reliably test which one without accessing them
      expect(getCachedEntryCount('product-100', false)).toBe(100);
    });
  });
});

describe('RequestDeduplicator', () => {
  beforeEach(() => {
    requestDeduplicator.clear();
  });

  test('should execute request function', async () => {
    const requestFn = vi.fn().mockResolvedValue('result');

    const result = await requestDeduplicator.execute('key-1', requestFn);

    expect(result).toBe('result');
    expect(requestFn).toHaveBeenCalledTimes(1);
  });

  test('should deduplicate concurrent requests with same key', async () => {
    const requestFn = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve('result'), 10);
        })
    );

    const promise1 = requestDeduplicator.execute('key-1', requestFn);
    const promise2 = requestDeduplicator.execute('key-1', requestFn);
    const promise3 = requestDeduplicator.execute('key-1', requestFn);

    const [result1, result2, result3] = await Promise.all([promise1, promise2, promise3]);

    expect(result1).toBe('result');
    expect(result2).toBe('result');
    expect(result3).toBe('result');
    // Should only be called once due to deduplication
    expect(requestFn).toHaveBeenCalledTimes(1);
  });

  test('should not deduplicate requests with different keys', async () => {
    const requestFn = vi.fn().mockResolvedValue('result');

    await Promise.all([
      requestDeduplicator.execute('key-1', requestFn),
      requestDeduplicator.execute('key-2', requestFn),
      requestDeduplicator.execute('key-3', requestFn),
    ]);

    expect(requestFn).toHaveBeenCalledTimes(3);
  });

  test('should handle errors and remove from in-flight requests', async () => {
    const requestFn = vi.fn().mockRejectedValue(new Error('Request failed'));

    await expect(requestDeduplicator.execute('key-1', requestFn)).rejects.toThrow('Request failed');

    // Should be able to execute again after error
    const requestFn2 = vi.fn().mockResolvedValue('result');
    const result = await requestDeduplicator.execute('key-1', requestFn2);

    expect(result).toBe('result');
    expect(requestFn2).toHaveBeenCalledTimes(1);
  });

  test('should clear all in-flight requests', async () => {
    const requestFn = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve('result'), 100);
        })
    );

    requestDeduplicator.execute('key-1', requestFn);
    requestDeduplicator.execute('key-2', requestFn);

    requestDeduplicator.clear();

    // After clear, new requests should work
    const requestFn2 = vi.fn().mockResolvedValue('result2');
    const result = await requestDeduplicator.execute('key-1', requestFn2);

    expect(result).toBe('result2');
  });

  test('should handle multiple concurrent requests with same key and error', async () => {
    const requestFn = vi.fn().mockRejectedValue(new Error('Request failed'));

    const promise1 = requestDeduplicator.execute('key-1', requestFn);
    const promise2 = requestDeduplicator.execute('key-1', requestFn);

    await expect(promise1).rejects.toThrow('Request failed');
    await expect(promise2).rejects.toThrow('Request failed');

    // Should only be called once due to deduplication
    expect(requestFn).toHaveBeenCalledTimes(1);
  });
});

