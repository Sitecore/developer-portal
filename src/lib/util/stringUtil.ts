export function appendPathToBasePath(basePath: string, path: string): string {
  if (basePath.endsWith("/")) {
    basePath += path;
  } else {
    basePath += `/${path}`;
  }

  return basePath;
}

export function removeHtmlTags(input: string): string {
  const htmlTagsRegex = /<[^>]*>/g;

  return input.replace(htmlTagsRegex, "");
}

export function removeHtmlTagsAndSpecialChars(input: string): string {
  // Regular expression to match HTML tags
  const htmlTagsRegex = /<[^>]*>/g;

  // Regular expression to match HTML special characters
  const htmlSpecialCharsRegex = /&[^\s]*?;/g;

  // Mapping of HTML special characters to their actual values
  const htmlSpecialCharsMap: { [key: string]: string } = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#039;": "'",
    "&apos;": "'",
    // Add more mappings as needed
  };

  // Replace HTML tags with empty string
  let cleanedString = input.replace(htmlTagsRegex, "");

  // Replace HTML special characters with their actual values
  cleanedString = cleanedString.replace(htmlSpecialCharsRegex, (match) => {
    // Check if the matched HTML special character exists in the map
    if (Object.hasOwn(htmlSpecialCharsMap, match)) {
      return htmlSpecialCharsMap[match];
    } else {
      return match;
    }
  });

  return cleanedString;
}

export function getSlug(value: string) {
  return value.replace(/\s+/g, "-").toLowerCase();
}

export function slugify(text: string | null | undefined): string {
  if (!text) {
    return "";
  }

  const slug = encodeURIComponent(text);

  return slug.toLowerCase().replace(/%20/g, "-").replace(/%2f/g, "-");
}

export function unslugify(text: string): string {
  return decodeURIComponent(text);
}

export function getStringValue(text: string | null | undefined) {
  return text || "";
}
