// Global
import { buildUrlManager, loadSearchActions, loadSearchAnalyticsActions } from '@coveo/headless';
import { NextPage } from 'next';
import { useEffect } from 'react';
// Interfaces
import { PageInfo } from '@/src/interfaces/page-info';
// Scripts
import { getPageInfo } from '@/src/common/page-info';
// Lib
import {
  coveoEngine,
  fileTypeFacet,
  languageFacet,
  productFacet,
  sourceFacet,
  urlManager,
  versionFacet,
  yearFacet,
} from '@/src/common/search/coveo-engine';
// Components
import FacetBreadcrumbs from '@/src/components/integrations/search/facetBreadcrumbs';
import SearchFacet, { FacetValueSort } from '@/src/components/integrations/search/SearchFacet';
import SearchPagination from '@/src/components/integrations/search/SearchPagination';
import SearchResultList from '@/src/components/integrations/search/SearchResultList';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';
import Hero from '../components/heros/Hero';

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
const windowExists = () => typeof window !== 'undefined';

if (windowExists()) {
  urlManager.synchronize(window.location.hash.slice(1));
}

// eslint-disable-next-line react/prop-types
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
    <Layout
      title={pageInfo.title}
      description={pageInfo.description}
      openGraphImage={pageInfo.openGraphImage}
    >
      <Hero
        title={pageInfo.title}
        description={pageInfo.description}
        image={pageInfo.heroImage}
        productLogo={pageInfo.productLogo}
      />

      <VerticalGroup>
        <Container>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <SearchFacet title="Version" facet={versionFacet} />
              <SearchFacet title="Product" facet={productFacet} />
              <SearchFacet title="Site" facet={sourceFacet} />
              <SearchFacet title="Year" facet={yearFacet} sort={FacetValueSort.Descending} />
              <SearchFacet title="File Type" facet={fileTypeFacet} />
              <SearchFacet title="Language" facet={languageFacet} />
            </div>
            <div className="md:col-span-2">
              <FacetBreadcrumbs />
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
