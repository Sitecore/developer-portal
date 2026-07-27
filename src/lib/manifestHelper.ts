import { appendPathToBasePath } from "@/src/lib/util/stringUtil";
import type {
  ManifestConfig,
  ManifestNavigationItem,
} from "./interfaces/manifest";

/**
 * Retrieves the sibling item of a given path from a list of routes.
 *
 * @param routes - An array of `ManifestNavigationItem` representing the navigation routes.
 * @param currentPath - The current path for which the sibling item is to be found.
 * @param isNext - A boolean indicating whether to find the next sibling (true) or the previous sibling (false).
 * @returns The sibling `ManifestNavigationItem` if found, otherwise `null`.
 */
export const getSiblingItem = (
  routes: ManifestNavigationItem[],
  currentPath: string,
  isNext: boolean,
): ManifestNavigationItem | null => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    // If the current route matches the path
    if (route.path === currentPath) {
      if (isNext && i + 1 < routes.length) {
        // Return the next item if isNext is true
        return routes[i + 1];
      } else if (!isNext && i - 1 >= 0) {
        // Return the previous item if isNext is false
        return routes[i - 1];
      } else {
        // No next/previous item found (edge cases)
        return null;
      }
    }

    // If the route has children, traverse them recursively
    if (route.children) {
      const found = getSiblingItem(
        route.children,
        currentPath.replace(`${route.path}/`, ""),
        isNext,
      );
      if (found) {
        return found;
      }
    }
  }

  // Return null if no match is found
  return null;
};

/**
 * Recursively searches for the parent of a given route path within a list of routes.
 *
 * @param routes - An array of `ManifestNavigationItem` representing the navigation structure.
 * @param currentPath - The path of the current route for which the parent is being searched.
 * @param parent - The parent route of the current route, initially set to `null`.
 * @returns The parent `ManifestNavigationItem` if found, otherwise `null`.
 */
export const getParent = (
  routes: ManifestNavigationItem[],
  currentPath: string,
  parent: ManifestNavigationItem | null = null,
): ManifestNavigationItem | null => {
  for (const route of routes) {
    // Check if the current route matches the path
    if (route.path === currentPath) {
      return parent;
    }

    // If the route has children, search within them
    if (route.children) {
      const foundParent = getParent(
        route.children,
        currentPath.replace(`${route.path}/`, ""),
        route,
      );

      if (foundParent) {
        return foundParent;
      }
    }
  }

  // Return null if no parent is found
  return null;
};

/**
 * Recursively finds and returns all parent routes of a given path within a nested route structure.
 *
 * @param {ManifestNavigationItem[]} routes - The array of route objects to search within.
 * @param {string} currentPath - The path of the current route for which parents are to be found.
 * @param {ManifestNavigationItem[]} [parents=[]] - An array to collect parent routes during recursion.
 * @returns {ManifestNavigationItem[]} An array of parent routes leading to the current path.
 */
export const getAllParents = (
  routes: ManifestNavigationItem[],
  currentPath: string,
  parents: ManifestNavigationItem[] = [],
): ManifestNavigationItem[] => {
  for (const route of routes) {
    // If the current route matches the path, return the collected parents
    if (route.path === currentPath) {
      return parents;
    }

    // If the route has children, traverse them recursively
    if (route.children) {
      const updatedParents = [...parents, route]; // Add current route to parents

      // Recursively search within children
      const foundParents = getAllParents(
        route.children,
        currentPath.replace(`${route.path}/`, ""),
        updatedParents,
      );
      if (foundParents.length > 0) {
        return foundParents;
      }
    }
  }

  // Return an empty array if no parents are found (i.e., item not found)
  return [];
};

/**
 * Retrieves the direct children of a route that matches the specified path.
 *
 * @param routes - An array of `ManifestNavigationItem` representing the navigation routes.
 * @param currentPath - The path of the current route to find children for.
 * @returns An array of `ManifestNavigationItem` representing the direct children of the matched route.
 */
export const getChildren = (
  routes: ManifestNavigationItem[],
  currentPath: string,
): ManifestNavigationItem[] => {
  for (const route of routes) {
    // Check if the current route matches the path
    if (route.path === currentPath) {
      // Return the direct children if found
      return route.children || [];
    }

    // If the route has children, traverse them recursively
    if (route.children) {
      const foundChildren = getChildren(
        route.children,
        currentPath.replace(`${route.path}/`, ""),
      );

      if (foundChildren.length > 0) {
        return foundChildren;
      }
    }
  }

  // Return an empty array if no children are found
  return [];
};

/**
 * Retrieves a route from a list of routes based on the provided full path.
 *
 * @param routes - An array of `ManifestNavigationItem` objects representing the available routes.
 * @param fullPath - The full path string used to locate the specific route.
 * @returns The `ManifestNavigationItem` that matches the full path, or `null` if no match is found.
 */
export const getRouteByFullPath = (
  routes: Array<ManifestNavigationItem>,
  fullPath: string,
): ManifestNavigationItem | null => {
  const paths: Array<string> = fullPath
    .split("/")
    .filter((path) => path !== "");

  for (const route of routes) {
    if (route.path === paths[0]) {
      if (route.children && !route.ignoreLink) {
        return getRouteByFullPath(route.children, paths.slice(1).join("/"));
      } else {
        return route;
      }
    }
  }
  return null;
};

/**
 * Returns the URL for a given sidebar navigation item based on the configuration and current route.
 * Walks down the tree to avoid ambiguity when duplicate path names exist in different branches.
 * @param config - The sidebar navigation configuration.
 * @param currentRoute - The current sidebar navigation item.
 * @returns The URL for the sidebar navigation item.
 */
export const getItemUrl = (
  config: ManifestConfig,
  currentRoute: ManifestNavigationItem,
): string => {
  const findPathChain = (
    routes: ManifestNavigationItem[],
    targetPath: string,
    chain: ManifestNavigationItem[] = [],
  ): ManifestNavigationItem[] | null => {
    for (const route of routes) {
      const newChain = [...chain, route];

      if (route.path === targetPath) {
        return newChain; // found the route
      }

      if (route.children) {
        const result = findPathChain(route.children, targetPath, newChain);
        if (result) return result;
      }
    }
    return null;
  };

  const chain = findPathChain(config.routes, currentRoute.path);

  if (!chain) {
    console.warn(`getItemUrl: Could not resolve path for ${currentRoute.path}`);
    return appendPathToBasePath(config.path, currentRoute.path);
  }

  const segments = chain.map((r) => r.path).filter(Boolean);
  const fullPath = segments.join("/");

  return appendPathToBasePath(config.path, fullPath);
};
