import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo } from '@lib/interfaces/page-info';

import { RenderContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useRouter } from 'next/router';

import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';

import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, Heading, Link, List, ListIcon, ListItem, Stack, Text, Wrap } from '@chakra-ui/react';
import { mdiArrowRightCircle } from '@mdi/js';
import { PromoCardProps, PromoList } from '../components/cards';
import { SocialFeeds } from '../components/links';
import { AccelerateMetaData } from '../components/lists/accelerate/MetaData';
import { ArticlePaging } from '../components/navigation/ArticlePaging';
import BreadcrumbNav from '../components/navigation/BreadcrumbNav';
import { DropDownNavigation } from '../components/navigation/DropDownNavigation';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { CenteredContent } from '../components/ui/sections';

import UseWithAI from '../components/integrations/ai/useWithAI';
import GithubContributionNotice from '../components/markdown/contribute';
import Feedback from '../components/markdown/Feedback';
import { ManifestConfig } from '../lib/interfaces/manifest';
import { getItemUrl } from '../lib/manifestHelper';
import { Sidebar } from './Sidebar';

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

const AcceleratePage = ({ pageInfo, promoAfter, promoBefore, customNav, customNavPager, sidebarConfig }: ArticlePageProps) => {
  const router = useRouter();
  const path = router.asPath;
  const { children } = useManifestRoutes(sidebarConfig, path);

  if (!pageInfo) {
    return <>No pageInfo found</>;
  }

  // Check for headings in the content
  const sectionTitles: Array<ContentHeading> = [];

  if (pageInfo.headings) {
    sectionTitles.push(...pageInfo.headings);
  }

  const Nav = pageInfo.hasInPageNav != false ? customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} key={router.asPath} /> : null : null;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} section={sidebarConfig.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        {/* <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} demoId={pageInfo.guidedDemoId} /> */}

        <Flex flexGrow={0} justify={'space-between'} width={'full'} gap={0} direction={{ base: 'column', md: 'row' }} flexFlow={'column'}>
          <Sidebar showBackground>
            <SidebarNavigation config={sidebarConfig} />
          </Sidebar>

          <Box width="full" maxW={'6xl'} as="main" minH={'calc(100vh - 215px)'} paddingX={{ base: 4, md: 'inherit' }}>
            {/* {sectionTitles && <InPageNavSmall hideFrom={'xl'} titles={sectionTitles} />} */}
            <CenteredContent minH={'calc(100vh - 400px)'}>
              <Stack mb={4}>
                <DropDownNavigation config={sidebarConfig} key={router.asPath} />
                <BreadcrumbNav enabled={sidebarConfig.enableBreadcrumb} currentPage={pageInfo} config={sidebarConfig} hideCurrentPage />
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight={'400'}>
                  {pageInfo.title}
                </Heading>
                {/* <Text as="h2" color={'neutral'} fontSize={{ base: 'sm', md: 'xl' }} fontFamily={'"DM Sans", sans-serif'} fontWeight={'normal'} letterSpacing={'0.5'}>
                  {pageInfo.description}
                </Text> */}
              </Stack>
              <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentfileName={pageInfo.fileName} config={sidebarConfig} currentPath={path} />

              <PromoList data={promoBefore} />
              <RenderContent content={pageInfo.parsedContent} />

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

              <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentfileName={pageInfo.fileName} config={sidebarConfig} currentPath={path} />

              {customNavPager}
              <PromoList data={promoAfter} />
              <SocialFeeds pageInfo={pageInfo} />
            </CenteredContent>
            <CenteredContent>
              <GithubContributionNotice pageInfo={pageInfo} config={sidebarConfig} />
            </CenteredContent>
          </Box>

          <Sidebar hideBelow={'xl'} borderLeft={'1px solid'} borderColor={'neutral.200'} minH={'100%'} pl="8" position={'sticky'} top={'0'}>
            {sectionTitles.length > 1 && <InPageNav titles={sectionTitles} key={path} title="Topics in this recipe" mt={2} />}

            <UseWithAI pageInfo={pageInfo} />

            <AccelerateMetaData pageInfo={pageInfo} />

            <Alert position={'fixed'} bottom={'10'} right={'4'} maxW={'xs'}>
              <AlertIcon />
              <Wrap>
                <AlertTitle>Questions or suggestions?</AlertTitle>
                <AlertDescription>
                  <Text variant="subtle">We&apos;d love to hear your feedback!</Text>
                </AlertDescription>
                <Feedback variant={'outline'} projectId="RCPS" issueTypeId="3" product={sidebarConfig?.productFeedbackLabel} text="Submit Feedback" />
              </Wrap>
            </Alert>
          </Sidebar>
        </Flex>
      </Layout>
    </TrackPageView>
  );
};

export default AcceleratePage;
