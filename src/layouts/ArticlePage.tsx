import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo } from '@lib/interfaces/page-info';

import { RenderContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useRouter } from 'next/router';

import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';

import { Heading, Link, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import { mdiArrowRightCircle } from '@mdi/js';
import { useEffect, useState } from 'react';
import { PromoCardProps, PromoList } from '../components/cards';
import { SocialFeeds } from '../components/links';
import GithubContributionNotice from '../components/markdown/contribute';
import { ArticlePaging } from '../components/navigation/ArticlePaging';
import BreadcrumbNav from '../components/navigation/BreadcrumbNav';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { Hero } from '../components/ui/sections';
import useManifestRoutes from '../hooks/useManifestRoutes';
import { ManifestConfig } from '../lib/interfaces/manifest';
import { getItemUrl } from '../lib/manifestHelper';
import { replaceOutgoingLinks } from '../lib/markdown/replaceLinks';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ArticlePageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  childPageInfo?: Array<ChildPageInfo>;
  sidebarConfig: ManifestConfig;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const ArticlePage = ({ pageInfo, promoAfter, promoBefore, customNav, customNavPager, sidebarConfig }: ArticlePageProps) => {
  const router = useRouter();
  const { children } = useManifestRoutes(sidebarConfig, router.asPath);

  if (!pageInfo) {
    return <>No pageInfo found</>;
  }

  // Check for headings in the content
  const sectionTitles: Array<ContentHeading> = [];

  if (pageInfo.headings) {
    sectionTitles.push(...pageInfo.headings);
  }

  const [processedContent, setProcessedContent] = useState(pageInfo.parsedContent ?? '');

  useEffect(() => {
    // If the content changes or on page load, replace the links
    setProcessedContent(replaceOutgoingLinks(pageInfo.parsedContent ?? ''));
  }, [pageInfo.parsedContent]);

  const Nav = pageInfo.hasInPageNav != false ? customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} key={router.asPath} /> : null : null;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} section={sidebarConfig.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} demoId={pageInfo.guidedDemoId} />

        <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <SidebarNavigation config={sidebarConfig} />} inPageLinks={sectionTitles} inPageNav={sectionTitles.length > 0 && Nav}>
          <BreadcrumbNav enabled={sidebarConfig.enableBreadcrumb} currentPage={pageInfo} config={sidebarConfig} />
          <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentfileName={pageInfo.fileName} config={sidebarConfig} currentPath={router.asPath} />
          {pageInfo.lastUpdated && (
            <Heading variant={'section'} size={'sm'} mb={{ base: 0, md: 2 }}>
              Last updated: {new Date(pageInfo.lastUpdated).toLocaleString('en-US', { dateStyle: 'medium' })}
            </Heading>
          )}
          <PromoList data={promoBefore} />

          {/* {router.asPath.includes('/downloads') && (
            <Alert status="warning" mb={4}>
              <AlertIcon />

              <AlertDescription w="full">
                We have discovered an issue with some of our Developer downloads. Out of an abundance of caution we have temporarily disabled download ability while we address this issue. We hope to have access available as soon as possible; in the
                meantime please work with your customer support / account executive representative to get the access you need.
                <div style={{ marginTop: '1rem' }}>
                  For information on how to file a support case, please refer to <Link href="https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB0654910#HowToCreateASupportCase">this article</Link>
                </div>
              </AlertDescription>
            </Alert>
          )} */}

          <RenderContent content={processedContent} />

          {/* Child Navigation */}
          {children && children?.length > 0 && (
            <Stack gap={4}>
              <Text fontWeight={'semibold'}>Articles in this section:</Text>
              <List spacing="2">
                {children.map((child, i) => (
                  <ListItem key={i}>
                    <ListIcon>
                      <path d={mdiArrowRightCircle} />
                    </ListIcon>

                    <Link href={getItemUrl(sidebarConfig, child)}>{child.title}</Link>
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}

          <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentfileName={pageInfo.fileName} config={sidebarConfig} currentPath={router.asPath} />
          <GithubContributionNotice pageInfo={pageInfo} config={sidebarConfig} />
          {customNavPager}
          <PromoList data={promoAfter} />
          <SocialFeeds pageInfo={pageInfo} />
        </ThreeColumnLayout>
      </Layout>
    </TrackPageView>
  );
};

export default ArticlePage;
