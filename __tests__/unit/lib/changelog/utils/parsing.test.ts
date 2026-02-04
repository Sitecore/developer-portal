import { safeArrayValue, safeFirstItem, safeStringValue } from '@lib/changelog/utils/parsing';
import { describe, expect, test } from 'vitest';

describe('safeStringValue', () => {
  test('should return string value when provided', () => {
    expect(safeStringValue('test')).toBe('test');
    expect(safeStringValue('hello world')).toBe('hello world');
  });

  test('should return default value for null', () => {
    expect(safeStringValue(null)).toBe('');
    expect(safeStringValue(null, 'default')).toBe('default');
  });

  test('should return default value for undefined', () => {
    expect(safeStringValue(undefined)).toBe('');
    expect(safeStringValue(undefined, 'default')).toBe('default');
  });

  test('should use custom default value', () => {
    expect(safeStringValue(null, 'custom-default')).toBe('custom-default');
    expect(safeStringValue(undefined, 'custom-default')).toBe('custom-default');
  });
});

describe('safeArrayValue', () => {
  test('should return array when provided', () => {
    const arr = [1, 2, 3];
    expect(safeArrayValue(arr)).toBe(arr);
    expect(safeArrayValue(arr)).toEqual([1, 2, 3]);
  });

  test('should return empty array for null', () => {
    expect(safeArrayValue(null)).toEqual([]);
  });

  test('should return empty array for undefined', () => {
    expect(safeArrayValue(undefined)).toEqual([]);
  });

  test('should return empty array for empty array', () => {
    expect(safeArrayValue([])).toEqual([]);
  });

  test('should handle arrays with different types', () => {
    expect(safeArrayValue(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(safeArrayValue([1, 2, 3])).toEqual([1, 2, 3]);
    expect(safeArrayValue([{ id: 1 }, { id: 2 }])).toEqual([{ id: 1 }, { id: 2 }]);
  });
});

describe('safeFirstItem', () => {
  test('should return first item from array', () => {
    expect(safeFirstItem([1, 2, 3])).toBe(1);
    expect(safeFirstItem(['a', 'b', 'c'])).toBe('a');
    expect(safeFirstItem([{ id: 1 }, { id: 2 }])).toEqual({ id: 1 });
  });

  test('should return undefined for empty array', () => {
    expect(safeFirstItem([])).toBeUndefined();
  });

  test('should return undefined for null', () => {
    expect(safeFirstItem(null)).toBeUndefined();
  });

  test('should return undefined for undefined', () => {
    expect(safeFirstItem(undefined)).toBeUndefined();
  });

  test('should return first item even if array has one element', () => {
    expect(safeFirstItem([42])).toBe(42);
    expect(safeFirstItem(['single'])).toBe('single');
  });
});

