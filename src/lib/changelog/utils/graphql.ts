// Extract the query/mutation name from a GraphQL document string

export function extractQueryName(queryString: string): string {
	// Match query QueryName { or query QueryName( or mutation MutationName { or mutation MutationName(
	const match = queryString.match(/(?:query|mutation)\s+(\w+)/);
	return match ? match[1] : "Unknown";
}
