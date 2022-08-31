import fs from 'fs';
import path from 'path';

// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/src/scripts/page-info';
import { getFaqNavPaths, getFaqPaths } from '@/src/scripts/static-paths';
// Interfaces
import {
  ContentPagerContext,
  ContentPagerRoute,
  CustomNavContext,
  CustomNavData,
  CustomNavRoute,
  PageInfo,
  PartialData,
} from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/components/layout/GenericContentPage';
import MultiPageNav from '@/src/components/layout/MultiPageNav';

//Promotions to use on Articles
import { PromoCardProps } from '@/src/components/cards/PromoCard';
import LearningEssentials from '@/data/promos/learning-essentials';
import ComposableDXP from '@/data/promos/videos/composable-dxp';
import ContentPager from '@/src/components/helper/ContentPager';

export async function getStaticPaths() {
  const articlePaths = await getFaqNavPaths();
  return {
    paths: articlePaths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: CustomNavContext }) {
  const basePath = '/learn/faq';
  const navDataFile = path.join(process.cwd(), `data/faqs/${context?.params?.article}.json`);
  const navData: CustomNavData = JSON.parse(fs.readFileSync(navDataFile, { encoding: 'utf-8' }));

  // Get the index of the current item
  const activeItemIndex = navData.routes.findIndex((x) => x.path == context.params.page);
  const activeItem = navData.routes[activeItemIndex];

  // Set next/previous routes
  const pagingInfo: ContentPagerContext = {
    previous:
      activeItemIndex > 0
        ? navData.routes[activeItemIndex - 1]
        : {
            title: 'Introduction',
            path: `../${context.params.article}`,
          },
    next: activeItemIndex < navData.routes.length - 1 ? navData.routes[activeItemIndex + 1] : null,
  };

  const pageInfo = {
    title: navData.title,
    description: navData.description,
    pageTitle: `${navData.title} - ${activeItem?.title}`,
    hasInPageNav: true,
    youtube: [],
    stackexchange: [],
    twitter: [],
    sitecoreCommunity: {},
  };

  const partials = await getPartialsAsArray([
    `${basePath}/${context.params.article}/${context.params.page}`,
  ]);
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
  const CustomNav = <MultiPageNav context={context} navData={navData} root={basePath} />;
  const CustomNavPager = <ContentPager context={context} paging={pagingInfo} root={basePath} />;

  return (
    <GenericContentPage
      pageInfo={pageInfo}
      partials={partials}
      customNav={CustomNav}
      customNavPager={CustomNavPager}
    />
  );
};

export default ArticlePage;
