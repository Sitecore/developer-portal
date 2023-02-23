export function getSlug(value: string) {
  return value.replace(/\s+/g, '-').toLowerCase();
}
