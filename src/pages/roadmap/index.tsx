import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList, Wrap } from '@chakra-ui/react';
import { TrackPageView } from '@components/integrations/engage/TrackPageView';
import { CenteredContent, Hero, VerticalGroup } from '@components/ui/sections';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';

import { LinkItem } from '@/src/components';
import { HideForUsers } from '@/src/components/authentication/HideForUsers';
import { RestrictedContent } from '@/src/components/authentication/RestrictedContent';
import { LinkButton } from '@/src/components/links';
import Layout from '@/src/layouts/Layout';
import { getRoadmap } from '@/src/lib/jira';
import { slugify } from '@/src/lib/utils';
import { RoadmapInformation } from '@lib/interfaces/jira';

interface RoadmapPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_roadmap');
  const roadmap = await getRoadmap();

  return {
    props: {
      pageInfo,
      products: roadmap.products,
    },
  };
}

const Roadmap: NextPage<RoadmapPageProps> = ({ pageInfo, products }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup minH={'calc(100vh - 430px)'}>
          <CenteredContent>
            <HideForUsers>
              <Alert status="info" alignItems="center">
                <AlertIcon />
                <AlertDescription>To access the detailed roadmaps, please log in using your cloud portal credentials.</AlertDescription>
                <LinkButton variant="link" href={'/api/auth/login?returnTo=/roadmap'} text={'Login'} showIcon={false} />
              </Alert>
            </HideForUsers>

            <Flex>
              <Wrap flex="1">
                <Heading size={'md'} as="h2">
                  Roadmap overview
                </Heading>

                <Text my="4">This section provides a comprehensive view of the development progress for each of our products, structured into four distinct phases:</Text>

                <UnorderedList ml={5}>
                  <ListItem>Done - presenting completed features and updates</ListItem>
                  <ListItem>Now - outlining current initiatives which we expect to ship this quarter</ListItem>
                  <ListItem>Next - detailing plans for the upcoming two quarters</ListItem>
                  <ListItem>Future - offering a glimpse into long-term developments beyond nine months.</ListItem>
                </UnorderedList>
              </Wrap>
              <Image src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/3de0d9d0071446fa95353cfd41748fa9?t=sc700x700" alt="Roadmap" width={300} height={300} />
            </Flex>

            <RestrictedContent>
              <Alert status="info" alignItems="center">
                <AlertIcon />
                <Wrap>
                  <AlertDescription>
                    The product roadmap is for informational purposes only and subject to change at Sitecore’s sole discretion. Timelines and features are not commitments, and the roadmap may be amended or discontinued without notice. Customers
                    should not rely on it for purchasing or planning decisions.
                  </AlertDescription>
                </Wrap>
              </Alert>
              <Heading size={'sm'}>Available roadmaps</Heading>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {products.map((product) => (
                  <LinkItem link={`/roadmap/${slugify(product.label)}`} key={product.value} title={product.label} />
                ))}
              </SimpleGrid>

              <Alert status="info" colorScheme="neutral" alignItems="center">
                <AlertIcon />
                <Wrap>
                  <AlertTitle>Confidentiality Disclaimer:</AlertTitle>
                  <AlertDescription>
                    This product roadmap contains highly confidential information and is intended solely for the recipient. By accessing this information, you acknowledge that it is subject to the confidentiality obligations set forth in your
                    existing agreements with Sitecore. Any unauthorized disclosure, distribution, or use of this information is strictly prohibited.
                  </AlertDescription>
                </Wrap>
              </Alert>
            </RestrictedContent>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Roadmap;
