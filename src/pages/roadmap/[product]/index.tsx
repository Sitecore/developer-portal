import { TrackPageView } from "@/src/components/integrations/engage/TrackPageView";
import { RoadmapPhase } from "@/src/components/roadmap/roadmapPhase";
import { Button } from "@/src/components/ui/button";
import { Icon } from "@/src/components/ui/icon";
import { CenteredContent } from "@/src/components/ui/sections/CenteredContent";
import { Hero } from "@/src/components/ui/sections/Hero";
import { VerticalGroup } from "@/src/components/ui/sections/VerticalGroup";
import Layout from "@/src/layouts/Layout";
import { authOptions } from "@/src/lib/auth/options";
import type { PageInfo } from "@/src/lib/interfaces/page-info";
import { getPageInfo } from "@/src/lib/page-info";
import { getQueryArray, slugify } from "@/src/lib/util";
import { mdiChevronLeft } from "@mdi/js";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import { getRoadmap, Phase } from "@src/lib/jira";
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import useSWR from "swr";

interface SearchPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: (typeof Option)[];
  currentProduct: typeof Option;
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
    (p) => slugify(p.label) == slugify(product[0]),
  );

  if (currentProduct === undefined) {
    return {
      notFound: true,
    };
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
  products,
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
            <Alert variant="primary">
              <AlertDescription>
                The product roadmap is for informational purposes only and
                subject to change at Sitecore&apos;s sole discretion. Timelines
                and features are not commitments, and the roadmap may be amended
                or discontinued without notice. Customers should not rely on it
                for purchasing or planning decisions.
              </AlertDescription>
            </Alert>

            <Alert variant="primary">
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

            <Link href="/roadmap" passHref>
              <Button variant={"ghost"}>
                <Icon path={mdiChevronLeft} className="mr-2" />
                Go back to the roadmap overview
              </Button>
              <span className="sr-only">Go back to the roadmap overview</span>
            </Link>

            <div className="grid w-full grid-cols-1 gap-[5px] md:grid-cols-2 lg:grid-cols-4">
              <RoadmapPhase
                roadmap={data}
                title="Done"
                color="neutral-bg"
                phase={Phase.DONE}
                isLoading={isLoading}
              />
              <RoadmapPhase
                roadmap={data}
                title="Now (this quarter)"
                color="success-bg"
                phase={Phase.NOW}
                isLoading={isLoading}
              />
              <RoadmapPhase
                roadmap={data}
                title="Next (next two quarters)"
                color="warning-bg"
                phase={Phase.NEXT}
                isLoading={isLoading}
              />
              <RoadmapPhase
                roadmap={data}
                title="Future (9+ months)"
                color="neutral-bg-active"
                phase={Phase.FUTURE}
                isLoading={isLoading}
              />
            </div>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
