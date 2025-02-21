import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { Box, Button, Card, CardBody, Flex, Grid, GridItem, Heading, LinkBox, LinkOverlay, SimpleGrid, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import { ChildPageInfo, PageInfo } from '@lib/interfaces/page-info';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';
import Image from 'next/image';

import NextLink from 'next/link';
import { PromoCardProps, PromoList } from '../components/cards';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';
import { GetProductLogo } from '../lib/assets';
import { ManifestConfig } from '../lib/interfaces/manifest';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ChildOverviewPageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
  childPageInfo: Array<ChildPageInfo>;
  sidebarConfig: ManifestConfig;
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
              <SimpleGrid columns={[1, 2, 2]} gap={4} my={4}>
                {childPageInfo.map((childPage, i) => (
                  <LinkBox as="article" key={i}>
                    <Card variant={'outlineRaised'} layerStyle={'interactive.raise'}>
                      <CardBody>
                        <Flex direction={'column'} gap={4} align={'flex-start'}>
                          {childPage.productLogo && (
                            <Box height={'24px'} width={'full'} position={'relative'} mb={4} sx={{ '& > img': { width: 'auto !important' } }}>
                              <Image
                                src={useColorModeValue(GetProductLogo(childPage.productLogo, 'Light'), GetProductLogo(childPage.productLogo, 'Dark'))}
                                alt={`${childPage.title}`}
                                fill
                                style={{ objectFit: 'fill' }}
                                sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw"
                              />
                            </Box>
                          )}
                          <Heading as="h4" size="md">
                            <LinkOverlay as={NextLink} href={childPage.link}>
                              {childPage.title}
                            </LinkOverlay>
                          </Heading>
                          <Text>{childPage.description}</Text>
                          <Spacer />

                          <Button variant={'outline'} colorScheme="neutral">
                            <LinkOverlay as={NextLink} href={childPage.link}>
                              Read more
                            </LinkOverlay>
                          </Button>
                        </Flex>
                      </CardBody>
                    </Card>
                  </LinkBox>
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
