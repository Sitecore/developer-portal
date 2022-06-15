import fs from 'fs';
import path from 'path';

// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getFaqPaths } from '@/scripts/static-paths';
// Interfaces
import {
  ContentPagerContext,
  CustomNavContext,
  CustomNavData,
  CustomNavRoute,
  PageInfo,
  PartialData,
} from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';
import MultiPageNav from '@/components/layout/MultiPageNav';

//Promotions to use on Articles
import { PromoCardProps } from '@/components/cards/PromoCard';
import LearningEssentials from '@/data/promos/learning-essentials';
import ComposableDXP from '@/data/promos/videos/composable-dxp';
import ContentPager from '@/components/helper/ContentPager';

const ArticlePromos: { [name: string]: PromoCardProps } = {
  'learning-essentials': LearningEssentials,
  'composable-dxp': ComposableDXP,
};

export async function getStaticPaths() {
  const articlePaths = await getFaqPaths();
  return {
    paths: articlePaths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: CustomNavContext }) {
  const basePath = '/learn/faq';
  const root = `${basePath}/${context?.params?.article}`;
  const pageInfo = await getPageInfo(path.join(root, context?.params?.page));
  const navigationManifest = path.join(process.cwd(), `data/markdown/pages/${root}/manifest.json`);

  const navData: CustomNavData = JSON.parse(
    fs.readFileSync(navigationManifest, { encoding: 'utf-8' })
  );
  // Get the index of the current item
  const activeItemIndex = navData.routes.findIndex((x) => x.path == context.params.page);
  const activeItem = navData.routes[activeItemIndex];
  // Set next/previous routes
  const pagingInfo: ContentPagerContext = {
    previous: activeItemIndex > 0 ? navData.routes[activeItemIndex - 1] : null,
    next: activeItemIndex < navData.routes.length - 1 ? navData.routes[activeItemIndex + 1] : null,
  };

  //Load page content if available. If not, load page partials. Supports simple articles with only single page Markdown file and no partials
  const partials = pageInfo?.content
    ? await getPageContent(pageInfo)
    : pageInfo?.partials
    ? await getPartialsAsArray(pageInfo.partials)
    : [];

  pageInfo!.pageTitle = `${navData.title} - ${activeItem?.title}`;

  return {
    props: {
      pageInfo,
      partials,
      context: context.params,
      navData,
      basePath,
      pagingInfo,
    },
    revalidate: 600, // 10 minutes
  };
}

type ArticlePageProps = {
  pageInfo: PageInfo;
  partials: PartialData;
  context: CustomNavContext;
  navData: CustomNavData;
  basePath: string;
  pagingInfo: ContentPagerContext;
};

const ArticlePage = ({
  pageInfo,
  partials,
  context,
  navData,
  basePath,
  pagingInfo,
}: ArticlePageProps): JSX.Element => {
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

  const CustomNav = <MultiPageNav context={context} navData={navData} root={basePath} />;
  const CustomNavPager = <ContentPager context={context} paging={pagingInfo} root={basePath} />;

  return (
    <GenericContentPage
      pageInfo={pageInfo}
      partials={partials}
      promoBefore={promoBefore}
      promoAfter={promoAfter}
      customNav={CustomNav}
      customNavPager={CustomNavPager}
    />
  );
};

export default ArticlePage;
