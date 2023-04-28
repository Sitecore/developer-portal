export const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

export const getQueryArray = (query: string | string[] | undefined): string[] => {
  if (query == undefined) return [];
  return Array.isArray(query) ? query : [query];
};
