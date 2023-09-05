import ArticlePage from '../layouts/ArticlePage';
import ChildOverviewPage from '../layouts/ChildOverviewPage';
import DefaultContentPage from '../layouts/DefaultContentPage';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SubPageNavigation } from '../lib/interfaces/page-info';
import { getChildNavgationInfo, getChildPageInfo, getPageInfo, getPartialGroupsAsArray, getPartialsAsArray } from '../lib/page-info';
import { getStaticPathsRecursively } from '../lib/staticPaths';

export async function getStaticPaths() {
  const paths = await getStaticPathsRecursively();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params.slug, context.preview ? context.preview : null);
  if (pageInfo == null) {
    console.log(`Content not found: ${context.params.slug.join('/')}`);
    return { notFound: true };
  }

  const partials = pageInfo.partials != null ? await getPartialsAsArray(pageInfo.partials) : null;
  const partialGroups = pageInfo.partialGroups != null && pageInfo.partialGroups.length > 0 ? await getPartialGroupsAsArray(pageInfo.partialGroups) : null;
  const childPageInfo = pageInfo.pageType == 'childoverview' ? await getChildPageInfo(context.params.slug.join('/'), context.preview ? context.preview : null) : null;
  let subPageNavigation = null;

  if (pageInfo.hasSubPageNav) {
    subPageNavigation = await getChildNavgationInfo(context.params.slug.join('/'), context.preview ? context.preview : null);
  }
  //navData

  return {
    props: {
      pageInfo,
      partials,
      partialGroups,
      childPageInfo,
      subPageNavigation
    },
  };
}

export default function Slug({ pageInfo, partials, partialGroups, childPageInfo, subPageNavigation }: { pageInfo: PageInfo; partials: PartialData; partialGroups: PagePartialGroup[]; childPageInfo: ChildPageInfo[], subPageNavigation: SubPageNavigation }) {
  // Check for other page types
  if (pageInfo.pageType == 'childoverview') return <ChildOverviewPage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} />;

  if(pageInfo.hasSubPageNav) return <ArticlePage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} childPageInfo={childPageInfo} subPageNavigation={subPageNavigation} />;

  // return default page
  return <DefaultContentPage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} />;
  //  return <DefaultContentPage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} childPageInfo={childPageInfo} />;
}
