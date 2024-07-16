export function getSlug(value: string) {
  return value.replace(/\s+/g, '-').toLowerCase();
}

export function slugify(text: string | null | undefined): string {
  if (!text) {
    return '';
  }

  const slug = encodeURIComponent(text);
  return slug.toLowerCase().replace(/%20/g, '-');
}

export function unslugify(text: string): string {
  return decodeURIComponent(text);
}

export function getStringValue(text: string | null | undefined) {
  return text || '';
}