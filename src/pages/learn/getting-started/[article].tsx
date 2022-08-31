// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/src/scripts/page-info';
import { getGettingStartedPaths, getIntegrationPaths } from '@/src/scripts/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/components/layout/GenericContentPage';

//Promotions to use on Articles
import { PromoCardProps } from '@/src/components/cards/PromoCard';
import LearningEssentials from '@/data/promos/learning-essentials';
import ComposableDXP from '@/data/promos/videos/composable-dxp';

const ArticlePromos: { [name: string]: PromoCardProps } = {
  'learning-essentials': LearningEssentials,
  'composable-dxp': ComposableDXP,
};

export async function getStaticPaths() {
  const productPaths = await getGettingStartedPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(`learn/getting-started/${context?.params?.article}`);

  //Load page content if available. If not, load page partials. Supports simple articles with only single page Markdown file and no partials
  const partials = pageInfo?.content
    ? await getPageContent(pageInfo)
    : pageInfo?.partials
    ? await getPartialsAsArray(pageInfo.partials)
    : [];

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

const ArticlePage = ({ pageInfo, partials }: ArticlePageProps): JSX.Element => {
  const promoBefore = [] as PromoCardProps[];
  const promoAfter = [] as PromoCardProps[];

  //Load details about promotions for the top of the article
  if (pageInfo?.promoBefore) {
    for (let promoId of pageInfo.promoBefore) {
      const promoCard = ArticlePromos[promoId];
      if (promoCard) {
        promoBefore.push(promoCard);
      }
    }
  }

  //Load details about promotions for the bottom of the article
  if (pageInfo?.promoAfter) {
    for (let promoId of pageInfo.promoAfter) {
      const promoCard = ArticlePromos[promoId];
      if (promoCard) {
        promoAfter.push(promoCard);
      }
    }
  }

  return (
    <GenericContentPage
      pageInfo={pageInfo}
      partials={partials}
      promoBefore={promoBefore}
      promoAfter={promoAfter}
    />
  );
};

export default ArticlePage;
