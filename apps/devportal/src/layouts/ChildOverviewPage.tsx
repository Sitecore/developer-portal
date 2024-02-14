import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { Button, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { TextLink } from 'ui/components/links/TextLink';
import { PromoCardProps } from 'ui/components/promos';
import PromoList from 'ui/components/promos/promoCard/PromoList';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ChildOverviewPageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
  childPageInfo: ChildPageInfo[];
  sidebarConfig: SidebarNavigationConfig;
};

const ChildOverviewPage = ({ pageInfo, promoAfter, promoBefore, childPageInfo, sidebarConfig }: ChildOverviewPageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <SidebarNavigation config={sidebarConfig} />}>
          {pageInfo.content && pageInfo.content.length > 0 && (
            <VerticalGroup>
              <CenteredContent>
                <PromoList data={promoBefore} />

                {pageInfo.parsedContent && (
                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <GridItem colSpan={4}>
                      <RenderContent content={pageInfo.parsedContent} />
                    </GridItem>
                  </Grid>
                )}

                <PromoList data={promoAfter} />
              </CenteredContent>
            </VerticalGroup>
          )}
          <VerticalGroup>
            <CenteredContent>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {childPageInfo.map((childPage, i) => (
                  <Card variant={'outlineRaised'} size="md" layerStyle={'interactive.raise'} key={i}>
                    <CardHeader>
                      <TextLink isHeading as={'h3'} text={childPage.title} aria-label={childPage.title} href={childPage.link} />
                    </CardHeader>
                    <CardBody>
                      <Text variant={'large'}>{childPage.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant={'outline'} colorScheme="neutral">
                        <Link href={childPage.link}>Read more</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </SimpleGrid>
            </CenteredContent>
          </VerticalGroup>
          {/* <VerticalGroup>
          <CenteredContent>
            <PromoList data={promoAfter} />
            <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
            <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
            <StackExchangeFeed data={pageInfo.stackexchange} />
            <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} />
          </CenteredContent>
        </VerticalGroup> */}
        </ThreeColumnLayout>
      </Layout>
    </TrackPageView>
  );
};

export default ChildOverviewPage;
