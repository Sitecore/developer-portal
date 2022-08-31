// Scripts
import { getPageInfo, getPartialsAsArray } from '@/src/scripts/page-info';
// Interfaces
import { PageInfo, PagePartialGroup } from '@/src/interfaces/page-info';
// Data
import learningAtSitecore from '@/data/promos/learning-at-sitecore';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';

export async function getStaticProps() {
  const starterKits = await getPartialsAsArray([
    'learn/starter-kits/sitecore-starter-kits',
    'learn/starter-kits/ordercloud',
  ]);
  const gettingStarted = await getPartialsAsArray([
    'learn/getting-started/composable-dxp',
    'learn/getting-started/platform-dxp',
    'learn/getting-started/platform-dxp-development-frameworks',
    'learn/getting-started/product-features',
  ]);
  const integrations = await getPartialsAsArray([
    'learn/integrations/smarthub-cdp',
    'learn/integrations/xm',
    'learn/integrations/content-hub',
    'learn/integrations/send',
    'learn/integrations/orderCloud',
  ]);

  const partialGroups = [
    {
      title: 'Starter kits & examples',
      description:
        'Do you want to quickly see how something can be done? These starter kits and examples will let you dig into the code and see how to use the APIs.',
      partials: starterKits,
    },
    {
      title: 'Getting started',
      description:
        'Get the hang of Sitecore with these beginner-friendly tutorials, walkthroughs, and samples.',
      partials: gettingStarted,
    },
    {
      title: 'Integrations',
      description:
        'Do you want to see how you can integrate the different Sitecore products today? These integration guides will get you started leveraging the power of multiple products.',
      partials: integrations,
    },
  ];

  //const pageInfo =

  return {
    props: {
      pageInfo: await getPageInfo('learn'),
      partialGroups,
    },
    revalidate: 600, // 10 minutes
  };
}

type LearnPageProps = {
  pageInfo: PageInfo;
  partialGroups: PagePartialGroup[];
};

const LearnPage = ({ pageInfo, partialGroups }: LearnPageProps): JSX.Element => (
  <GenericContentPage
    pageInfo={pageInfo}
    partialGroups={partialGroups}
    hasGrid={true}
    promoAfter={[learningAtSitecore]}
  />
);

export default LearnPage;
