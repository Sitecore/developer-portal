import { LinkItem } from '@/src/components';
import { HideForUsers } from '@/src/components/authentication/HideForUsers';
import { RestrictedContent } from '@/src/components/authentication/RestrictedContent';
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import type { Option } from '@/src/components/ui/dropdown';
import Layout from '@/src/layouts/Layout';
import { getRoadmap } from '@/src/lib/jira';
import { slugify } from '@/src/lib/util';
import { TrackPageView } from '@src/components/integrations/engage/TrackPageView';
import { CenteredContent, Hero, VerticalGroup } from '@src/components/ui/sections';
import type { RoadmapInformation } from '@src/lib/interfaces/jira';
import type { PageInfo } from '@src/lib/interfaces/page-info';
import { getPageInfo } from '@src/lib/page-info';
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

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
        <Hero title={pageInfo.title} description={pageInfo.description} subTitle="Product Roadmap" image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />
        <HideForUsers>
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
        </HideForUsers>
        <VerticalGroup className="bg-white dark:bg-background py-6">
          <CenteredContent>
            <div className="flex flex-col gap-16 md:flex-row">
              <div className="flex-col gap-8 md:flex-col">
                <h2 className="lg:text-4xl font-semibold mb-8 font-sans">Four phases, one route</h2>

                <p className="lg:text-lg text-muted-foreground my-8">This section provides a comprehensive view of the development progress for each of our products, structured into four distinct phases</p>
                <div className="max-w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="flex-1 gap-8 bg-neutral-bg rounded-2xl p-8 items-center">
                    <CardContent className="p-0!">
                      <CardTitle className="text-xl font-sans">Done</CardTitle>
                      <CardDescription className="text-md">Presenting completed features and updates</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 gap-8 bg-success-bg rounded-2xl p-8 items-center">
                    <CardContent className="p-0!">
                      <CardTitle className="text-xl font-sans">Now</CardTitle>
                      <CardDescription className="text-md">Outlining current initiatives which we expect to ship this quarter</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 gap-8 bg-warning-bg rounded-2xl p-8 items-center">
                    <CardContent className="p-0!">
                      <CardTitle className="text-xl font-sans">Next</CardTitle>
                      <CardDescription className="text-md">Detailing plans for the upcoming two quarters</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="flex-1 gap-8 bg-neutral-bg-active rounded-2xl p-8 items-center">
                    <CardContent className="p-0!">
                      <CardTitle className="text-xl font-sans">Future</CardTitle>
                      <CardDescription className="text-md">Offering a glimpse into long-term developments beyond nine months.</CardDescription>
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

              <Card style="filled">
                <CardHeader>
                  <CardTitle>Available Roadmaps</CardTitle>
                  <CardDescription>Pick a product area to see its detailed, phase-by-phase plan.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                      <LinkItem link={`/roadmap/${slugify(product.label)}`} key={product.value} title={product.label} />
                    ))}
                  </div>
                </CardContent>
              </Card>

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
