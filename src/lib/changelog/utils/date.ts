/**
 * Date manipulation utilities for changelog entries
 */

import { clearTimeStamp } from "@/src/lib/util/dateUtil";

/**
 * Parse a date string in format DDMMYYYY to a Date object
 * @param dateString - Date string in format DDMMYYYY
 * @returns Parsed Date object
 */
export function parseDateString(dateString: string): Date {
  const formattedDate = `${dateString.slice(4, 8)}-${dateString.slice(2, 4)}-${dateString.slice(0, 2)}`;
  return new Date(formattedDate);
}

/**
 * Create a date range for searching entries around a specific date
 * @param date - The center date
 * @param daysBefore - Number of days before (default: 1)
 * @param daysAfter - Number of days after (default: 1)
 * @returns Object with startDate and endDate
 */
export function createDateRange(
  date: Date,
  daysBefore: number = 1,
  daysAfter: number = 1,
): { startDate: Date; endDate: Date } {
  const startDate = new Date(date);
  startDate.setDate(date.getDate() - daysBefore);

  const endDate = new Date(date);
  endDate.setDate(date.getDate() + daysAfter);

  return { startDate, endDate };
}

/**
 * Format a date string to a localized date string
 * @param dateString - Date string to format
 * @returns Formatted date string (e.g., "Jan 15, 2024")
 */
export function formatReleaseDate(
  dateString: string | null | undefined,
): string {
  if (!dateString) {
    return "";
  }

  const clearedDate = clearTimeStamp(dateString);
  if (!clearedDate) {
    return "";
  }

  const date = new Date(clearedDate);
  if (Number.isNaN(date.getTime())) {
    console.warn(`Invalid date: ${dateString}`);
    return "";
  }

  return date.toLocaleDateString(["en-US"], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
