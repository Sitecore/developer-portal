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
import SearchTab from '@/components/search/SearchTab';
import SearchPagination from '@/components/search/SearchPagination';
import VerticalGroup from '@/components/helper/VerticalGroup';

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
      <VerticalGroup>
        <div className="border-b border-theme-border mb-4">
          <Container>
            <div className="md:flex justify-between">
              <SearchTab id="All" expression="language==English" title="All Content" />
              <SearchTab
                id="Documentation"
                expression="source'sitecore documentation'"
                title="Documentation"
              />
              <SearchTab
                id="KnowledgeBase"
                expression="source='KnowledgeBase'"
                title="Knowledge Base"
              />
              <SearchTab
                id="StackExchange"
                expression="source='StackExchange'"
                title="Stack Exchange"
              />
            </div>
          </Container>
        </div>

        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <SearchFacet title="Version" field="sitecoreversion" />
              <SearchFacet title="Product" field="product" />
              <SearchFacet title="Site" field="source" />
              <SearchFacet title="Year" field="year" />
              <SearchFacet title="File Type" field="fileType" />
              <SearchFacet title="Language" field="language" />
            </div>
            <div className="md:col-span-2">
              <SearchResultList />
              <SearchPagination />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default SearchPage;
