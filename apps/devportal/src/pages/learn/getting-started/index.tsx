// Scripts
import { getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
// Interfaces
import { PageInfo, PagePartialGroup } from '@/src/interfaces/page-info';
// Data
import learningAtSitecore from '@/data/promos/learning-at-sitecore';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('learn', context.preview ? context.preview : null);

  const gettingStarted = await getPartialsAsArray(['learn/getting-started/composable-dxp', 'learn/getting-started/platform-dxp', 'learn/getting-started/platform-dxp-development-frameworks', 'learn/getting-started/product-features']);

  const partialGroups = [
    {
      title: 'Getting Started',
      description: 'Get the hang of Sitecore with these beginner-friendly tutorials, walkthroughs, and samples.',
      partials: gettingStarted,
    },
  ];

  return {
    props: {
      pageInfo,
      partialGroups,
    },
    revalidate: 600, // 10 minutes
  };
}

type LearnPageProps = {
  pageInfo: PageInfo;
  partialGroups: PagePartialGroup[];
};

const LearnPage = ({ pageInfo, partialGroups }: LearnPageProps): JSX.Element => <GenericContentPage pageInfo={pageInfo} partialGroups={partialGroups} hasGrid={true} promoAfter={[learningAtSitecore]} />;

export default LearnPage;
