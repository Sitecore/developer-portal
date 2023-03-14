// import { useSearchParams } from 'react-router-dom';
import { getPageInfo } from '@/src/common/page-info';
import SearchResults from '@/src/components/integrations/sitecore-search/SearchResults';
import { PageInfo } from '@/src/interfaces/page-info';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

interface SearchPageProps {
  pageInfo: PageInfo;
}

export const getServerSideProps = async () => {
  const pageInfo = await getPageInfo('search');

  return {
    props: {
      pageInfo,
    },
  };
};

// const Search = (): JSX.Element => {
const Search: NextPage<SearchPageProps> = ({ pageInfo }) => {
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get('q');
  const router = useRouter();
  const query = router?.query['q'] ?? '';
  console.log('Query:  ' + query);

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <VerticalGroup>
        <Container>
          <SearchResults rfkId="rfkid_7" initialKeyphrase={query} title={`Showing results for "${query}"`} />
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default Search;
