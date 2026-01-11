export const translateDate = (dateString: string): string => {
  const locale = "en-us";
  const date = new Date(dateString.replace(/-/g, "/"));

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(date);
};

export const translateDateAsYearMonth = (dateString: string): string => {
  const locale = "en-us";
  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
};

function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

export function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const day = padTo2Digits(date.getDate());
  const month = padTo2Digits(date.getMonth() + 1); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}${month}${year}`;
}

export function clearTimeStamp(date: string | Date): string {
  try {
    if (typeof date === "object" && date instanceof Date) {
      return date.toISOString().split("T")[0];
    }

    return date.split("T")[0];
  } catch (_e) {
    console.log(`Could not parse date: ${date}`);

    return "";
  }
}

export function getDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
