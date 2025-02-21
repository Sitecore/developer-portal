import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Icon, Link, VisuallyHidden, Wrap } from '@chakra-ui/react';
import { appendPathToBasePath } from '@src/lib/utils/stringUtil';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { ManifestConfig } from '@/src/lib/interfaces/manifest';
import { PageInfo } from '@/src/lib/interfaces/page-info';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export interface BreadcrumbNavProps {
  enabled?: boolean;
  currentPage: PageInfo;
  config: ManifestConfig;
  hideCurrentPage?: boolean;
}

const BreadcrumbNav = ({ config, currentPage, enabled = false, hideCurrentPage = false }: BreadcrumbNavProps) => {
  const router = useRouter();

  const { currentItem, parents } = useManifestRoutes(currentPage.fileName, config, router.asPath);

  if (!enabled) {
    // || router.asPath == config.path) {
    return null;
  }

  if (router.asPath == config.path) {
    const parentLink = router.asPath.split('/').slice(0, -1).join('/');

    return (
      <Wrap>
        <Link as={NextLink} href={parentLink} passHref>
          <Button leftIcon={<Icon as={ChevronLeftIcon} w={6} h={6} />} width={'100%'} variant={'ghost'} size={'sm'} colorScheme="neutral">
            Back to the overview
          </Button>
          <VisuallyHidden>Go back to the overview</VisuallyHidden>
        </Link>
      </Wrap>
    );
  }

  return (
    <Breadcrumb mb={4}>
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
