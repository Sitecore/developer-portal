import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { ContentHeading } from '@lib/interfaces/contentheading';
import { PageInfo, PagePartialGroup, PartialData, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { CenteredContent, Hero, VerticalGroup } from '@scdp/ui/components';
import Layout from '@src/layouts/Layout';
import GithubContributionNotice from '../components/common/contribute';
import { DecoratedMarkdown } from '../components/markdown/MarkdownContent';
import SidebarNavigation from '../components/navigation/SidebarNavigation';

type NewsLetterPagePageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  sidebarConfig: SidebarNavigationConfig;
};

const NewsLetterPage = ({ pageInfo, partials, sidebarConfig }: NewsLetterPagePageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);

  if (partials) sectionTitles.push(...partials.titles);

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <Box>
              <Flex flexGrow={0} justify={'space-between'} width={'full'} gap={4} direction={{ base: 'column', md: 'row' }} flexFlow={'column'}>
                <Box w={{ base: 'full', md: '25%' }} as={'nav'}>
                  <SidebarNavigation config={sidebarConfig} />
                </Box>
                <Box gap={10} w={{ base: 'full' }}>
                  <SimpleGrid columns={{ base: 0, md: 3 }} gap={8}>
                    {pageInfo.parsedContent && <DecoratedMarkdown disabledProse>{pageInfo.parsedContent}</DecoratedMarkdown>}
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>
          </CenteredContent>
        </VerticalGroup>

        <GithubContributionNotice pageInfo={pageInfo} />
      </Layout>
    </TrackPageView>
  );
};

export default NewsLetterPage;
