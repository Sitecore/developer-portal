// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getProductPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, PagePartial } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticPaths() {
  const productPaths = await getProductPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params);
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function productPage({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartial[];
}) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} />;
}
