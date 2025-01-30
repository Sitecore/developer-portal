import { useEffect, useState } from 'react';

import { SidebarNavigationConfig, SidebarNavigationItem } from '@/src/lib/interfaces/page-info';
import { findAdjacentRoute, findCurrentLevel, findRoute, getParentRoute } from '@/src/lib/sidebarNav';

/**
 * Custom hook for managing sidebar navigation.
 *
 * @param pageInfo - The current page information.
 * @param sidebarNavConfig - The configuration for the sidebar navigation.
 * @returns An object containing the current, parent, previous, and next navigation items.
 */
const useSidebarNav = (fileName: string, sidebarNavConfig: SidebarNavigationConfig, currentPath: string) => {
  const [currentItem, setCurrentItem] = useState<SidebarNavigationItem | null>(null);
  const [previousItem, setPreviousItem] = useState<SidebarNavigationItem | null>(null);
  const [nextItem, setNextItem] = useState<SidebarNavigationItem | null>(null);
  const [children, setChildren] = useState<SidebarNavigationItem[] | null>(null);
  const [parentItem, setParentItem] = useState<SidebarNavigationItem | null>(null);
  const [currentLevel, setCurrentLevel] = useState<Array<SidebarNavigationItem> | null>(null);

  const root = fileName.endsWith('index.md');

  useEffect(() => {
    const urlSegments: Array<string> = currentPath != sidebarNavConfig.path ? currentPath.replace(sidebarNavConfig.path + '/', '').split('/') : [];
    const currentUrlSegment = urlSegments[urlSegments.length - 1];

    // Find the current item in the sidebar navigation
    let currentItem = findRoute(sidebarNavConfig.routes, currentUrlSegment);

    if (currentItem?.ignoreLink) {
      currentItem = currentItem.children[0] || null;
    }

    if (currentItem == null) {
      return;
    }

    const nextItem = findAdjacentRoute(sidebarNavConfig.routes, currentItem.path, true);
    const previousItem = findAdjacentRoute(sidebarNavConfig.routes, currentUrlSegment, false);
    const parentItem = getParentRoute(sidebarNavConfig.routes, currentItem.path);

    // Find the previous and next items in the sidebar navigation
    setNextItem(nextItem);
    setCurrentItem(currentItem);
    setChildren(currentItem.children);
    setParentItem(parentItem);
    setPreviousItem(previousItem);

    setCurrentLevel(findCurrentLevel(sidebarNavConfig.routes, currentUrlSegment));
  }, [fileName, root, currentPath, sidebarNavConfig]);

  return {
    currentItem,
    parentItem,
    previousItem,
    nextItem,
    currentLevel,
    children,
  };
};

export default useSidebarNav;
