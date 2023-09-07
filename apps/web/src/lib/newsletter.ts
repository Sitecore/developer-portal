export const getNewsletterTitle = (dateAsYearMonth: string, title?: string) =>
  title ? `${title} - ${dateAsYearMonth}` : dateAsYearMonth;
