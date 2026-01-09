import { appendPathToBasePath } from '@src/lib/utils/stringUtil';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@components/ui/breadcrumb';
import Icon from '@mdi/react';
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

  const { currentItem, parents } = useManifestRoutes(config, router.asPath);
  let parentLink = config.path.split('/').slice(0, -1).join('/');

  if (!enabled) {
    return null;
  }

  return (
    <Breadcrumb className="mb-4 font-heading">
      <BreadcrumbList>
        {parentLink && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <NextLink href={parentLink}>
                  <Icon path={mdiHomeVariantOutline} size={1} />
                </NextLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <NextLink href={config.path}>{config.title}</NextLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {parents?.map((parent, index) => {
          const base = parents.slice(0, index + 1).reduce((acc, parent) => {
            return appendPathToBasePath(acc, parent.path);
          }, config.path);
          return (
            <div key={index} className="hidden md:flex items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {parent.ignoreLink ? (
                  <BreadcrumbPage>{parent.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <NextLink href={base}>{parent.title}</NextLink>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}

        {!hideCurrentPage && currentItem && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentItem.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
