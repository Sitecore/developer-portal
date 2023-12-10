export function appendPathToBasePath(basePath: string, path: string): string {
  if (basePath.endsWith('/')) {
    basePath += path;
  } else {
    basePath += `/${path}`;
  }
  return basePath;
}
