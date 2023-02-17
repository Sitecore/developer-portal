import fs from 'fs';
import path from 'path';

// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
import { getFaqPaths } from '@/src/common/static-paths';
// Interfaces
import {
  ContentPagerContext,
  CustomNavContext,
  CustomNavData,
  PageInfo,
  PartialData,
} from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';
import MultiPageNav from '@/src/layouts/MultiPageNav';

import ContentPager from '@/src/components/common/ContentPager';

export async function getStaticPaths() {
  const articlePaths = await getFaqPaths();
  return {
    paths: articlePaths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: CustomNavContext }) {
  const basePath = '/learn/faq';
  const navDataFile = path.join(process.cwd(), `data/faqs/${context?.params?.article}.json`);
  const navData: CustomNavData = JSON.parse(fs.readFileSync(navDataFile, { encoding: 'utf-8' }));
  const pageInfo = await getPageInfo(`learn/faq/${context?.params?.article}`);

  // Set next/previous routes
  const pagingInfo: ContentPagerContext = {
    previous: null,
    next: navData.routes[0],
  };

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
