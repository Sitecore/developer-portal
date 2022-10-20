// Scipts
import { getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
// Interfaces
import { PageInfo, PagePartialGroup } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';

export async function getStaticProps() {
  // Partial Groups
  const cms = await getPartialsAsArray([
    'docs/cms/sitecore-xm-cloud',
    'docs/cms/sitecore-content-hub',
    'docs/cms/headless',
    'docs/cms/sitecore-experience-manager',
  ]);
  const customerDataManagement = await getPartialsAsArray([
    'docs/customer-data-management/sitecore-cdp',
    'docs/customer-data-management/sitecore-experience-platform',
  ]);
  const personalization = await getPartialsAsArray([
    'docs/personalization/sitecore-personalize',
    'docs/personalization/sitecore-experience-platform',
  ]);
  const marketingAutomation = await getPartialsAsArray([
    'docs/marketing-automation/send',
    'docs/marketing-automation/moosend',
    'docs/marketing-automation/sitecore-experience-platform',
  ]);
  const commerce = await getPartialsAsArray([
    'docs/commerce/ordercloud',
    'docs/commerce/sitecore-experience-commerce',
    'docs/commerce/discover',
  ]);

  const partialGroups = [
    {
      title: 'Content Management and Delivery',
      partials: cms,
    },
    {
      title: 'Customer Data Management',
      partials: customerDataManagement,
    },
    {
      title: 'Personalization and Testing',
      partials: personalization,
    },
    {
      title: 'Marketing Automation',
      partials: marketingAutomation,
    },
    {
      title: 'Commerce',
      partials: commerce,
    },
  ];

  return {
    props: {
      pageInfo: await getPageInfo('docs'),
      partialGroups,
    },
    revalidate: 600, // 10 minutes
  };
}

type DocsPageProps = {
  pageInfo: PageInfo;
  partialGroups: PagePartialGroup[];
};

const DocsPage = ({ pageInfo, partialGroups }: DocsPageProps): JSX.Element => (
  <GenericContentPage pageInfo={pageInfo} partialGroups={partialGroups} hasGrid={true} />
);

export default DocsPage;
