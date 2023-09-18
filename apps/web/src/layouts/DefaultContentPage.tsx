import { Grid, GridItem, Hide } from '@chakra-ui/react';

import Hero from '../components/Hero';
import SocialFeeds from '../components/common/SocialFeeds';
import { RenderContent, RenderPartialGroups, RenderPartials } from '../components/markdown/MarkdownContent';
import InPageNav from '../components/navigation/InPageNav';
import { CenteredContent } from '../components/ui/CenteredContent';
import { ContentSection } from '../components/ui/ContentSection';
import PromoCard, { PromoCardProps } from '../components/ui/PromoCard';
import { ContentHeading } from '../lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData } from '../lib/interfaces/page-info';
import Layout from './Layout';

type DefaultContentPageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  childPageInfo?: ChildPageInfo[];
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const DefaultContentPage = ({ pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager }: DefaultContentPageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);
  if (partials) sectionTitles.push(...partials.titles);
  const Nav = customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} /> : null;

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <ContentSection bg={pageInfo.hasInPageNav ? 'gray.90' : 'neutral-subtle-bg'}>
        <CenteredContent paddingTop={10}>
          {promoBefore && promoBefore.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}

          <Grid templateColumns={{ base: 'repeat(6, 1fr)' }} gap={4}>
            <Hide below="md">{pageInfo.hasInPageNav && !pageInfo.hasSubPageNav && <GridItem>{Nav}</GridItem>}</Hide>
            <GridItem colSpan={{ base: 6, md: pageInfo.hasInPageNav || pageInfo.hasSubPageNav ? 4 : 6 }}>
              {/* <Hide above="md">{pageInfo.hasInPageNav && !pageInfo.hasSubPageNav && <>{Nav}</>}</Hide> */}
              <RenderContent content={pageInfo.parsedContent} />

              <RenderPartialGroups partialGroups={partialGroups} />

              <RenderPartials partials={partials} />

              {customNavPager}
            </GridItem>
            {pageInfo.hasInPageNav && pageInfo.hasSubPageNav && sectionTitles.length > 0 && <GridItem>{Nav}</GridItem>}
          </Grid>

          {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
          <SocialFeeds pageInfo={pageInfo} />
        </CenteredContent>
      </ContentSection>
    </Layout>
  );
};

export default DefaultContentPage;
