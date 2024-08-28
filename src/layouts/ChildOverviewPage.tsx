import { Button, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Link, Stack, Text } from '@chakra-ui/react';
import { ChildPageInfo, PageInfo, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';

import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';

import { PromoCardProps, PromoList } from '../components/cards';
import { Hero } from '../components/common';
import { TextLink } from '../components/links';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { CenteredContent, VerticalGroup } from '../components/ui/sections';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ChildOverviewPageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
  childPageInfo: Array<ChildPageInfo>;
  sidebarConfig: SidebarNavigationConfig;
};

const ChildOverviewPage = ({ pageInfo, promoAfter, promoBefore, childPageInfo, sidebarConfig }: ChildOverviewPageProps) => {
  if (!pageInfo) {
    return <>No pageInfo found</>;
  }

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
              <Stack gap={10}>
                {childPageInfo.map((childPage, i) => (
                  <Card variant={'outlineRaised'} size="lg" layerStyle={'interactive.raise'} key={i}>
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
              </Stack>
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
