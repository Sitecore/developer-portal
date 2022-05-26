// Global
import { NextPage } from 'next';
import { useEffect } from 'react';
import { loadSearchActions, loadSearchAnalyticsActions } from '@coveo/headless';
// Interfaces
import { PageInfo } from '@/interfaces/page-info';
// Scripts
import { getPageInfo } from '@/scripts/page-info';
// Lib
import { coveoEngine } from '@/lib/search/coveo-engine';
// Components
import Container from '@/components/helper/Container';
import Layout from '@/components/layout/Layout';
import SearchResultList from '@/components/search/SearchResultList';
import SearchFacet from '@/components/search/SearchFacet';

interface SearchPageProps {
  pageInfo: PageInfo;
}

export const getStaticProps = async () => {
  const pageInfo = await getPageInfo('search');

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
  };
};

const SearchPage: NextPage<SearchPageProps> = ({ pageInfo }) => {
  useEffect(() => {
    const { logInterfaceLoad } = loadSearchAnalyticsActions(coveoEngine);
    const { executeSearch } = loadSearchActions(coveoEngine);

    coveoEngine.dispatch(executeSearch(logInterfaceLoad()));
  }, []);

  return (
    <Layout pageInfo={pageInfo}>
      <Container>
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <SearchFacet title="Source" field="source" />
          </div>
          <div className="md:col-span-3">
            <SearchResultList />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default SearchPage;
