export const translateDate = (dateString: string): string => {
  const locale = 'en-us';
  const date = new Date(dateString.replace(/-/g, '/'));
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const translateDateAsYearMonth = (dateString: string): string => {
  const locale = 'en-us';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(date);
};
