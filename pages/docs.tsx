// Scipts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartialGroup } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('docs');
  // Partial Groups
  const cms = await getPartialsAsArray([
    'docs/cms/sitecore-experience-manager',
    'docs/cms/headless',
    'docs/cms/sitecore-content-hub',
  ]);
  const dam = await getPartialsAsArray(['docs/dam']);
  const customerDataManagement = await getPartialsAsArray([
    'docs/customer-data-management/sitecore-cdp',
    'docs/customer-data-management/sitecore-experience-platform',
  ]);
  const personalization = await getPartialsAsArray([
    'docs/personalization/sitecore-cdp',
    'docs/personalization/sitecore-experience-platform',
  ]);
  const marketingAutomation = await getPartialsAsArray([
    'docs/marketing-automation/moosend',
    'docs/marketing-automation/sitecore-experience-platform',
  ]);
  const commerce = await getPartialsAsArray([
    'docs/commerce/ordercloud',
    'docs/commerce/sitecore-experience-commerce',
  ]);

  const partialGroups = [
    {
      title: 'Content Management and Delivery',
      partials: cms,
    },
    {
      title: 'DAM',
      partials: dam,
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
      pageInfo,
      partialGroups,
    },
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
