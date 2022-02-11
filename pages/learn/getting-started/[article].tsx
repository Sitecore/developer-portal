// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getGettingStartedPaths, getIntegrationPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticPaths() {
  const productPaths = await getGettingStartedPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(`learn/getting-started/${context?.params?.article}`);
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
    revalidate: 600, // 10 minutes
  };
}

type ArticlePageProps = {
  pageInfo: PageInfo;
  partials: PartialData;
};

const ArticlePage = ({ pageInfo, partials }: ArticlePageProps): JSX.Element => (
  <GenericContentPage pageInfo={pageInfo} partials={partials} />
);

export default ArticlePage;
