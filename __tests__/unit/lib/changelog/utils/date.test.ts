import { createDateRange, formatReleaseDate, parseDateString } from '@lib/changelog/utils/date';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@lib/utils', () => ({
  clearTimeStamp: vi.fn((date) => date),
}));

describe('parseDateString', () => {
  test('should parse valid DDMMYYYY format', () => {
    const date = parseDateString('12072024');
    expect(date).toBeInstanceOf(Date);
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(6); // July (0-indexed)
    expect(date.getDate()).toBe(12);
  });

  test('should parse date with leading zeros', () => {
    const date = parseDateString('01012024');
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(0); // January
    expect(date.getDate()).toBe(1);
  });

  test('should parse date at end of year', () => {
    const date = parseDateString('31122024');
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(11); // December
    expect(date.getDate()).toBe(31);
  });

  test('should parse leap year date', () => {
    const date = parseDateString('29022024');
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(1); // February
    expect(date.getDate()).toBe(29);
  });
});

describe('createDateRange', () => {
  test('should create date range with default daysBefore and daysAfter', () => {
    const centerDate = new Date('2024-07-12');
    const { startDate, endDate } = createDateRange(centerDate);

    const expectedStart = new Date('2024-07-11');
    const expectedEnd = new Date('2024-07-13');

    expect(startDate.getTime()).toBe(expectedStart.getTime());
    expect(endDate.getTime()).toBe(expectedEnd.getTime());
  });

  test('should create date range with custom daysBefore and daysAfter', () => {
    const centerDate = new Date('2024-07-12');
    const { startDate, endDate } = createDateRange(centerDate, 3, 5);

    const expectedStart = new Date('2024-07-09');
    const expectedEnd = new Date('2024-07-17');

    expect(startDate.getTime()).toBe(expectedStart.getTime());
    expect(endDate.getTime()).toBe(expectedEnd.getTime());
  });

  test('should handle month boundaries', () => {
    const centerDate = new Date('2024-07-01');
    const { startDate, endDate } = createDateRange(centerDate, 2, 2);

    const expectedStart = new Date('2024-06-29');
    const expectedEnd = new Date('2024-07-03');

    expect(startDate.getTime()).toBe(expectedStart.getTime());
    expect(endDate.getTime()).toBe(expectedEnd.getTime());
  });

  test('should handle year boundaries', () => {
    const centerDate = new Date('2024-01-01');
    const { startDate, endDate } = createDateRange(centerDate, 1, 1);

    const expectedStart = new Date('2023-12-31');
    const expectedEnd = new Date('2024-01-02');

    expect(startDate.getTime()).toBe(expectedStart.getTime());
    expect(endDate.getTime()).toBe(expectedEnd.getTime());
  });

  test('should handle zero daysBefore and daysAfter', () => {
    const centerDate = new Date('2024-07-12');
    const { startDate, endDate } = createDateRange(centerDate, 0, 0);

    expect(startDate.getTime()).toBe(centerDate.getTime());
    expect(endDate.getTime()).toBe(centerDate.getTime());
  });
});

describe('formatReleaseDate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should format valid date string', async () => {
    const { clearTimeStamp } = await import('@lib/utils');
    vi.mocked(clearTimeStamp).mockReturnValue('2024-07-12T00:00:00Z');

    const result = formatReleaseDate('2024-07-12T00:00:00Z');

    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
    // The exact format depends on locale, but should contain date parts
    expect(result).toMatch(/Jul|July/);
    expect(result).toMatch(/12/);
    expect(result).toMatch(/2024/);
  });

  test('should return empty string for null', () => {
    const result = formatReleaseDate(null);
    expect(result).toBe('');
  });

  test('should return empty string for undefined', () => {
    const result = formatReleaseDate(undefined);
    expect(result).toBe('');
  });

  test('should return empty string for empty string', () => {
    const result = formatReleaseDate('');
    expect(result).toBe('');
  });

  test('should return empty string when clearTimeStamp returns empty string', async () => {
    const { clearTimeStamp } = await import('@lib/utils');
    vi.mocked(clearTimeStamp).mockReturnValue('');

    const result = formatReleaseDate('invalid-date');

    expect(result).toBe('');
  });

  test('should return empty string and warn for invalid date', async () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { clearTimeStamp } = await import('@lib/utils');
    vi.mocked(clearTimeStamp).mockReturnValue('invalid-date-string');

    const result = formatReleaseDate('invalid-date');

    expect(result).toBe('');
    expect(consoleSpy).toHaveBeenCalledWith('Invalid date: invalid-date');

    consoleSpy.mockRestore();
  });

  test('should format different date formats', async () => {
    const { clearTimeStamp } = await import('@lib/utils');
    vi.mocked(clearTimeStamp).mockReturnValue('2024-01-15T00:00:00Z');

    const result = formatReleaseDate('2024-01-15T00:00:00Z');

    expect(result).toBeTruthy();
    expect(result).toMatch(/Jan|January/);
    expect(result).toMatch(/15/);
    expect(result).toMatch(/2024/);
  });
});
