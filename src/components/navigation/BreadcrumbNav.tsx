import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { appendPathToBasePath } from '@src/lib/utils/stringUtil';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { PageInfo } from '@/src/lib/interfaces/page-info';

export interface BreadcrumbNavProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: ManifestConfig;
  hideCurrentPage?: boolean;
}

const BreadcrumbNav = ({ config, currentPage, enabled = false, hideCurrentPage = false }: BreadcrumbNavProps) => {
  const router = useRouter();

  const { currentItem, parents } = useManifestRoutes(currentPage.fileName, config, router.asPath);

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
