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
import CTACard from '@/components/cards/CTACard';
import Layout from '@/components/layout/Layout';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
// Data
import getHelpCta from '@/data/promos/get-help';
import VerticalGroup from '@/components/helper/VerticalGroup';

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
    title: 'Content Management (CMS)',
    description:
      'Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.',
    href: '/content-management/',
  },
  {
    title: 'Digital Asset Management (DAM)',
    description: 'Scale management and delivery of media and static assets',
    href: '/digital-asset-management/dam',
  },
  {
    title: 'Customer Data Management',
    description: 'Track events, activity, and customer profile information',
    href: '/customer-data-management/',
  },
  {
    title: 'Personalization and Testing',
    description: 'Deliver personalized content and test which content is working',
    href: '/personalization-testing/',
  },
  {
    title: 'Marketing Automation',
    description: 'Connect with customers using marketing automation',
    href: '/marketing-automation/',
  },
  {
    title: 'Commerce',
    description: 'Build out order management, merchandising, marketplaces, and storefronts',
    href: '/commerce/',
  },
  {
    title: 'DevOps',
    description: 'Installation, deployment, and architecture',
    href: '/devops/',
  },
];

type HomePageProps = {
  pageInfo: PageInfo;
};

const HomePage = ({ pageInfo }: HomePageProps): JSX.Element => (
  <Layout pageInfo={pageInfo}>
    <VerticalGroup>
      <Container>
        <VerticalGroup size="lg">
          <YouTubeFeed
            content={pageInfo.youtube}
            title={pageInfo.youtubeTitle}
            playlistTitle={pageInfo.youtubePlaylistTitle}
          />
          <CommunityList />
        </VerticalGroup>
      </Container>
      <section className={classnames('bg-theme-bg-alt', 'py-16')}>
        <Container>
          <div className={classnames('mb-8', 'max-w-prose')}>
            <h2 className={classnames('heading-md', 'mb-4')}>Explore Sitecore by solution</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam accusamus
              neque hic non cumque vitae, illum fugiat quibusdam est?
            </p>
          </div>
          <CategoryTileList cards={productSolutions} />
        </Container>
      </section>
      <Container>
        <VerticalGroup>
          <CTACard {...getHelpCta} />
          <StackExchangeFeed content={pageInfo.stackexchange} />
        </VerticalGroup>
      </Container>
    </VerticalGroup>
  </Layout>
);

export default HomePage;
