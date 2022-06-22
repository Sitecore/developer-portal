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

import ContentPager from '@/components/helper/ContentPager';

export async function getStaticPaths() {
  const articlePaths = await getFaqPaths();
  return {
    paths: articlePaths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: CustomNavContext }) {
  console.log('Index page loaded');

  const basePath = '/learn/faq';
  const root = `${basePath}/${context?.params?.article}`;
  const pageInfo = await getPageInfo(root);
  const navDataFile = path.join(process.cwd(), `data/markdown/pages/${root}/manifest.json`);
  const navData: CustomNavData = JSON.parse(fs.readFileSync(navDataFile, { encoding: 'utf-8' }));

  // Get the index of the current item
  const pagePath = context.params.page == undefined ? '' : context.params.page;
  const activeItemIndex = navData.routes.findIndex((x) => x.path == pagePath);
  const activeItem = navData.routes[activeItemIndex];
  console.log('Active item: ' + activeItem.title);
  // Set next/previous routes
  const pagingInfo: ContentPagerContext = {
    previous: null,
    next: navData.routes[1], //index is always the first item in the array
  };

  //Load page content if available. If not, load page partials. Supports simple articles with only single page Markdown file and no partials
  const partials = pageInfo?.content
    ? await getPageContent(pageInfo)
    : pageInfo?.partials
    ? await getPartialsAsArray(pageInfo.partials)
    : [];

  pageInfo!.pageTitle = `${navData.title} - Introduction`;

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
