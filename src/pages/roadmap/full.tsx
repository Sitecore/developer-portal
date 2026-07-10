import { Alert, AlertDescription } from "@/src/components/ui/alert";
import { MultiSelect, type Option } from "@/src/components/ui/dropdown";
import Layout from "@/src/layouts/Layout";
import { authOptions } from "@/src/lib/auth/options";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { RoadmapPhase } from "@src/components/roadmap/roadmapPhase";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@src/components/ui/sections";
import { buildProductQuerystring } from "@src/lib/changelog/common/querystring";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getRoadmap, Phase } from "@src/lib/jira";
import { getPageInfo } from "@src/lib/page-info";
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { useState } from "react";
import type { MultiValue } from "react-select";
import useSWR from "swr";

interface SearchPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
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

  const pageInfo = await getPageInfo("_roadmap");
  const roadmap = await getRoadmap();

  return {
    props: {
      pageInfo,
      products: roadmap.products,
    },
  };
};

const Search: NextPage<SearchPageProps> = ({ pageInfo, products }) => {
  const [selectedChange, setSelectedChange] = useState<MultiValue<Option>>([]);
  const handleChange = (newValue: MultiValue<Option>) => {
    setSelectedChange(newValue);
  };

  const qs = buildProductQuerystring(
    undefined,
    selectedChange.map((option) => option),
  );

  const url: string = `../api/roadmap?${qs}`;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return "An error has occurred.";

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout
        title={pageInfo.title}
        description={pageInfo.description}
        openGraphImage={pageInfo.openGraphImage}
      >
        <Hero
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.heroImage}
          productLogo={pageInfo.productLogo}
        />

        <VerticalGroup>
          <CenteredContent>
            <Alert>
              <AlertDescription>
                Please be advised that all roadmap information displayed on this
                page is subject to change. The details provided are for general
                informational purposes only and may be updated or modified
                without prior notice. No guarantees are made regarding the
                accuracy, completeness, or reliability of the information
                presented.
              </AlertDescription>
            </Alert>

            <MultiSelect
              instanceId="productSelector"
              isMulti
              closeMenuOnSelect={false}
              selectedOptionStyle="check"
              options={products}
              onChange={handleChange}
              colorScheme="primary"
              selectedOptionColorScheme="primary"
              placeholder="Filter by product(s)"
            />

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
                title="Next (next two quarter)"
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
