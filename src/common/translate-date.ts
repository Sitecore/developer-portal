const translateDate = (dateString: string): string => {
  const date = new Date(dateString.replace(/-/g, '/'));
  return new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const translateDateAsYearMonth = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-us', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export default translateDate;
