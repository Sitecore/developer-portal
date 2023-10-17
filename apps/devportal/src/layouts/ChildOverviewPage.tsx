import { Button, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Link, SimpleGrid, Text } from '@chakra-ui/react';

import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData } from '@lib/interfaces/page-info';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { TrackPageView } from '@src/components/engagetracker/TrackPageView';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { TextLink } from 'ui/components/links/TextLink';
import { PromoCard, PromoCardProps } from 'ui/components/promos';

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
};

const ChildOverviewPage = ({ pageInfo, promoAfter, promoBefore, childPageInfo }: ChildOverviewPageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage} background={'chakra-subtle-bg'}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        {pageInfo.content && pageInfo.content.length > 0 && (
          <VerticalGroup>
            <CenteredContent>
              {promoBefore && promoBefore.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}

              {pageInfo.parsedContent && (
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                  <GridItem colSpan={4}>
                    <RenderContent content={pageInfo.parsedContent} />
                  </GridItem>
                </Grid>
              )}
            </CenteredContent>
          </VerticalGroup>
        )}
        <VerticalGroup>
          <CenteredContent>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {childPageInfo.map((childPage, i) => (
                <Card variant={'elevated'} size="md" key={i}>
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
        <VerticalGroup>
          <CenteredContent>
            {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
            <SocialFeeds pageInfo={pageInfo} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default ChildOverviewPage;
