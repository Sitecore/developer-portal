import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import communityListData from '@data/data-community-list';
import platformData from '@data/data-platform';
import { productSolutions } from '@data/data-product-solutions';
import updatesListData from '@data/data-updates';
import getHelpCta from '@data/promos/get-help';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import ChangelogEntries from '@src/components/changelog/ChangelogEntries';
import Layout from '@src/layouts/Layout';
import { NextPage } from 'next';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import Hexagons from 'ui/components/hexagons/Hexagons';
import { StackExchangeFeed, YouTubeFeed } from 'ui/components/integrations';
import { SitecoreCommunityBlog, SitecoreCommunityEvents, SitecoreCommunityNews, SitecoreCommunityQuestions } from 'ui/components/integrations/sitecoreCommunity';
import { CategoryTileList, GenericList } from 'ui/components/lists';
import { CTACard } from 'ui/components/promos';
import { TrackPageView } from '../components/engagetracker/TrackPageView';

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

const HomePage: NextPage<HomePageProps> = ({ pageInfo }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} />

        <VerticalGroup background={'chakra-bg'}>
          <CenteredContent paddingTop={2}>
            <GenericList title={updatesListData.title} subtitle={updatesListData.subtitle} data={updatesListData.data} />
            <SimpleGrid py={4} gap={4} columns={[1, 1, 2]}>
              <ChangelogEntries entries={pageInfo.changelogEntries} title="Latest updates" linkText="Full changelog" />
              <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} listItem={true} />
            </SimpleGrid>
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup background={'chakra-subtle-bg'}>
          <CenteredContent>
            <Hexagons />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup background={'primary.900'} backgroundImage={'url(/images/3d-neutral.jpg)'} backgroundSize={'cover'} backgroundBlendMode={'multiply'} color={'primary.50'} textAlign={{ base: 'left', md: 'center' }}>
          <CenteredContent>
            <GenericList title={platformData.title} subtitle={platformData.subtitle} data={platformData.data} column={3} width={{ base: 'full', md: '2xs' }} cardVariant="blurred" />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup background={'chakra-bg'}>
          <CenteredContent>
            <SitecoreCommunityNews data={pageInfo.sitecoreCommunity.news} title="Community news" />
            <SitecoreCommunityEvents data={pageInfo.sitecoreCommunity.events} title="Community Events" />
            <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
            <GenericList data={communityListData.data} title={communityListData.title} subtitle={communityListData.subtitle} column={3} cardVariant="borderedImage" />
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
            <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
            <StackExchangeFeed data={pageInfo.stackexchange} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default HomePage;
