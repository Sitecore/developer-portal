import { appendPathToBasePath } from '@src/lib/utils/stringUtil';
import { SidebarNavigationConfig, SidebarNavigationItem } from './interfaces/page-info';

/**
 * Finds the current level of sidebar navigation items that matches the given path.
 *
 * @param routes - The array of sidebar navigation items to search.
 * @param path - The path to match against the sidebar navigation items.
 * @returns An array of sidebar navigation items that match the given path, or null if no match is found.
 */
export const findCurrentLevel = (routes: SidebarNavigationItem[], path: string): SidebarNavigationItem[] | null => {
  for (let route of routes) {
    if (route.path === path) return routes;
    if (route.children) {
      const foundRoute: SidebarNavigationItem | null = findRoute(route.children, path);
      if (foundRoute) return route.children;
    }
  }
  return null;
};

/**
 * Finds a route in the sidebar navigation based on the given path.
 *
 * @param {SidebarNavigationItem[]} routes - The array of sidebar navigation items to search.
 * @param {string} path - The path to search for.
 * @returns {SidebarNavigationItem | null} - The found route, or null if not found.
 */
export const findRoute = (routes: SidebarNavigationItem[], path: string): SidebarNavigationItem | null => {
  for (let route of routes) {
    if (route.path === path) return route;
    if (route.children) {
      const foundRoute: SidebarNavigationItem | null = findRoute(route.children, path);
      if (foundRoute) return foundRoute;
    }
  }
  return null;
};

/**
 * Finds the adjacent route in the sidebar navigation based on the current path.
 *
 * @param routes - The array of sidebar navigation items.
 * @param currentPath - The current path.
 * @param isNext - A boolean indicating whether to find the next adjacent route or the previous one.
 * @returns The adjacent route if found, otherwise null.
 */
export const findAdjacentRoute = (routes: SidebarNavigationItem[], currentPath: string, isNext: boolean): SidebarNavigationItem | null => {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === currentPath && ((isNext && i < routes.length - 1) || (!isNext && i > 0))) {
      return isNext ? routes[i + 1] : routes[i - 1];
    }
    if (routes[i].children) {
      const foundRoute: SidebarNavigationItem | null = findAdjacentRoute(routes[i].children, currentPath, isNext);
      if (foundRoute) return foundRoute;
    }
  }
  return null;
};

/**
 * Finds the parent of a given route in the sidebar navigation.
 *
 * @param routes - The array of sidebar navigation items to search.
 * @param path - The path of the child item.
 * @returns The parent route if found, otherwise null.
 */
export const getParentRoute = (routes: SidebarNavigationItem[], path: string): SidebarNavigationItem | null => {
  for (let route of routes) {
    if (route.children) {
      for (let child of route.children) {
        if (child.path === path) {
          return route;
        }
      }
      const foundRoute = getParentRoute(route.children, path);
      if (foundRoute) {
        return foundRoute;
      }
    }
  }
  return null;
};

/**
 * Returns the URL for a given sidebar navigation item based on the configuration and current route.
 * @param config - The sidebar navigation configuration.
 * @param currentRoute - The current sidebar navigation item.
 * @returns The URL for the sidebar navigation item.
 */
export const getItemUrl = (config: SidebarNavigationConfig, currentRoute: SidebarNavigationItem): string => {
  let url: string = currentRoute.path;

  let parentRoute = getParentRoute(config.routes, currentRoute.path);

  while (parentRoute) {
    url = appendPathToBasePath(parentRoute.path, url);
    parentRoute = getParentRoute(config.routes, parentRoute.path);
  }
  url = appendPathToBasePath(config.path, url);

  return url;
};
