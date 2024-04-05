export function getSlug(value: string) {
  return value.replace(/\s+/g, '-').toLowerCase();
}

export function slugify(text: string): string {
  const slug = encodeURIComponent(text);
  return slug.toLowerCase().replace(/%20/g, '-');
}

export function unslugify(text: string): string {
  return decodeURIComponent(text);
}
