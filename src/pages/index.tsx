import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Article, CTACard } from '@components/cards';
import PromoCardVertical from '@components/cards/PromoCardVerticals';
import communityListData from '@data/data-community-list';
import getHelpCta from '@data/promos/get-help';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import ChangelogEntries from '@src/components/changelog/ChangelogEntries';
import Layout from '@src/layouts/Layout';
import { NextPage } from 'next';

import { SitecoreCommunityBlog, SitecoreCommunityEvents, SitecoreCommunityNews, SitecoreCommunityQuestions, StackExchangeFeed, YouTubeFeed } from '@components/integrations';
import { GenericList } from '@components/lists';
import { CenteredContent, Hero, Row, VerticalGroup } from '@components/ui/sections';
import platformData from '@data/data-capabilities';

import partnerawards from '@data/promos/partnerawards';
import productwebinar from '@data/promos/productwebinar';
import symposium2025 from '@data/promos/symposium2025';

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
            <Flex 
              direction="column" 
              gap={{ base: 4, md: 2 }} 
              mb={0}
              mt={{ base: 8, md: 0 }}
            > 
              <Text fontSize="md" textAlign="left" mx="auto">
                Explore a unified platform that brings together content, data, personalisation, and intelligent automation: designed for developers, marketers, and partners alike. Join a thriving community of over 4,000 daily active developers
                shaping the future of digital experience. Whether you&apos;re migrating from CMS or scaling across channels, SitecoreAI empowers you to deliver personalised, measurable outcomes.
              </Text>
            </Flex>
          </CenteredContent>

          <VerticalGroup background={'chakra-bg'}>
            <CenteredContent>
              <SimpleGrid gap={[4, 4, 10]} mb={0} columns={[1, 1, 2]}>
                <ChangelogEntries entries={pageInfo.changelogEntries} title="Latest changelog updates" linkText="Full changelog" />
                <AccelerateUpdates recipes={recipes} title="Sitecore Accelerate updates" linkHref="/learn/accelerate" linkText="See all recipes" url="/learn/accelerate/" />
              </SimpleGrid>
            </CenteredContent>
          </VerticalGroup>  
          <CenteredContent>
            <Row columns={4}>
              <Article title="Get Started" description="New to Sitecore? Start here essential setup documentation to build your first application." linktext="Get started" link="/sitecoreai" />
              <Article title="Documentation" description="Comprehensive product documentation including feature usage and SDK documentation." linktext="Browse Docs" link="https://doc.sitecore.com/" />
              <Article title="Developer Experience" description="Access and development resources to accelerate your workflow." linktext="Explore Tools" link="/sitecoreai/dev-experience" />
              <Article title="Changelog" description="The changelog provides visibility into key product updates, including new features, enhancements, resolutions and architectural improvements." linktext="View Changelog" link="/changelog" />
            </Row>
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup 
          bgGradient={{ 
            base: 'linear(to-b, #1d08bd, #170697)',
            md: 'linear(to-r, #1d08bd, #170697)'
          }}
          color={'primary.50'} 
          textAlign={{ base: 'center', md: 'center' }}
          p={4} 
        >
          <CenteredContent>
            <Image 
              src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/1f173e4830ef499bbfed583245f41e23?v=ee01a64a" 
              alt="Logo" 
              width="280px" 
              height="67px"
              mx="auto"
              display="block"
              mb={6}
            />
            <GenericList 
              title="" 
              subtitle="" 
              data={platformData.data} 
              column={3} 
              width={{ base: 'full', md: '2xs' }} 
              cardVariant="blurred" 
            />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup backgroundColor={'white'} py={6}>
          <CenteredContent>
            <Flex direction="column" gap={4} textAlign="center" mb={8}>
              <Heading as="h2" size="lg" color={'black'} mb={0}></Heading>
            </Flex>
            <SimpleGrid gap={4} columns={[1, 2, 3]}>
              <PromoCardVertical {...productwebinar} />
              <PromoCardVertical {...partnerawards} />
              <PromoCardVertical {...symposium2025} />
            </SimpleGrid>
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup p={4}  background={'gray.100'}>
          <CenteredContent>
             <Flex direction="column" gap={4} textAlign="center" mb={8}>
              <Heading as="h2" size="lg" color={'black'} mb={0}>
                Sitecore Experience Platform
              </Heading>
              <Text fontSize="md" color={'black'} maxW="3xl" mx="auto">
                Deliver personalized experiences by combining customer data, AI, and marketing automation with our Sitecore Experience Platform™
              </Text>
            </Flex>

            <SimpleGrid gap={6} columns={[1, 2, 3]}>
              <Article
                title="Sitecore Experience Platform"
                description="Create connections, drive conversions, and foster loyalty. With customer data, analytics, marketing automation, and more, with the stand alone Sitecore Experience Platform™."
                linktext="Experience Platform"
                link="/products/experience-platform"
              />
              <Article
                title="Sitecore Experience Manager"
                description="There’s no experience without content. Sitecore Experience Manager® is a powerful and intuitive CMS for the simplified creation and management of experiences across channels and devices."
                linktext="Experience Manager"
                link="/products/experience-platform"
              />
              <Article
                title="Sitecore Managed Cloud"
                description="Sitecore Managed Cloud service actively hosts, monitors, manages, and maintains the installation of Sitecore Experience Platform™ and Sitecore Experience Manager™."
                linktext="Managed Cloud"
                link="/products/managed-cloud"
              />
            </SimpleGrid>
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
