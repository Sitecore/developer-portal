// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getUseCasePaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticPaths() {
  const useCasePaths = await getUseCasePaths();
  return {
    paths: useCasePaths,
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

export default function useCasePage({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PartialData;
}) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} />;
}
