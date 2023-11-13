import { Container, Flex, Hide } from '@chakra-ui/react';

import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData } from '@lib/interfaces/page-info';
import { trackEntityPageViewEvent } from '@sitecore-search/react';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { RenderContent, RenderPartialGroups, RenderPartials } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useCallback, useEffect, useRef } from 'react';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, ContentSection } from 'ui/components/helpers';
import LatestChangelogEntries from 'ui/components/integrations/changelog/LatestChangelogEntries';
import { PromoCard, PromoCardProps } from 'ui/components/promos';

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

  const contentInnerRef = useRef(null);
  let conversionTriggered = false;
  const onScroll = useCallback(() => {
    if (contentInnerRef.current) {
      const { clientHeight, offsetTop } = contentInnerRef.current;
      const contentAllViewed = window.scrollY + window.innerHeight >= offsetTop + clientHeight;
      const params = new URLSearchParams(window.location.search);
      const fromSearch = params.get('fromSearch');
      if (contentAllViewed && fromSearch && !conversionTriggered) {
        conversionTriggered = true;
        trackEntityPageViewEvent('content', {
          items: [
            {
              id: process.env.NEXT_PUBLIC_SEARCH_DOMAIN_ID_PREFIX + document.location.pathname.replace(/[/:.]/g, '_').replace(/_+$/, ''),
            },
          ],
          actionSubtype: 'conversion',
        });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

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
              <div ref={contentInnerRef}>
                <RenderContent content={pageInfo.parsedContent} />
              </div>

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

          <LatestChangelogEntries entries={pageInfo.changelogEntries} title={`Latest product updates`} linkText="Full changelog" columns={2} />

          {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}

          <SocialFeeds pageInfo={pageInfo} />
        </CenteredContent>
      </ContentSection>
    </Layout>
  );
};

export default DefaultContentPage;
