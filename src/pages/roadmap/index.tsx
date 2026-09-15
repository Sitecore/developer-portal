import { LinkItem } from '@/src/components';
import { HideForUsers } from '@/src/components/authentication/HideForUsers';
import { RestrictedContent } from '@/src/components/authentication/RestrictedContent';
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import type { Option } from '@/src/components/ui/dropdown';
import { TimelineConnector, TimelineContent, TimelineDescription, TimelineIndicator, TimelineItem, TimelineRoot, TimelineSeparator, TimelineTitle } from '@/src/components/ui/timeline';
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
          <VerticalGroup>
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
                <h2 className="text-4xl font-semibold mb-8 font-sans">Four phases, one route</h2>

                <p className="text-lg text-muted-foreground my-8">This section provides a comprehensive view of the development progress for each of our products, structured into four distinct phases</p>
                <TimelineRoot className="max-w-full gap-0 flex-row" size="lg">
                  <TimelineItem className="flex-1 flex-col gap-4">
                    <TimelineSeparator className="flex-row">
                      <TimelineIndicator className="h-10 w-10">01</TimelineIndicator>
                      <TimelineConnector className="w-full max-h-0.25 min-h-0.25" />
                    </TimelineSeparator>
                    <TimelineContent className="pr-4">
                      <TimelineTitle className="text-xl font-sans">Done</TimelineTitle>
                      <TimelineDescription className="text-lg">Presenting completed features and updates</TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="flex-1 flex-col gap-4">
                    <TimelineSeparator className="flex-row">
                      <TimelineIndicator className="h-10 w-10">02</TimelineIndicator>
                      <TimelineConnector className="w-full max-h-0.25 min-h-0.25" />
                    </TimelineSeparator>
                    <TimelineContent className="pr-4">
                      <TimelineTitle className="text-xl font-sans">Now</TimelineTitle>
                      <TimelineDescription className="text-lg">Outlining current initiatives which we expect to ship this quarter</TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="flex-1 flex-col gap-4">
                    <TimelineSeparator className="flex-row">
                      <TimelineIndicator className="h-10 w-10">03</TimelineIndicator>
                      <TimelineConnector className="w-full max-h-0.25 min-h-0.25" />
                    </TimelineSeparator>
                    <TimelineContent className="pr-4">
                      <TimelineTitle className="text-xl font-sans">Next</TimelineTitle>
                      <TimelineDescription className="text-lg">Detailing plans for the upcoming two quarters</TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem className="flex-1 flex-col gap-4">
                    <TimelineSeparator className="flex-row">
                      <TimelineIndicator className="h-10 w-10">04</TimelineIndicator>
                      <TimelineConnector className="w-full max-h-0.25 min-h-0.25" />
                    </TimelineSeparator>
                    <TimelineContent className="pr-4">
                      <TimelineTitle className="text-xl font-sans">Future</TimelineTitle>
                      <TimelineDescription className="text-lg">Offering a glimpse into long-term developments beyond nine months.</TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                </TimelineRoot>
              </div>
            </div>
            <RestrictedContent>
              <Alert variant="warning">
                <AlertDescription>
                  The product roadmap is for informational purposes only and subject to change at Sitecore’s sole discretion. Timelines and features are not commitments, and the roadmap may be amended or discontinued without notice. Customers should
                  not rely on it for purchasing or planning decisions.
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
