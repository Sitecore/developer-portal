import { Option } from '@/src/components/ui/dropdown';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { MultiValue, Select } from 'chakra-react-select';
import { NextPage } from 'next';
import { useState } from 'react';
import { TrackPageView } from '../components/integrations/engage/TrackPageView';
import RoadmapPhase from '../components/roadmap/roadmapPhase';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';
import Layout from '../layouts/Layout';
import { RoadmapInformation } from '../lib/interfaces/jira';
import { getRoadmap, Phase } from '../lib/jira';

interface SearchPageProps {
  pageInfo: PageInfo;
  roadmap: RoadmapInformation;
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_roadmap');
  const roadmap = await getRoadmap();

  return {
    props: {
      pageInfo,
      roadmap,
    },
  };
}

const Search: NextPage<SearchPageProps> = ({ pageInfo, roadmap }) => {
  const [selectedChange, setSelectedChange] = useState<MultiValue<Option>>([]);
  const handleChange = (newValue: MultiValue<Option>) => {
    setSelectedChange(newValue);
  };

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

            <Select isMulti closeMenuOnSelect={false} selectedOptionStyle="check" options={roadmap.products} onChange={handleChange} colorScheme="primary" selectedOptionColorScheme="primary" placeholder="Filter by product(s)" />

            <SimpleGrid minChildWidth="120px" spacing="5px">
              <RoadmapPhase issues={roadmap.items} title="Done" color="neutral-bg" phase={Phase.DONE} productId={selectedChange.map((option) => option)} />
              <RoadmapPhase issues={roadmap.items} title="Now (this quarter)" color="success-bg" phase={Phase.NOW} productId={selectedChange.map((option) => option)} />
              <RoadmapPhase issues={roadmap.items} title="Next (next quarter)" color="warning-bg" phase={Phase.NEXT} productId={selectedChange.map((option) => option)} />
              <RoadmapPhase issues={roadmap.items} title="Future (9+ months)" color="neutral-bg-active" phase={Phase.FUTURE} productId={selectedChange.map((option) => option)} />
            </SimpleGrid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
