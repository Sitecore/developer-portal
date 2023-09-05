import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import communityListData from '../../data/data-community-list';
import platformData from '../../data/data-platform';
import { productSolutions } from '../../data/data-product-solutions';
import updatesListData from '../../data/data-updates';
import getHelpCta from '../../data/promos/get-help';
import Hero from '../components/Hero';
import ChangelogEntries from '../components/changelog/ChangelogEntries';
import Hexagons from '../components/hexagons/Hexagons';
import SitecoreCommunityBlog from '../components/sitecoreCommunity/blog/SitecoreCommunityBlog';
import SitecoreCommunityEvents from '../components/sitecoreCommunity/events/SitecoreCommunityEvents';
import SitecoreCommunityNews from '../components/sitecoreCommunity/news/SitecoreCommunityNews';
import StackExchangeFeed from '../components/stackexchange/StackExchangeFeed';
import CTACard from '../components/ui/CTACard';
import CategoryTileList from '../components/ui/CategoryTileList';
import { CenteredContent } from '../components/ui/CenteredContent';
import CommunityList from '../components/ui/CommunityList';
import { GenericList } from '../components/ui/GenericList';
import { VerticalGroup } from '../components/ui/VerticalGroup';
import YouTubeFeed from '../components/youtube/YouTubeFeed';
import Layout from '../layouts/Layout';
import { PageInfo } from '../lib/interfaces/page-info';
import { getPageInfo } from '../lib/page-info';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('home', context.preview ? context.preview : null);

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
  };
}

type HomePageProps = {
  pageInfo: PageInfo;
};

const HomePage = ({ pageInfo }: HomePageProps): JSX.Element => (
  <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
    <Hero title={pageInfo.title} description={pageInfo.description} />

    <VerticalGroup background={'chakra-bg'}>
      <CenteredContent paddingTop={2}>
        <GenericList title={updatesListData.title} subtitle={updatesListData.subtitle} data={updatesListData.content} />
        <SimpleGrid py={4} gap={4} columns={[1, 1, 2]}>
          <ChangelogEntries entries={pageInfo.changelogEntries} title="Latest updates" linkText="Full changelog" />
          <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} headingClass="text-lg" listItem={true} />
        </SimpleGrid>
      </CenteredContent>
    </VerticalGroup>

    <VerticalGroup background={'chakra-subtle-bg'}>
      <CenteredContent>
        <Hexagons />
      </CenteredContent>
    </VerticalGroup>

    <VerticalGroup background={'primary.900'} backgroundImage={'url(/images/3d-neutral.jpg)'} backgroundBlendMode={'multiply'} color={'primary.50'} textAlign={{ base: 'left', md: 'center' }}>
      <CenteredContent>
        <GenericList title={platformData.title} subtitle={platformData.subtitle} data={platformData.content} column={3} overrideColor={{ light: 'white', dark: 'white' }} width={{ base: 'full', md: '2xs' }} />
      </CenteredContent>
    </VerticalGroup>

    <VerticalGroup background={'chakra-bg'}>
      <CenteredContent>
        <SitecoreCommunityNews data={pageInfo.sitecoreCommunity.news} columns={3} title="Community news" />
        <SitecoreCommunityEvents data={pageInfo.sitecoreCommunity.events} title="Community Events" />
        <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
        <CommunityList data={communityListData} />
      </CenteredContent>
    </VerticalGroup>

    <VerticalGroup background={'gray.700'}>
      <CenteredContent gap={6}>
        <Heading as="h2" color={'white'} mb={0}>
          Explore Sitecore by solution
        </Heading>
        <Text variant={'large'} color={'white'}>
          How can we help you today? Get all the information you want, depending on your business’s needs.
        </Text>
        <CategoryTileList cards={productSolutions} />
      </CenteredContent>
    </VerticalGroup>

    <VerticalGroup>
      <CenteredContent>
        <CTACard {...getHelpCta} />
      </CenteredContent>
    </VerticalGroup>

    <VerticalGroup>
      <CenteredContent>
        {/* <SitecoreCommunityQuestions content={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} /> */}
        <StackExchangeFeed data={pageInfo.stackexchange} />
      </CenteredContent>
    </VerticalGroup>
  </Layout>
);
export default HomePage;
