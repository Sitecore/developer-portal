import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { PageInfo, SidebarNavigationConfig, SidebarNavigationItem } from '@/src/lib/interfaces/page-info';
import { findAdjacentRoute, findCurrentLevel, findRoute, getParentRoute } from '@/src/lib/sidebarNav';

/**
 * Custom hook for managing sidebar navigation.
 *
 * @param pageInfo - The current page information.
 * @param sidebarNavConfig - The configuration for the sidebar navigation.
 * @returns An object containing the current, parent, previous, and next navigation items.
 */
const useSidebarNav = (pageInfo: PageInfo, sidebarNavConfig: SidebarNavigationConfig) => {
  const [currentItem, setCurrentItem] = useState<SidebarNavigationItem | null>(null);
  const [previousItem, setPreviousItem] = useState<SidebarNavigationItem | null>(null);
  const [nextItem, setNextItem] = useState<SidebarNavigationItem | null>(null);
  const [parentItem, setParentItem] = useState<SidebarNavigationItem | null>(null);
  const [currentLevel, setCurrentLevel] = useState<Array<SidebarNavigationItem> | null>(null);

  const router = useRouter();
  const root = pageInfo.fileName.endsWith('index.md');

  useEffect(() => {
    const urlSegments: Array<string> = router.asPath != sidebarNavConfig.path ? router.asPath.replace(sidebarNavConfig.path + '/', '').split('/') : [];
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

    if (root) {
      //  nextItem = currentItem?.children[1] || null;
    }

    // setNextItem(nextItem);
    setNextItem(nextItem);
    setCurrentItem(currentItem);
    setParentItem(parentItem);
    setPreviousItem(previousItem);
    setCurrentLevel(findCurrentLevel(sidebarNavConfig.routes, currentUrlSegment));
  }, [pageInfo, sidebarNavConfig]);

  return {
    currentItem,
    parentItem,
    previousItem,
    nextItem,
    currentLevel,
  };
};

export default useSidebarNav;
