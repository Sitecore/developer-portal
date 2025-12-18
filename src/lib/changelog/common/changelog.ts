/**
 * Utility functions for changelog operations
 */

/**
 * Parse a pipe-separated string of IDs into an array
 * @param value - Pipe-separated string of IDs (e.g., "id1|id2|id3")
 * @returns Array of ID strings
 */
export function getSelectedIds(value: string | undefined): Array<string> {
  return value != null && value.length > 0 ? value.split('|') : [];
}

/**
 * API URL for changelog entries
 */
export const entriesApiUrl = '/api/changelog/v1';
