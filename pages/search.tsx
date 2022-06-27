// Global
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { buildUrlManager, loadSearchActions, loadSearchAnalyticsActions } from '@coveo/headless';
// Interfaces
import { PageInfo } from '@/interfaces/page-info';
// Scripts
import { getPageInfo } from '@/scripts/page-info';
// Lib
import {
  coveoEngine,
  urlManager,
  versionFacet,
  productFacet,
  sourceFacet,
  yearFacet,
  fileTypeFacet,
  languageFacet,
} from '@/lib/search/coveo-engine';
// Components
import Container from '@/components/helper/Container';
import Layout from '@/components/layout/Layout';
import SearchResultList from '@/components/search/SearchResultList';
import SearchFacet from '@/components/search/SearchFacet';
import SearchTab from '@/components/search/SearchTab';
import SearchPagination from '@/components/search/SearchPagination';
import VerticalGroup from '@/components/helper/VerticalGroup';
import { language } from 'gray-matter';

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
const isSearchPage = (path: string) => path === '/search';
const windowExists = () => typeof window !== 'undefined';

if (windowExists()) {
  urlManager.synchronize(window.location.hash.slice(1));
}

const SearchPage: NextPage<SearchPageProps> = ({ pageInfo }) => {
  useEffect(() => {
    const { logInterfaceLoad } = loadSearchAnalyticsActions(coveoEngine);
    const { executeSearch } = loadSearchActions(coveoEngine);

    const fragment = window.location.hash.slice(1);

    const urlManager = buildUrlManager(coveoEngine, {
      initialState: { fragment },
    });

    urlManager.subscribe(() => {
      const hash = `#${urlManager.state.fragment}`;
      history.pushState(null, document.title, hash);
    });

    window.addEventListener('hashchange', () => {
      const fragment = window.location.hash.slice(1);
      urlManager.synchronize(fragment);
    });

    coveoEngine.dispatch(executeSearch(logInterfaceLoad()));
  }, []);

  return (
    <Layout pageInfo={pageInfo}>
      <VerticalGroup>
        <Container>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div>
              <SearchFacet title="Version" facet={versionFacet} />
              <SearchFacet title="Product" facet={productFacet} />
              <SearchFacet title="Site" facet={sourceFacet} />
              <SearchFacet title="Year" facet={yearFacet} />
              <SearchFacet title="File Type" facet={fileTypeFacet} />
              <SearchFacet title="Language" facet={languageFacet} />
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
