export function clearTimeStamp(date: string | Date): string {
  if (typeof date === 'object' && date instanceof Date) {
    return date.toISOString().split('T')[0];
  }

  return date.split('T')[0];
}

export function getDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
