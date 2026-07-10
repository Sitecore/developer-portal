import { LinkItem } from "@/src/components";
import { HideForUsers } from "@/src/components/authentication/HideForUsers";
import { RestrictedContent } from "@/src/components/authentication/RestrictedContent";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { Button } from "@/src/components/ui/button";
import type { Option } from "@/src/components/ui/dropdown";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/src/components/ui/item";
import Layout from "@/src/layouts/Layout";
import { getRoadmap } from "@/src/lib/jira";
import { slugify } from "@/src/lib/util";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@src/components/ui/sections";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getPageInfo } from "@src/lib/page-info";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface RoadmapPageProps {
  pageInfo: PageInfo;
  fallback: RoadmapInformation;
  products: Option[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo("_roadmap");
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
            <HideForUsers>
              <Alert>
                <AlertDescription>
                  To access the detailed roadmaps, please log in using your
                  cloud portal credentials.
                </AlertDescription>
                <Button variant="link" onClick={() => signIn("sitecore")}>
                  Login
                </Button>
              </Alert>
            </HideForUsers>

            <div className="flex flex-col gap-16 md:flex-row">
              <div className="flex-col gap-8 md:flex-col">
                <h2 className="text-2xl font-medium mb-8">Roadmap overview</h2>

                <p className="text-base text-muted-foreground mb-4">
                  This section provides a comprehensive view of the development
                  progress for each of our products, structured into four
                  distinct phases:
                </p>
                <ItemGroup className="max-w-md gap-2">
                  <Item variant="muted" size="sm">
                    <ItemContent>
                      <ItemTitle>Done</ItemTitle>
                      <ItemDescription>
                        Presenting completed features and updates
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item variant="muted" size="sm">
                    <ItemContent>
                      <ItemTitle>Now</ItemTitle>
                      <ItemDescription>
                        Outlining current initiatives which we expect to ship
                        this quarter
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item variant="muted" size="sm">
                    <ItemContent>
                      <ItemTitle>Next</ItemTitle>
                      <ItemDescription>
                        Detailing plans for the upcoming two quarters
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item variant="muted" size="sm">
                    <ItemContent>
                      <ItemTitle>Future</ItemTitle>
                      <ItemDescription>
                        Offering a glimpse into long-term developments beyond
                        nine months.
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </div>

              <Image
                src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/3de0d9d0071446fa95353cfd41748fa9?t=sc700x700"
                alt="Roadmap"
                width={300}
                height={300}
              />
            </div>
            <RestrictedContent>
              <Alert>
                <AlertDescription>
                  The product roadmap is for informational purposes only and
                  subject to change at Sitecore’s sole discretion. Timelines and
                  features are not commitments, and the roadmap may be amended
                  or discontinued without notice. Customers should not rely on
                  it for purchasing or planning decisions.
                </AlertDescription>
              </Alert>
              <h2 className="text-2xl font-medium mb-8">Available roadmaps</h2>

              <div className="grid w-full grid-cols-1 gap-[5px] md:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <LinkItem
                    link={`/roadmap/${slugify(product.label)}`}
                    key={product.value}
                    title={product.label}
                  />
                ))}
              </div>

              <Alert>
                <AlertTitle>Confidentiality Disclaimer:</AlertTitle>
                <AlertDescription>
                  This product roadmap contains highly confidential information
                  and is intended solely for the recipient. By accessing this
                  information, you acknowledge that it is subject to the
                  confidentiality obligations set forth in your existing
                  agreements with Sitecore. Any unauthorized disclosure,
                  distribution, or use of this information is strictly
                  prohibited.
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
