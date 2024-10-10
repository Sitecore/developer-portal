import { Option } from '@/src/components/ui/dropdown';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { MultiValue, Select } from 'chakra-react-select';
import { NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';
import { TrackPageView } from '../components/integrations/engage/TrackPageView';
import RoadmapPhase from '../components/roadmap/roadmapPhase';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';
import Layout from '../layouts/Layout';
import { buildProductQuerystring } from '../lib/changelog/common/querystring';
import { RoadmapInformation } from '../lib/interfaces/jira';
import { getRoadmap, Phase } from '../lib/jira';

interface SearchPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_roadmap');
  const roadmap = await getRoadmap();

  return {
    props: {
      fallback: roadmap,
      pageInfo,
      products: roadmap.products,
    },
  };
}

const Search: NextPage<SearchPageProps> = ({ pageInfo, fallback, products }) => {
  const [selectedChange, setSelectedChange] = useState<MultiValue<Option>>([]);
  const handleChange = (newValue: MultiValue<Option>) => {
    setSelectedChange(newValue);
  };

  const qs = buildProductQuerystring(
    undefined,
    selectedChange.map((option) => option)
  );

  const url: string = `/api/roadmap?${qs}`;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return 'An error has occurred.';

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <Text>
              Please be advised that all roadmap information displayed on this page is subject to change. The details provided are for general informational purposes only and may be updated or modified without prior notice. No guarantees are made
              regarding the accuracy, completeness, or reliability of the information presented.
            </Text>

            <Select instanceId="productSelector" isMulti closeMenuOnSelect={false} selectedOptionStyle="check" options={products} onChange={handleChange} colorScheme="primary" selectedOptionColorScheme="primary" placeholder="Filter by product(s)" />

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
