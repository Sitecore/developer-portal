export function getSlug(value: string) {
  return value.replace(/\s+/g, '-').toLowerCase();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-alphanumeric characters
    .replace(/[\s_-]+/g, '-') // replace spaces, underscores, or hyphens with a single hyphen
    .trim();
}

export function unslugify(text: string): string {
  return text.toLowerCase().replace('-', ' '); // replace spaces, underscores, or hyphens with a single hyphen
}
