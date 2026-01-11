import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { RoadmapPhase } from "@src/components/roadmap/roadmapPhase";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { Button } from "@src/components/ui/button";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getRoadmap, Phase } from "@src/lib/jira";
import { getPageInfo } from "@src/lib/page-info";
import { ChevronLeft, Info } from "lucide-react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import useSWR from "swr";
import type { Option } from "@/src/components/ui/dropdown";
import { authOptions } from "@/src/lib/auth/options";
import { getQueryArray } from "@/src/lib/util/requests";
import { slugify } from "@/src/lib/util/stringUtil";

interface SearchPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
  currentProduct: Option;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session?.user?.orgId) {
    return {
      redirect: {
        destination: `/login?redirect=${encodeURIComponent(context.resolvedUrl)}`,
        permanent: false,
      },
    };
  }

  const product = getQueryArray(context?.params?.product);
  const pageInfo = await getPageInfo("_roadmap");
  const roadmap = await getRoadmap();

  const products = roadmap.products;
  const currentProduct: Option | undefined = products.find(
    (p) => slugify(p.label) === slugify(product[0]),
  );

  if (currentProduct === undefined) {
    return { notFound: true };
  }
  return {
    props: {
      currentProduct: currentProduct,
      pageInfo,
      products: roadmap.products,
    },
  };
};

const Search: NextPage<SearchPageProps> = ({
  pageInfo,
  currentProduct,
  products: _products,
}) => {
  const url: string = `../api/roadmap?product=${currentProduct.value}`;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  const pageTitle = `${currentProduct.label} Roadmap`;
  const description = `${pageInfo.description} for ${currentProduct.label}`;

  if (error) return "An error has occurred.";

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout
        title={pageTitle}
        description={description}
        openGraphImage={pageInfo.openGraphImage}
      >
        <Hero
          title={pageTitle}
          description={description}
          image={pageInfo.heroImage}
          productLogo={pageInfo.productLogo}
        />

        <VerticalGroup>
          <CenteredContent>
            <Alert variant="default" className="mb-4">
              <Info className="h-4 w-4" />
              <AlertDescription>
                The product roadmap is for informational purposes only and
                subject to change at Sitecore&apos;s sole discretion. Timelines
                and features are not commitments, and the roadmap may be amended
                or discontinued without notice. Customers should not rely on it
                for purchasing or planning decisions.
              </AlertDescription>
            </Alert>

            <Alert variant="default" className="mb-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Confidentiality Disclaimer:</AlertTitle>
              <AlertDescription>
                This product roadmap contains highly confidential information
                and is intended solely for the recipient. By accessing this
                information, you acknowledge that it is subject to the
                confidentiality obligations set forth in your existing
                agreements with Sitecore. Any unauthorized disclosure,
                distribution, or use of this information is strictly prohibited.
              </AlertDescription>
            </Alert>

            <div className="flex flex-col gap-4 w-full">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/roadmap">
                  <ChevronLeft className="mr-2 h-6 w-6" />
                  Go back to the roadmap overview
                </Link>
              </Button>
              <span className="sr-only">Go back to the roadmap overview</span>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px] w-full">
                <RoadmapPhase
                  roadmap={data}
                  title="Done"
                  color="var(--muted)"
                  phase={Phase.DONE}
                  isLoading={isLoading}
                />
                <RoadmapPhase
                  roadmap={data}
                  title="Now (this quarter)"
                  color="hsl(142.1 76.2% 36.3%)"
                  phase={Phase.NOW}
                  isLoading={isLoading}
                />
                <RoadmapPhase
                  roadmap={data}
                  title="Next (next two quarters)"
                  color="hsl(38 92% 50%)"
                  phase={Phase.NEXT}
                  isLoading={isLoading}
                />
                <RoadmapPhase
                  roadmap={data}
                  title="Future (9+ months)"
                  color="hsl(var(--muted))"
                  phase={Phase.FUTURE}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
