// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartialGroup } from '@/interfaces/page-info';
// Data
import learningAtSitecore from '@/data/promos/learning-at-sitecore';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('trials');

  console.log(pageInfo);

  const trials = await getPartialsAsArray([
    'trials/frontend',
    'trials/ordercloud',
    'trials/moosend',
  ]);

  const partialGroups = [
    {
      title: 'Available trials',
      description:
        'For some of our products we offer free trial to help you get started. Sign up and you will get guidance with your first steps using any of the products below.',
      partials: trials,
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

const LearnPage = ({ pageInfo, partialGroups }: LearnPageProps): JSX.Element => (
  <GenericContentPage
    pageInfo={pageInfo}
    partialGroups={partialGroups}
    hasGrid={true}
    promoAfter={[learningAtSitecore]}
  />
);

export default LearnPage;
