import { PageInfo, SidebarNavigationConfig, SidebarNavigationItem } from '@/src/lib/interfaces/page-info';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { appendPathToBasePath } from '../../../../../packages/ui/src/lib/utils/stringUtil';

export interface BreadcrumbNavProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: SidebarNavigationConfig;
}

const findRoute = (routes: SidebarNavigationItem[], path: string): SidebarNavigationItem | null => {
  for (let route of routes) {
    if (route.path === path) return route;
    if (route.children) {
      const foundRoute: SidebarNavigationItem | null = findRoute(route.children, path);
      if (foundRoute) return foundRoute;
    }
  }
  return null;
};

const BreadcrumbNav = ({ config, currentPage, enabled = false }: BreadcrumbNavProps) => {
  const router = useRouter();

  if (!enabled || router.asPath == config.path) return null;

  const urlSegments: string[] = router.asPath != config.path ? router.asPath.replace(config.path + '/', '').split('/') : [];
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={config.path}>Downloads</BreadcrumbLink>
      </BreadcrumbItem>

      {urlSegments.length > 1 &&
        urlSegments
          .map((segment, index) => {
            const matchingRoute = findRoute(config.routes, segment);

            if (matchingRoute) {
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
        <BreadcrumbLink href="#">{currentPage.title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
