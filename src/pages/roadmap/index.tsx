import { across, operations, outcomes, presence, studio, xmxp } from '@/data/data-roadmap';
import { RestrictedContent } from '@/src/components/authentication/RestrictedContent';
import { RoadmapCategory } from '@/src/components/roadmap/roadmapCategory';
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert';
import { Card, CardContent, CardDescription, CardTitle } from '@/src/components/ui/card';
import type { Option } from '@/src/components/ui/dropdown';
import Layout from '@/src/layouts/Layout';
import { TrackPageView } from '@src/components/integrations/engage/TrackPageView';
import { CenteredContent, Hero, VerticalGroup } from '@src/components/ui/sections';
import type { RoadmapInformation } from '@src/lib/interfaces/jira';
import type { PageInfo } from '@src/lib/interfaces/page-info';
import { getPageInfo } from '@src/lib/page-info';
import type { NextPage } from 'next';

interface RoadmapPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
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
        <Hero title={pageInfo.title} description={pageInfo.description} subTitle="Product Roadmap" image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />
        {/* <HideForUsers>
          <VerticalGroup className="bg-white dark:bg-background py-6">
            <CenteredContent>
              <Alert>
                <AlertDescription>To access the detailed roadmaps, please log in using your cloud portal credentials.</AlertDescription>
                <Button variant="link" onClick={() => signIn('sitecore')}>
                  Login
                </Button>
              </Alert>
            </CenteredContent>
          </VerticalGroup>
        </HideForUsers> */}
        <VerticalGroup className="bg-white dark:bg-background py-6 px-8 lg:px-0">
          <CenteredContent>
            <div className="flex flex-col gap-16 md:flex-row">
              <div className="flex-col gap-8 md:flex-col">
                <h2 className="lg:text-4xl font-semibold mb-8 font-sans">Sitecore Product Roadmap</h2>

                <p className="lg:text-lg text-muted-foreground my-8">An overview of what we're building across the portfolio. Select a product to see its detailed roadmap: what's done, what's committed now, what's next, and what we're exploring.</p>
                <div className="max-w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="flex-1 gap-8 bg-neutral-bg rounded-2xl p-8 items-center">
                    <CardContent className="p-0! w-full">
                      <CardTitle className="text-xl font-sans">Done</CardTitle>
                      <CardDescription className="text-md">Presenting completed features and updates available today.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 gap-8 bg-success-bg rounded-2xl p-8 items-center">
                    <CardContent className="p-0! w-full">
                      <CardTitle className="text-xl font-sans">Now</CardTitle>
                      <CardDescription className="text-md">Outlining initiatives committed for release this quarter.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 gap-8 bg-warning-bg rounded-2xl p-8 items-center">
                    <CardContent className="p-0! w-full">
                      <CardTitle className="text-xl font-sans">Next</CardTitle>
                      <CardDescription className="text-md">Direction we're headed; not yet committed.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 gap-8 bg-neutral-bg-active rounded-2xl p-8 items-center">
                    <CardContent className="p-0! w-full">
                      <CardTitle className="text-xl font-sans">Future</CardTitle>
                      <CardDescription className="text-md">Ideas we're exploring; timeline to be determined.</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <RestrictedContent>
              <Alert variant="warning">
                <AlertDescription>
                  The product roadmap is for informational purposes only and subject to change at Sitecore’s sole discretion. Cards and features are not commitments, and the roadmap may be amended or discontinued without notice. Customers should not
                  rely on it for purchasing or planning decisions.
                </AlertDescription>
              </Alert>

              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2">Available Roadmaps</h3>
                <span className="text-md text-muted-foreground">Select a product area to see its detailed roadmap: what's done, what's committed now, what's next, and what we're exploring.</span>

                <div className="my-8">
                  <h4 className="text-muted-foreground uppercase text-lg font-semibold tracking-wide">SitecoreAI Platform</h4>
                  <span className="text-lg text-muted-foreground font-sans">Our AI-powered platform for marketing, organized around how brands expand reach, run operations, and drive outcomes.</span>

                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    <RoadmapCategory category={presence} />
                    <RoadmapCategory category={operations} />
                    <RoadmapCategory category={outcomes} />
                  </div>

                  <div className="my-4">
                    <RoadmapCategory category={across} />
                  </div>

                  <h4 className="text-muted-foreground uppercase text-lg font-semibold tracking-wide">Sitecore Studio</h4>
                  <span className="text-lg text-muted-foreground font-sans">Extend and customize SitecoreAI for your unique brand and workflows. Your IP, your differentiation, on our platform.</span>

                  <div className="grid grid-cols-2 gap-4 my-4">
                    <RoadmapCategory category={studio} />
                  </div>

                  <h4 className="text-muted-foreground uppercase text-lg font-semibold tracking-wide my-4">Platform DXP</h4>

                  <RoadmapCategory category={xmxp} />
                </div>
              </div>

              <Alert>
                <AlertTitle>Confidentiality Disclaimer:</AlertTitle>
                <AlertDescription>
                  This product roadmap contains highly confidential information and is intended solely for the recipient. By accessing this information, you acknowledge that it is subject to the confidentiality obligations set forth in your existing
                  agreements with Sitecore. Any unauthorized disclosure, distribution, or use of this information is strictly prohibited.
                </AlertDescription>
              </Alert>
            </RestrictedContent>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Roadmap;
