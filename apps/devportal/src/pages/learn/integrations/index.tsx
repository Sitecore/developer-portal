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
  const integrations = await getPartialsAsArray(['learn/integrations/smarthub-cdp', 'learn/integrations/xm', 'learn/integrations/content-hub', 'learn/integrations/send', 'learn/integrations/orderCloud']);

  const partialGroups = [
    {
      title: 'Integrations',
      description: 'Do you want to see how you can integrate the different Sitecore products today? These integration guides will get you started leveraging the power of multiple products.',
      partials: integrations,
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
