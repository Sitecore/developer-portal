import { Box, Grid, GridItem, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';

import Hero from '../components/Hero';
import SocialFeeds from '../components/common/SocialFeeds';
import { RenderContent } from '../components/markdown/MarkdownContent';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CenteredContent } from '../components/ui/CenteredContent';
import PromoCard, { PromoCardProps } from '../components/ui/PromoCard';
import { VerticalGroup } from '../components/ui/VerticalGroup';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData } from '../lib/interfaces/page-info';
import Layout from './Layout';

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

const ChildOverviewPage = ({ hasGrid, pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager, childPageInfo }: ChildOverviewPageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage} background={'chakra-subtle-bg'}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      {promoBefore != null ||
        (pageInfo.content.length > 0 && (
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
        ))}
      <VerticalGroup>
        <CenteredContent>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {childPageInfo.map((childPage, i) => (
              <Box key={i} px={8} py={12} background={useColorModeValue('white', 'gray.800')} shadow={'lg'}>
                <ButtonLink as={'h3'} variant="unstyled" text={childPage.title} href={childPage.link} fontSize={'1.25rem'} fontWeight={700} aria-label={childPage.title} px={0} overrideColor={useColorModeValue('black', 'white')} />
                <Text variant={'large'}>{childPage.description}</Text>
              </Box>
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
  );
};

export default ChildOverviewPage;
