// Global
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Scripts
import { getPageInfo } from '@/src/common/page-info';
// Interfaces
import type { CategoryTileProps } from '@/src/components/lists/CategoryTile';
import type { PageInfo } from '@/src/interfaces/page-info';
// Components
import CTACard from '@/src/components/cards/CTACard';
import PromoCard from '@/src/components/cards/PromoCard';
import Container from '@/src/components/common/Container';
import VerticalGroup from '@/src/components/common/VerticalGroup';
import SitecoreCommunityBlog from '@/src/components/integrations/sitecore-community/blog/SitecoreCommunityBlog';
import SitecoreCommunityEvents from '@/src/components/integrations/sitecore-community/events/SitecoreCommunityEvents';
import SitecoreCommunityNews from '@/src/components/integrations/sitecore-community/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from '@/src/components/integrations/sitecore-community/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from '@/src/components/integrations/stackexchange/StackExchangeFeed';
import YouTubeFeed from '@/src/components/integrations/youtube/YouTubeFeed';
import CategoryTileList from '@/src/components/lists/CategoryTileList';
import CommunityList from '@/src/components/lists/CommunityList';
import Layout from '@/src/layouts/Layout';
// Data
import getHelpCta from '@/data/promos/get-help';
import promoData from '@/data/promos/nextjsconf';
import VideoPromo from '../components/videoPromo';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('home');

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
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
    title: 'Digital Asset Management (DAM) and Content Operations',
    description: 'Scale management, workflow and delivery of content, media and static assets',
    href: '/dam-and-content-operations',
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
          <VideoPromo
            youTubeId="fAlNP0hCoZg"
            title="Composable DXP"
            description="Want to learn more about our Composable DXP and the products that support it? Sitecore's Thomas Desmond explains more in this article"
            linkText="Read the article"
            linkHref="/learn/getting-started/introduction-to-composable-dxp"
          />

          <PromoCard {...promoData} key="promo" isImageLeft={false} />

          <SitecoreCommunityNews content={pageInfo.sitecoreCommunity.news} />
          <SitecoreCommunityBlog
            content={pageInfo.sitecoreCommunity.blog}
            sortKeys={pageInfo.sitecoreCommunityBlogSort}
          />
          <SitecoreCommunityEvents content={pageInfo.sitecoreCommunity.events} />
          <YouTubeFeed
            content={pageInfo.youtube}
            title={pageInfo.youtubeTitle}
            playlistTitle={pageInfo.youtubePlaylistTitle}
          />
          <CommunityList />
        </VerticalGroup>
      </Container>
      <section className={classnames('bg-charcoal', 'dark:bg-gray-darkest', 'py-16')}>
        <Container>
          <div className={classnames('mb-8', 'max-w-prose')}>
            <h2 className={classnames('heading-md', 'mb-4', 'text-white')}>
              Explore Sitecore by solution
            </h2>
            <p className={classnames('text-white')}>
              How can we help you today? Get all the information you want, depending on your
              business’s needs.
            </p>
          </div>
          <CategoryTileList cards={productSolutions} />
        </Container>
      </section>
      <Container>
        <CTACard {...getHelpCta} />
      </Container>
      <section className={classnames('bg-theme-bg-alt', 'py-16')}>
        <Container>
          <VerticalGroup>
            <SitecoreCommunityQuestions
              content={pageInfo.sitecoreCommunity.questions}
              sortKeys={pageInfo.sitecoreCommunityQuestionsSort}
              forumKeys={pageInfo.sitecoreCommunityQuestionsCategory}
            />
            <StackExchangeFeed content={pageInfo.stackexchange} />
          </VerticalGroup>
        </Container>
      </section>
    </VerticalGroup>
  </Layout>
);

export default HomePage;
