import { Alert, AlertDescription, AlertIcon, AlertTitle, Wrap } from '@chakra-ui/react';
import { TrackPageView } from '@components/integrations/engage/TrackPageView';
import { CenteredContent, Hero, VerticalGroup } from '@components/ui/sections';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { NextPage } from 'next';

import Layout from '@/src/layouts/Layout';
import { RoadmapInformation } from '@lib/interfaces/jira';

interface RoadmapPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_roadmap');
  

  return {
    props: {
      pageInfo,
    },
  };
}

const Roadmap: NextPage<RoadmapPageProps> = ({ pageInfo }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup minH={'calc(100vh - 430px)'}>
          <CenteredContent>
 

<Alert status="info" alignItems="top">
                <AlertIcon />
                <Wrap>
                  <AlertTitle>Roadmap Update:</AlertTitle>
                  <AlertDescription>
          We’re refreshing how we present our product roadmap on this site to ensure consistency across all public materials.
          As part of this update, the roadmap previously published on this site has been removed. We’ll share forward-looking information through updated roadmap materials and future product communications.                  </AlertDescription>
                </Wrap>
              </Alert>


          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Roadmap;
