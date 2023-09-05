import { Grid, GridItem } from '@chakra-ui/react';

import Hero from '../components/Hero';
import SocialFeeds from '../components/common/SocialFeeds';
import { RenderContent, RenderPartialGroups, RenderPartials } from '../components/markdown/MarkdownContent';
import InPageNav from '../components/navigation/InPageNav';
import { CenteredContent } from '../components/ui/CenteredContent';
import PromoCard, { PromoCardProps } from '../components/ui/PromoCard';
import { VerticalGroup } from '../components/ui/VerticalGroup';
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

const DefaultContentPage = ({ hasGrid, pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager, childPageInfo }: DefaultContentPageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  sectionTitles.push(...pageInfo.headings);
  if (partials) sectionTitles.push(...partials.titles);
  const Nav = customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} /> : null;

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <VerticalGroup>
        <CenteredContent paddingTop={10}>
          {promoBefore && promoBefore.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}

          <Grid templateColumns="repeat(6, 1fr)" gap={4}>
            {pageInfo.hasInPageNav && !pageInfo.hasSubPageNav && <GridItem>{Nav}</GridItem>}

            <GridItem colSpan={pageInfo.hasInPageNav || pageInfo.hasSubPageNav ? 4 : 6}>
              <RenderContent content={pageInfo.parsedContent} />

              <RenderPartialGroups partialGroups={partialGroups} />

              <RenderPartials partials={partials} />

              {customNavPager}
            </GridItem>
            {pageInfo.hasInPageNav && pageInfo.hasSubPageNav && pageInfo.headings?.length > 0 && <GridItem>{Nav}</GridItem>}
          </Grid>

          {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
          <SocialFeeds pageInfo={pageInfo} />
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default DefaultContentPage;