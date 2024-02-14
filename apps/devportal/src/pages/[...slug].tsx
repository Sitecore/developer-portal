import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { getChildNavgationInfo, getChildPageInfo, getPageInfo, getPartialGroupsAsArray, getPartialsAsArray } from '@lib/page-info';
import { getStaticPathsRecursively } from '@lib/staticPaths';
import ArticlePage from '@src/layouts/ArticlePage';
import ChildOverviewPage from '@src/layouts/ChildOverviewPage';
import DefaultContentPage from '@src/layouts/DefaultContentPage';
import SocialPage from '@src/layouts/SocialPage';

export async function getStaticPaths() {
  const paths = await getStaticPathsRecursively();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params.slug);

  if (pageInfo == null) return { notFound: true };

  const partials = pageInfo.partials != null ? await getPartialsAsArray(pageInfo.partials) : null;
  const partialGroups = pageInfo.partialGroups != null && pageInfo.partialGroups.length > 0 ? await getPartialGroupsAsArray(pageInfo.partialGroups) : null;
  const childPageInfo = pageInfo.pageType == 'childoverview' ? await getChildPageInfo(context.params.slug.join('/')) : null;
  let sidebarNavConfig = null;

  if (pageInfo.hasSubPageNav) {
    sidebarNavConfig = await getChildNavgationInfo(context.params.slug.join('/'));
  }
  //navData

  return {
    props: {
      pageInfo,
      partials,
      partialGroups,
      childPageInfo,
      sidebarNavConfig,
    },
  };
}

export default function Slug({
  pageInfo,
  partials,
  partialGroups,
  childPageInfo,
  sidebarNavConfig,
}: {
  pageInfo: PageInfo;
  partials: PartialData;
  partialGroups: PagePartialGroup[];
  childPageInfo: ChildPageInfo[];
  sidebarNavConfig: SidebarNavigationConfig;
}) {
  // Check for other page types
  if (pageInfo.pageType) {
    switch (pageInfo.pageType.toLowerCase()) {
      case 'childoverview':
        return <ChildOverviewPage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;
      case 'social':
        return <SocialPage pageInfo={pageInfo} />;
    }
  }

  if (pageInfo.hasSubPageNav) return <ArticlePage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} childPageInfo={childPageInfo} sidebarConfig={sidebarNavConfig} />;

  // return default page
  return <DefaultContentPage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} />;
  //  return <DefaultContentPage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} childPageInfo={childPageInfo} />;
}
