/**
 * Shared parsing utilities for changelog data
 */

/**
 * Safely extract a string value from a potentially null/undefined value
 * @param value - Value to extract
 * @param defaultValue - Default value if null/undefined
 * @returns String value or default
 */
export function safeStringValue(
	value: string | null | undefined,
	defaultValue: string = "",
): string {
	return value ?? defaultValue;
}

/**
 * Safely extract an array from a potentially null/undefined value
 * @param value - Array value to extract
 * @returns Array or empty array
 */
export function safeArrayValue<T>(value: T[] | null | undefined): T[] {
	return value ?? [];
}

/**
 * Safely extract the first item from an array
 * @param array - Array to extract from
 * @returns First item or undefined
 */
export function safeFirstItem<T>(array: T[] | null | undefined): T | undefined {
	return array && array.length > 0 ? array[0] : undefined;
}
