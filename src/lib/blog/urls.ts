import type { BlogRoute } from "./fs-utils";

export function postHref(route: BlogRoute): string {
  return `/blog/${route.year}/${route.month}/${route.slug}`;
}
