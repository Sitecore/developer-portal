import { Alert, AlertDescription, AlertIcon, AlertTitle, Code, Stack, Text } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Hero } from '@scdp/ui/components';
import { CenteredContent, VerticalGroup } from '@scdp/ui/components';
import { TrackPageView } from '../components/engagetracker/TrackPageView';
import SearchResults from '../components/sitecore-search/SearchResults';
import Layout from '../layouts/Layout';
import { IsSearchEnabled } from '../lib/search';

interface SearchPageProps {
  pageInfo: PageInfo;
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_search');

  return {
    props: {
      pageInfo,
    },
  };
}

const Search: NextPage<SearchPageProps> = ({ pageInfo }) => {
  const router = useRouter();
  const query: string = (router?.query['q'] as string) ?? '';
  const currentPage: number = parseInt(router?.query['p'] as string) || 1;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            {IsSearchEnabled() ? (
              <SearchResults rfkId="rfkid_7" initialKeyphrase={query} currentPage={currentPage} />
            ) : (
              <Alert status="warning">
                <AlertIcon />
                <Stack direction="column">
                  <AlertTitle>Search is not enabled on this environment</AlertTitle>
                  <AlertDescription>
                    To enable search please update the following environment variables in the <Code>.env</Code> file:
                    <Stack direction="column" mt={4}>
                      <Code>
                        <Text>NEXT_PUBLIC_SEARCH_API_KEY</Text>
                        <Text>NEXT_PUBLIC_SEARCH_APP_ENV</Text>
                        <Text>NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY</Text>
                        <Text>NEXT_PUBLIC_SEARCH_APP_API_KEY</Text>
                        <Text>NEXT_PUBLIC_SEARCH_ENABLE_PREVIEW_SEARCH</Text>
                        <Text>NEXT_PUBLIC_CHANGELOG_SEARCH_SOURCE</Text>
                      </Code>
                    </Stack>
                  </AlertDescription>
                </Stack>
              </Alert>
            )}
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
