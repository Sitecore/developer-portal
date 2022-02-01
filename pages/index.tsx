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
import SitecoreCommunityBlog from '@/components/integrations/sitecore-community/blog/SitecoreCommunityBlog';
import SitecoreCommunityEvents from '@/components/integrations/sitecore-community/events/SitecoreCommunityEvents';
import SitecoreCommunityNews from '@/components/integrations/sitecore-community/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from '@/components/integrations/sitecore-community/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import VerticalGroup from '@/components/helper/VerticalGroup';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
import PromoCard from '@/components/cards/PromoCard';
// Data
import getHelpCta from '@/data/promos/get-help';
import newPromo from '@/data/promos/newpromo';

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
          <PromoCard {...newPromo} key="newPromo" isImageLeft={true} />
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
