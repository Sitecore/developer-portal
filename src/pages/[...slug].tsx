import { ChildPageInfo, PageInfo, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { getChildNavgationInfo, getChildPageInfo, getPageInfo } from '@lib/page-info';
import { getStaticPathsRecursively } from '@lib/staticPaths';

import ArticlePage from '@src/layouts/ArticlePage';
import ChildOverviewPage from '@src/layouts/ChildOverviewPage';
import DefaultContentPage from '@src/layouts/DefaultContentPage';
import SocialPage from '@src/layouts/SocialPage';
import NewsLetterPage from '../layouts/NewsLetterPage';
import Tutorial from '../layouts/Tutorial';

export async function getStaticPaths() {
  const paths = await getStaticPathsRecursively();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params.slug);

  if (pageInfo == null) {
    return { notFound: true };
  }

  const childPageInfo = pageInfo.pageType == 'childoverview' || pageInfo.pageType == 'newsletter' ? await getChildPageInfo(context.params.slug.join('/')) : null;
  let sidebarNavConfig = null;

  if (pageInfo.hasSubPageNav) {
    sidebarNavConfig = await getChildNavgationInfo(context.params.slug.join('/'));
  }

  return {
    props: {
      pageInfo,
      childPageInfo,
      sidebarNavConfig,
    },
  };
}

export default function Slug({ pageInfo, childPageInfo, sidebarNavConfig }: { pageInfo: PageInfo; childPageInfo: Array<ChildPageInfo>; sidebarNavConfig: SidebarNavigationConfig }) {
  // Check for other page types
  if (pageInfo.pageType) {
    switch (pageInfo?.pageType.toLowerCase()) {
      case 'childoverview':
        return <ChildOverviewPage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
      case 'social':
        return <SocialPage pageInfo={pageInfo} />;
      case 'newsletter':
        return <NewsLetterPage pageInfo={pageInfo} sidebarConfig={sidebarNavConfig} childPageInfo={childPageInfo} />;
      case 'tutorial':
        return <Tutorial pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
    }
  }

  if (pageInfo.hasSubPageNav) {
    return <ArticlePage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
  }

  return <DefaultContentPage pageInfo={pageInfo} hasGrid={false} />;
}
