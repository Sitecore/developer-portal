import { SimpleGrid } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';
import { TrackPageView } from '../components/integrations/engage/TrackPageView';
import RoadmapPhase from '../components/roadmap/roadmapPhase';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';
import Layout from '../layouts/Layout';
import { getRoadmap } from '../lib/jira';

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
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <SimpleGrid minChildWidth="120px" spacing="5px">
              <RoadmapPhase issues={roadmap.done.issues} title="Done" color="neutral-bg" />
              <RoadmapPhase issues={roadmap.now.issues} title="Now" color="success-bg" />
              <RoadmapPhase issues={roadmap.next.issues} title="Next" color="warning-bg" />
              <RoadmapPhase issues={roadmap.future.issues} title="Future" color="neutral-bg-active" />
            </SimpleGrid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
