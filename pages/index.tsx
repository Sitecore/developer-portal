// Global
import { classnames } from '@/tailwindcss-classnames';
// Scripts
import { getPageInfo } from '@/scripts/page-info';
// Interfaces
import type { CategoryTileProps } from '@/components/cards/CategoryTile';
import type { PageInfo } from '@/interfaces/page-info';
// Components
import CategoryTileList from '@/components/lists/CategoryTileList';
import CommunityList from '@/components/lists/CommunityList';
import Container from '@/components/helper/Container';
import GetHelp from '@/components/cards/GetHelp';
import Layout from '@/components/layout/Layout';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('home');

  return {
    props: {
      pageInfo,
    },
  };
}

const productSolutions: CategoryTileProps[] = [
  {
    title: 'Content Management (CMS) 💾 →',
    description:
      'Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.',
    href: '/content-management/',
  },
  {
    title: 'Digital Asset Management (DAM) 📀 →',
    description: 'Scale management and delivery of media and static assets',
    href: '/digital-asset-management/dam',
  },
  {
    title: 'Customer Data Management 👨‍👨‍👧‍👧 →',
    description: 'Track events, activity, and customer profile information',
    href: '/customer-data-management/',
  },
  {
    title: 'Personalization and Testing 🕵️‍♀️ →',
    description: 'Deliver personalized content and test which content is working',
    href: '/personalization-testing/',
  },
  {
    title: 'Marketing Automation 🚗 →',
    description: 'Connect with customers using marketing automation',
    href: '/marketing-automation/',
  },
  {
    title: 'Commerce 💸 →',
    description: 'Build out order management, merchandising, marketplaces, and storefronts',
    href: '/commerce/',
  },
  {
    title: 'DevOps 🚢 →',
    description: 'Installation, deployment, and architecture',
    href: '/devops/',
  },
];

type HomePageProps = {
  pageInfo: PageInfo;
};

const HomePage = ({ pageInfo }: HomePageProps): JSX.Element => (
  <Layout pageInfo={pageInfo}>
    <Container>
      <YouTubeFeed content={pageInfo.youtube} />
      <CommunityList className={classnames('mb-11')} />
    </Container>
    <section className={classnames('bg-gray-lightest', 'py-16', 'mb-16')}>
      <Container>
        <h2 className={classnames('heading-md', 'mb-4')}>Navigation Title</h2>
        <CategoryTileList cards={productSolutions} />
      </Container>
    </section>
    <Container>
      <GetHelp />
      <StackExchangeFeed content={pageInfo.stackexchange} />
    </Container>
  </Layout>
);

export default HomePage;
