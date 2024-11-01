import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertIcon, Button, CloseButton, Link, SimpleGrid, Tooltip, VisuallyHidden } from '@chakra-ui/react';
import { TrackPageView } from '@components/integrations/engage/TrackPageView';
import { RoadmapPhase } from '@components/roadmap/roadmapPhase';
import { CenteredContent, Hero, VerticalGroup } from '@components/ui/sections';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';
import useSWR from 'swr';

import Layout from '@/src/layouts/Layout';
import { pageRouterAuth } from '@/src/lib/auth0';
import { slugify } from '@/src/lib/utils';
import { RoadmapInformation } from '@lib/interfaces/jira';
import { getRoadmap, Phase } from '@lib/jira';
import NextLink from 'next/link';

interface SearchPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
  currentProduct: Option;
}

export const getServerSideProps = pageRouterAuth.withPageAuthRequired({
  async getServerSideProps(context) {
    const product = context?.params?.product;
    const pageInfo = await getPageInfo('_roadmap');
    const roadmap = await getRoadmap();

    const products = roadmap.products;
    const currentProduct: Option | undefined = products.find((p) => slugify(p.label) == product);

    if (currentProduct === undefined) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        currentProduct: currentProduct,
        pageInfo,
        products: roadmap.products,
      },
    };
  },
});


const Search: NextPage<SearchPageProps> = ({ pageInfo, currentProduct, products }) => {
  const url: string = `../api/roadmap?product=${currentProduct.value}`;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  const pageTitle = `${currentProduct.label} Roadmap`;
  const description = `${pageInfo.description} for ${currentProduct.label}`;

  if (error) return 'An error has occurred.';

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageTitle} description={description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageTitle} description={description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <Alert status="info" alignItems="center">
              <AlertIcon />
              <Tooltip label="Go to the overview of current release notes" aria-label="A tooltip">
                Please be advised that all roadmap information displayed on this page is subject to change. The details provided are for general informational purposes only and may be updated or modified without prior notice. No guarantees are made
                regarding the accuracy, completeness, or reliability of the information presented.
              </Tooltip>
            </Alert>

            <Link as={NextLink} href="/roadmap" passHref>
              <Button rightIcon={<CloseButton as={'div'} color={'white'} />} variant="solid" borderRadius={'sm'} mb={4}>
                Product: {currentProduct.label}
              </Button>
              <VisuallyHidden>Go back to the changelog overview</VisuallyHidden>
            </Link>

            <SimpleGrid minChildWidth="120px" spacing="5px">
              <RoadmapPhase roadmap={data} title="Done" color="neutral-bg" phase={Phase.DONE} isLoading={isLoading} />
              <RoadmapPhase roadmap={data} title="Now (this quarter)" color="success-bg" phase={Phase.NOW} isLoading={isLoading} />
              <RoadmapPhase roadmap={data} title="Next (next two quarter)" color="warning-bg" phase={Phase.NEXT} isLoading={isLoading} />
              <RoadmapPhase roadmap={data} title="Future (9+ months)" color="neutral-bg-active" phase={Phase.FUTURE} isLoading={isLoading} />
            </SimpleGrid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
