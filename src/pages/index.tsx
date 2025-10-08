import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { SimpleGrid } from '@chakra-ui/react';
import { Article, CTACard, PromoCard } from '@components/cards';
import communityListData from '@data/data-community-list';
import platformData from '@data/data-platform';
import getHelpCta from '@data/promos/get-help';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import ChangelogEntries from '@src/components/changelog/ChangelogEntries';
import Layout from '@src/layouts/Layout';
import { NextPage } from 'next';

import { SitecoreCommunityBlog, SitecoreCommunityEvents, SitecoreCommunityNews, SitecoreCommunityQuestions, StackExchangeFeed, YouTubeFeed } from '@components/integrations';
import { GenericList } from '@components/lists';
import ProductList from '@components/lists/products/productList';
import { CenteredContent, Hero, Row, VerticalGroup } from '@components/ui/sections';
import hackerspace from '@data/promos/hackerspace';
import data from '@data/promos/survey';

import AccelerateUpdates from '../components/lists/accelerate/AccelerateUpdates';
import { getLatestRecipes } from '../lib/accelerate/latest';
import { AccelerateRecipe } from '../lib/accelerate/types/recipe';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('home');
  const recipes = await getLatestRecipes();

  return {
    props: {
      pageInfo,
      recipes,
    },
    revalidate: 600, // 10 minutes
  };
}

type HomePageProps = {
  pageInfo: PageInfo;
  recipes: Array<AccelerateRecipe>;
  preview: boolean;
};

const HomePage: NextPage<HomePageProps> = ({ pageInfo, recipes }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} />

        <VerticalGroup background={'chakra-bg'}>
          <CenteredContent>
            <SimpleGrid gap={[4, 4, 10]} mb={0} columns={[1, 1, 2]}>
              <ChangelogEntries entries={pageInfo.changelogEntries} title="Latest changelog updates" linkText="Full changelog" />
              <AccelerateUpdates recipes={recipes} title="Sitecore Accelerate updates" linkHref="/learn/accelerate" linkText="See all recipes" url="/learn/accelerate/xm-cloud" />
            </SimpleGrid>
            <PromoCard {...data} />
            <Row columns={3}>
              <Article
                title="Sitecore Experience Platform 10.4"
                description="Looking for the latest versions of Sitecore software, including the latest Sitecore Experience Platform 10.4? Have a look at the new download section."
                linktext="Download"
                link="/downloads"
              />
              <Article title="Sitecore Changelog" description="Learn more about new versions, changes and improvements in the public preview of the Sitecore Changelog" linktext="View" link="/changelog" />
              <Article
                title="Sitecore Accelerate"
                description="Sitecore Accelerate is a dedicated program to help Sitecore customers upgrade their existing PaaS CMS or commerce solution to our next-gen SaaS products."
                linktext="Read"
                link="/learn/accelerate"
              />
            </Row>
            <PromoCard {...hackerspace} />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup bg="chakra-subtle-bg">
          <CenteredContent>
            <ProductList />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup backgroundImage={{ base: '/images/sc_power-gradient-mobile.svg', md: '/images/sc_power-gradient-desktop.svg' }} backgroundSize={'cover'} color={'primary.50'} textAlign={{ base: 'left', md: 'center' }}>
          <CenteredContent>
            <GenericList title={platformData.title} subtitle={platformData.subtitle} data={platformData.data} column={3} width={{ base: 'full', md: '2xs' }} cardVariant="blurred" />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup background={'chakra-bg'}>
          <CenteredContent>
            <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} />
            <SitecoreCommunityNews data={pageInfo.sitecoreCommunity.news} title="Community news" />
            <SitecoreCommunityEvents data={pageInfo.sitecoreCommunity.events} title="Community Events" />
            <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
            <GenericList data={communityListData.data} title={communityListData.title} subtitle={communityListData.subtitle} column={3} cardVariant="borderedImage" />
          </CenteredContent>
        </VerticalGroup>

        {/* <VerticalGroup background={'gray.700'}>
          <CenteredContent gap={6}>
            <Heading as="h2" color={'white'} mb={0}>
              Explore Sitecore by solution
            </Heading>
            <Text variant={'large'} color={'white'}>
              How can we help you today? Get all the information you want, depending on your business’s needs.
            </Text>
            <CategoryTileList cards={productSolutions} />
          </CenteredContent>
        </VerticalGroup> */}

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
