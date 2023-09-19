import { Container, Flex, Hide } from '@chakra-ui/react';

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

          {/* Page structure */}

          <Flex direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'revert', md: 'normal' }}>
            {pageInfo.hasSubPageNav && <Container maxW={{ base: 'full', md: 100 }}>{Nav}</Container>}
            <Container maxW={'full'}>
              {/* <Hide above="md">{pageInfo.hasInPageNav && !pageInfo.hasSubPageNav && <>{Nav}</>}</Hide> */}
              <RenderContent content={pageInfo.parsedContent} />

              <RenderPartialGroups partialGroups={partialGroups} />

              <RenderPartials partials={partials} />

              {customNavPager}
            </Container>
            <Hide below="md">
              {pageInfo.hasInPageNav && sectionTitles.length > 0 && (
                <Container maxW={{ base: 'full', md: 180 }} pl={4}>
                  <InPageNav titles={sectionTitles} />
                </Container>
              )}
            </Hide>
          </Flex>

          {/* End Page structure */}

          {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
          <SocialFeeds pageInfo={pageInfo} />
        </CenteredContent>
      </ContentSection>
    </Layout>
  );
};

export default DefaultContentPage;
