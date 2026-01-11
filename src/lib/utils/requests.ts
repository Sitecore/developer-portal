export const getQueryValue = (
	query: string | Array<string> | undefined,
): string => {
	if (query === undefined) {
		return "";
	}

	return Array.isArray(query) ? query[0] : query;
};

export const getQueryArray = (
	query: string | Array<string> | undefined,
): Array<string> => {
	if (query === undefined) {
		return [];
	}

	return Array.isArray(query) ? query : [query];
};
