// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getGettingStartedPaths, getIntegrationPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

//Promotions to use on Articles
import { PromoCardProps } from '@/components/cards/PromoCard';
import LearningEssentials from '@/data/promos/learning-essentials';
import MVP from '@/data/promos/mvp';

const ArticlePromos: { [name:string]: PromoCardProps } = {
  "learning-essentials": LearningEssentials,
  "mvp": MVP,
}

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

const ArticlePage = ({ pageInfo, partials }: ArticlePageProps): JSX.Element => {
  const promoAfter = [] as PromoCardProps[];

  //Load details about promotions for the page
  if (pageInfo?.promoAfter) {
    for(let promoId of pageInfo.promoAfter){
      const promoCard = ArticlePromos[promoId];
      if(promoCard){
        promoAfter.push(promoCard);
      }
    }
  }

  return (
    <GenericContentPage pageInfo={pageInfo} partials={partials} promoAfter={promoAfter} />
  );
}

export default ArticlePage;
