import ChildOverviewPage from '../layouts/ChildOverviewPage';
import DefaultContentPage from '../layouts/DefaultContentPage';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData } from '../lib/interfaces/page-info';
import { getChildPageInfo, getPageInfo, getPartialGroupsAsArray, getPartialsAsArray } from '../lib/page-info';
import { getStaticPathsRecursively } from '../lib/staticPaths';

export async function getStaticPaths() {
  const paths = await getStaticPathsRecursively();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params.slug.join('/'), context.preview ? context.preview : null);
  const partials = pageInfo.partials != null ? await getPartialsAsArray(pageInfo.partials) : null;
  const partialGroups = pageInfo.partialGroups != null && pageInfo.partialGroups.length > 0 ? await getPartialGroupsAsArray(pageInfo.partialGroups) : null;
  const childPageInfo = pageInfo.pageType == 'childoverview' ? await getChildPageInfo(context.params.slug.join('/'), context.preview ? context.preview : null) : null;

  return {
    props: {
      pageInfo,
      partials,
      partialGroups,
      childPageInfo,
    },
  };
}

export default function Contribute({ pageInfo, partials, partialGroups, childPageInfo }: { pageInfo: PageInfo; partials: PartialData; partialGroups: PagePartialGroup[]; childPageInfo: ChildPageInfo[] }) {
  if (pageInfo.pageType == 'childoverview') return <ChildOverviewPage pageInfo={pageInfo} hasGrid={false} childPageInfo={childPageInfo} />;

  return <DefaultContentPage pageInfo={pageInfo} partials={partials} partialGroups={partialGroups} hasGrid={false} />;
}
