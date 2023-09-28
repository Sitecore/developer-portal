import { Container, Flex, Hide } from '@chakra-ui/react';
import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SubPageNavigation } from '@lib/interfaces/page-info';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { RenderContent, RenderPartialGroups, RenderPartials } from '@src/components/markdown/MarkdownContent';
import ChildNavigation from '@src/components/navigation/ChildNavigation';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { PromoCard, PromoCardProps } from 'ui/components/promos';

type ArticlePageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  childPageInfo?: ChildPageInfo[];
  subPageNavigation: SubPageNavigation;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const ArticlePage = ({ pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager, subPageNavigation }: ArticlePageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);

  if (partials) sectionTitles.push(...partials.titles);
  const Nav = customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} /> : null;

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <VerticalGroup>
        <CenteredContent paddingTop={10}>
          {promoBefore && promoBefore.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}

          <Flex direction={{ base: 'column', md: 'row' }}>
            {/* {pageInfo.hasInPageNav && !pageInfo.hasSubPageNav && <Container w={'full'}>{Nav}</Container>} */}
            {pageInfo.hasSubPageNav && (
              <Container maxW={{ base: 'full', md: 240 }}>
                <ChildNavigation subPageNavigation={subPageNavigation} />
              </Container>
            )}
            <Container maxW={'full'}>
              <RenderContent content={pageInfo.parsedContent} />

              <RenderPartialGroups partialGroups={partialGroups} />

              <RenderPartials partials={partials} />

              {customNavPager}
            </Container>
            <Hide below="md">{pageInfo.hasInPageNav && sectionTitles.length > 0 && <Container maxW={200}>{Nav}</Container>}</Hide>
          </Flex>

          {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
          <SocialFeeds pageInfo={pageInfo} />
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default ArticlePage;
