import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/react';
import { appendPathToBasePath } from '@src/lib/utils/stringUtil';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { PageInfo } from '@/src/lib/interfaces/page-info';
import { mdiHomeVariantOutline } from '@mdi/js';

export interface BreadcrumbNavProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: ManifestConfig;
  hideCurrentPage?: boolean;
}

const BreadcrumbNav = ({ config, currentPage, enabled = false, hideCurrentPage = false }: BreadcrumbNavProps) => {
  const router = useRouter();

  const { currentItem, parents } = useManifestRoutes(currentPage.fileName, config, router.asPath);
  let parentLink = config.path.split('/').slice(0, -1).join('/');

  if (!enabled) {
    return null;
  }

  return (
    <Breadcrumb mb={4} fontFamily={'heading'}>
      {parentLink && (
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href={parentLink}>
            <Icon>
              <path d={mdiHomeVariantOutline} />
            </Icon>
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      <BreadcrumbItem>
        <BreadcrumbLink href={config.path}>{config.title}</BreadcrumbLink>
      </BreadcrumbItem>

      {parents?.map((parent, index) => {
        const base = parents.slice(0, index + 1).reduce((acc, parent) => {
          return appendPathToBasePath(acc, parent.path);
        }, config.path);
        return (
          <BreadcrumbItem key={index} hideBelow={'md'}>
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
