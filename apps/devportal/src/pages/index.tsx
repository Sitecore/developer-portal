// Scripts
import { getPageInfo } from '@/src/common/page-info';
// Interfaces
import type { PageInfo } from '@/src/interfaces/page-info';
import type { CategoryTileProps } from 'ui/components/lists/CategoryTile';
// Components
import CTACard from 'ui/components/cards/CTACard';
import ChangelogEntries from 'ui/components/changelog/ChangelogEntries';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import CategoryTileList from 'ui/components/lists/CategoryTileList';
import CommunityList from 'ui/components/lists/CommunityList';
import SitecoreCommunityBlog from 'ui/components/sitecoreCommunity/blog/SitecoreCommunityBlog';
import SitecoreCommunityEvents from 'ui/components/sitecoreCommunity/events/SitecoreCommunityEvents';
import SitecoreCommunityNews from 'ui/components/sitecoreCommunity/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from 'ui/components/sitecoreCommunity/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from 'ui/components/stackexchange/StackExchangeFeed';
import YouTubeFeed from 'ui/components/youtube/YouTubeFeed';
import Layout from 'ui/layouts/Layout';
// Data
import communityListData from '@/data/data-community-list';
import updatesListData from '@/data/data-updates';
import getHelpCta from '@/data/promos/get-help';
import { Row } from 'ui/components/common/Row';
import GenericList from 'ui/components/lists/GenericList';
import Hexagons from '../../../../packages/ui/components/hexagons/Hexagons';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('home', context.preview ? context.preview : null);

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
    description: 'Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.',
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
  <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage} preview={pageInfo.previewMode}>
    <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

    <VerticalGroup>
      <Container>
        <VerticalGroup size="lg">
          <GenericList data={updatesListData} className="mt-8" columns={4} />
          <Row columns={2} className="gap-14">
            <ChangelogEntries content={pageInfo.changelogEntries} title="Latest updates" columns={1} headingClass="text-lg" linkText="changelog" />
            <SitecoreCommunityBlog content={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} headingClass="text-lg" listItem={true} />
          </Row>
        </VerticalGroup>
      </Container>
      <section className="bg-theme-bg-alt py-16">
        <Container>
          <Hexagons />
        </Container>
      </section>
      <Container>
        <VerticalGroup size="lg">
          <SitecoreCommunityNews content={pageInfo.sitecoreCommunity.news} columns={3} title="Community news" />
          <SitecoreCommunityEvents content={pageInfo.sitecoreCommunity.events} />
          <YouTubeFeed content={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
          <CommunityList data={communityListData} />
        </VerticalGroup>
      </Container>
      <section className="dark:bg-theme-bg-alt bg-gray-600 py-16">
        <Container>
          <div className="mb-8 max-w-prose">
            <h2 className="heading-md mb-4 text-white">Explore Sitecore by solution</h2>
            <p className="text-white">How can we help you today? Get all the information you want, depending on your business’s needs.</p>
          </div>
          <CategoryTileList cards={productSolutions} />
        </Container>
      </section>
      <Container>
        <CTACard {...getHelpCta} />
      </Container>
      <section className="bg-theme-bg-alt py-16">
        <Container>
          <VerticalGroup>
            <SitecoreCommunityQuestions content={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
            <StackExchangeFeed content={pageInfo.stackexchange} />
          </VerticalGroup>
        </Container>
      </section>
    </VerticalGroup>
  </Layout>
);

export default HomePage;
