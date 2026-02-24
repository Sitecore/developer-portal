import { RestrictedContent } from '@src/components/authentication/RestrictedContent';
import { TrackPageView } from '@src/components/integrations/engage/TrackPageView';
import { Alert, AlertDescription, AlertTitle } from '@src/components/ui/alert';
import type { Option } from '@src/components/ui/dropdown';
import { CenteredContent, Hero, VerticalGroup } from '@src/components/ui/sections';
import Layout from '@src/layouts/Layout';
import type { RoadmapInformation } from '@src/lib/interfaces/jira';
import type { PageInfo } from '@src/lib/interfaces/page-info';
import { getRoadmap } from '@src/lib/jira';
import { getPageInfo } from '@src/lib/page-info';
import type { NextPage } from 'next';

interface RoadmapPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_roadmap');

  return { props: { pageInfo } };
}

const Roadmap: NextPage<RoadmapPageProps> = ({ pageInfo}) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup className="min-h-[calc(100vh-430px)]">
          <CenteredContent>

              <Alert variant="default" className="my-4">
                <AlertTitle>Roadmap Update</AlertTitle>
                <AlertDescription>
                      <p>We are refreshing how we present our product roadmap on this site to ensure consistency across all public materials. We will continue to share forward-looking information through an updated roadmap on this site at a later stage.</p>
                </AlertDescription>
              </Alert>

          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Roadmap;
