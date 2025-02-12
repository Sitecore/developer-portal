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
  hideCurrentPage?: boolean;
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

const BreadcrumbNav = ({ config, currentPage, enabled = false, hideCurrentPage = false }: BreadcrumbNavProps) => {
  const router = useRouter();

  const { currentItem, parents, parentItem, previousItem, nextItem } = useSidebarNav(currentPage.fileName, config, router.asPath);

  if (!enabled || router.asPath == config.path) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={config.path}>{config.title}</BreadcrumbLink>
      </BreadcrumbItem>

      {parents?.map((parent, index) => {
        const base = parents.slice(0, index + 1).reduce((acc, parent) => {
          return appendPathToBasePath(acc, parent.path);
        }, config.path);
        return (
          <BreadcrumbItem key={index}>
            {parent.ignoreLink ? (
              <BreadcrumbLink isCurrentPage>{parent.title}</BreadcrumbLink>
            ) : (
              <BreadcrumbLink as={NextLink} href={base}>
                {parent.title}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}

      {!hideCurrentPage && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{currentItem?.title}</BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
