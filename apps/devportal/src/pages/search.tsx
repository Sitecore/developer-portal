import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import SearchResults from '../components/sitecore-search/SearchResults';
import Layout from '../layouts/Layout';

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
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <VerticalGroup>
        <CenteredContent>
          <SearchResults rfkId="rfkid_7" initialKeyphrase={query} currentPage={currentPage} />
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default Search;
