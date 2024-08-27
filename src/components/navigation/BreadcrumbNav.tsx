import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { appendPathToBasePath } from '@src/lib/utils/stringUtil';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { PageInfo, SidebarNavigationConfig, SidebarNavigationItem } from '@/src/lib/interfaces/page-info';

import useSidebarNav from '../../hooks/useSidebarNav';

export interface BreadcrumbNavProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: SidebarNavigationConfig;
}

const findRoute = (routes: Array<SidebarNavigationItem>, path: string): SidebarNavigationItem | null => {
  for (const route of routes) {
    if (route.path === path) {
      return route;
    }

    if (route.children) {
      const foundRoute: SidebarNavigationItem | null = findRoute(route.children, path);

      if (foundRoute) {
        return foundRoute;
      }
    }
  }

  return null;
};

const BreadcrumbNav = ({ config, currentPage, enabled = false }: BreadcrumbNavProps) => {
  const router = useRouter();
  const { currentItem } = useSidebarNav(currentPage, config);

  if (!enabled || router.asPath == config.path) {
    return null;
  }

  const urlSegments: Array<string> = router.asPath != config.path ? router.asPath.replace(config.path + '/', '').split('/') : [];

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={config.path}>{config.title}</BreadcrumbLink>
      </BreadcrumbItem>

      {urlSegments.length > 1 &&
        urlSegments
          .map((segment, index) => {
            const matchingRoute = findRoute(config.routes, segment);
            const isCurrent = router.asPath.endsWith(segment);

            if (matchingRoute && !isCurrent) {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink as={NextLink} href={appendPathToBasePath(config.path, matchingRoute.path)}>
                    {matchingRoute.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              );
            }
          })
          .filter(Boolean)}

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">{currentItem?.title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
