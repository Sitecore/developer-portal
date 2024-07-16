export function clearTimeStamp(date: string | Date): string {
  try {
    if (typeof date === 'object' && date instanceof Date) {
      return date.toISOString().split('T')[0];
    }

    return date.split('T')[0];
  } catch (e) {
    console.log(`Could not parse date: ${date}`);
    return '';
  }
}

export function getDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
