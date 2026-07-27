import { translateDateAsYearMonth } from '@/src/lib/util';
import { describe, expect, it } from 'vitest';

describe('translateDateAsYearMonth', () => {
  it('should return the correct year and month', () => {
    const date = '2022-01-15';
    const expected = 'January 2022';
    const result = translateDateAsYearMonth(date);
    expect(result).toBe(expected);
  });

  it('should handle different locales', () => {
    const date = '2022-02-20';
    const expected = 'February 2022';
    const result = translateDateAsYearMonth(date);
    expect(result).toBe(expected);
  });

  it('should handle different date formats', () => {
    const date = '2022/03/25';
    const expected = 'March 2022';
    const result = translateDateAsYearMonth(date);
    expect(result).toBe(expected);
  });
});
