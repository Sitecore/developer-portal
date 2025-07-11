import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Icon, Link, SimpleGrid, VisuallyHidden, Wrap } from '@chakra-ui/react';
import { TrackPageView } from '@components/integrations/engage/TrackPageView';
import { RoadmapPhase } from '@components/roadmap/roadmapPhase';
import { CenteredContent, Hero, VerticalGroup } from '@components/ui/sections';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';
import useSWR from 'swr';

import Layout from '@/src/layouts/Layout';
import { authOptions } from '@/src/lib/auth/options';
import { getQueryArray, slugify } from '@/src/lib/utils';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { RoadmapInformation } from '@lib/interfaces/jira';
import { getRoadmap, Phase } from '@lib/jira';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import NextLink from 'next/link';

interface SearchPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
  currentProduct: Option;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session?.user?.orgId) {
    return {
      redirect: {
        destination: '/login?redirect=' + encodeURIComponent(context.resolvedUrl),
        permanent: false,
      },
    };
  }

  const product = getQueryArray(context?.params?.product);
  const pageInfo = await getPageInfo('_roadmap');
  const roadmap = await getRoadmap();

  const products = roadmap.products;
  const currentProduct: Option | undefined = products.find((p) => slugify(p.label) == slugify(product[0]));

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
};

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
              <Wrap>
                <AlertDescription>
                  The product roadmap is for informational purposes only and subject to change at Sitecore&apos;s sole discretion. Timelines and features are not commitments, and the roadmap may be amended or discontinued without notice. Customers
                  should not rely on it for purchasing or planning decisions.
                </AlertDescription>
              </Wrap>
            </Alert>

            <Alert status="info" colorScheme="neutral" alignItems="center">
              <AlertIcon />
              <Wrap>
                <AlertTitle>Confidentiality Disclaimer:</AlertTitle>
                <AlertDescription>
                  This product roadmap contains highly confidential information and is intended solely for the recipient. By accessing this information, you acknowledge that it is subject to the confidentiality obligations set forth in your existing
                  agreements with Sitecore. Any unauthorized disclosure, distribution, or use of this information is strictly prohibited.
                </AlertDescription>
              </Wrap>
            </Alert>

            <Wrap>
              <Link as={NextLink} href="/roadmap" passHref>
                <Button leftIcon={<Icon as={ChevronLeftIcon} w={6} h={6} />} width={'100%'} variant={'ghost'}>
                  Go back to the roadmap overview
                </Button>
                <VisuallyHidden>Go back to the roadmap overview</VisuallyHidden>
              </Link>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="5px" width={'full'}>
                <RoadmapPhase roadmap={data} title="Done" color="neutral-bg" phase={Phase.DONE} isLoading={isLoading} />
                <RoadmapPhase roadmap={data} title="Now (this quarter)" color="success-bg" phase={Phase.NOW} isLoading={isLoading} />
                <RoadmapPhase roadmap={data} title="Next (next two quarters)" color="warning-bg" phase={Phase.NEXT} isLoading={isLoading} />
                <RoadmapPhase roadmap={data} title="Future (9+ months)" color="neutral-bg-active" phase={Phase.FUTURE} isLoading={isLoading} />
              </SimpleGrid>
            </Wrap>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
