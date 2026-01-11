import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { RoadmapPhase } from "@src/components/roadmap/roadmapPhase";
import { Alert, AlertDescription } from "@src/components/ui/alert";
import type { Option } from "@src/components/ui/dropdown";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@src/components/ui/sections";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";
import Layout from "@src/layouts/Layout";
import { authOptions } from "@src/lib/auth/options";
import { buildProductQuerystring } from "@src/lib/changelog/common/querystring";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getRoadmap, Phase } from "@src/lib/jira";
import { getPageInfo } from "@src/lib/page-info";
import { Info } from "lucide-react";
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { useState } from "react";
import Select, { type MultiValue } from "react-select";
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
      fallback: roadmap,
      pageInfo,
      products: roadmap.products,
    },
  };
};

const Search: NextPage<SearchPageProps> = ({
  pageInfo,
  fallback: _fallback,
  products,
}) => {
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
            <Alert variant="default" className="mb-4">
              <Info className="h-4 w-4" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <AlertDescription>
                      Please be advised that all roadmap information displayed
                      on this page is subject to change. The details provided
                      are for general informational purposes only and may be
                      updated or modified without prior notice. No guarantees
                      are made regarding the accuracy, completeness, or
                      reliability of the information presented.
                    </AlertDescription>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to the overview of current release notes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Alert>

            <Select
              instanceId="productSelector"
              isMulti
              closeMenuOnSelect={false}
              options={products}
              onChange={handleChange}
              placeholder="Filter by product(s)"
              className="react-select-container"
              classNamePrefix="react-select"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px]">
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
                title="Next (next two quarter)"
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
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default Search;
