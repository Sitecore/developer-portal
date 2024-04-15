import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, GridItem, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { ChildPageInfo, PageInfo, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { CenteredContent, Hero, TextLink, VerticalGroup } from '@scdp/ui/components';
import Layout from '@src/layouts/Layout';
import { DecoratedMarkdown, RenderContent } from '../components/markdown/MarkdownContent';
import SidebarNavigation from '../components/navigation/SidebarNavigation';

type NewsLetterPagePageProps = {
  pageInfo: PageInfo;
  sidebarConfig: SidebarNavigationConfig;
  childPageInfo: ChildPageInfo[];
};

const NewsLetterPage = ({ pageInfo, sidebarConfig, childPageInfo }: NewsLetterPagePageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <Flex flexGrow={0} justify={'space-between'} width={'full'} gap={4} direction={{ base: 'column', md: 'row' }} flexFlow={'column'}>
              <Box w={{ base: 'full', md: '25%' }} as={'nav'}>
                <SidebarNavigation config={sidebarConfig} />
              </Box>

              {/* Show overview is the route has childs */}
              {childPageInfo.length > 0 && (
                <Box gap={10} w={{ base: 'full' }}>
                  {/* Show markdown content if we have some */}
                  {pageInfo.content && pageInfo.content?.length > 0 && (
                    <Box mb={10}>
                      <RenderContent content={pageInfo.parsedContent} />
                    </Box>
                  )}
                  {/* Render the list of child pages */}
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {childPageInfo.map((childPage, i) => (
                      <GridItem order={'-' + i} key={i}>
                        <Card variant={'outlineRaised'} size="md" layerStyle={'interactive.raise'} key={i}>
                          <CardHeader>
                            <TextLink isHeading as={'h3'} text={childPage.title} aria-label={childPage.title} href={childPage.link} />
                          </CardHeader>
                          <CardBody>
                            <Text noOfLines={2}>{childPage.description}</Text>
                          </CardBody>
                          <CardFooter>
                            <Button variant={'outline'} colorScheme="neutral">
                              <Link href={childPage.link}>Read more</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* No childpages, show newsletter content */}
              {childPageInfo.length == 0 && (
                <Box gap={10} w={{ base: 'full' }}>
                  <SimpleGrid columns={{ base: 0, md: 3 }} gap={8}>
                    {pageInfo.parsedContent && <DecoratedMarkdown disabledProse>{pageInfo.parsedContent}</DecoratedMarkdown>}
                  </SimpleGrid>
                </Box>
              )}
            </Flex>
          </CenteredContent>
        </VerticalGroup>

      </Layout>
    </TrackPageView>
  );
};

export default NewsLetterPage;
