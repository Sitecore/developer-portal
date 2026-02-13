import { Alert, AlertDescription, AlertIcon, AlertTitle, Text, Wrap } from '@chakra-ui/react';
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

            <Alert>
                <AlertIcon />
                <Wrap w="full" direction={'column'}>
                    <AlertTitle>Roadmap Update</AlertTitle>
                    <AlertDescription>
                      <Text mb={2}>We’re refreshing how we present our product roadmap on this site to ensure consistency across all public materials.</Text>
                      <Text>We’ll continue to share forward-looking information through an updated roadmap on this site at a later stage</Text> 
                    </AlertDescription>
                </Wrap>
            </Alert>

          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Roadmap;
