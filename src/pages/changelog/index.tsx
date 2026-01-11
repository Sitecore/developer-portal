import ChangelogByMonth from "@src/components/changelog/ChangelogByMonth";
import { ChangelogFeeds } from "@src/components/changelog/ChangelogFeeds";
import ChangelogList from "@src/components/changelog/ChangelogList";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import type { Option } from "@src/components/ui/dropdown";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import { Changelog } from "@src/lib/changelog/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SWRConfig } from "swr";

type ChangelogHomeProps = {
  fallback: any;
  preview: boolean;
};

export default function ChangelogHome({ fallback }: ChangelogHomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<Array<Option>>([]);

  const router = useRouter();

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/api/changelog/v1/all?"
          as="fetch"
          crossOrigin="anonymous"
        />
      </Head>
      <TrackPageView>
        <Layout
          title="Changelog"
          description="Learn more about new versions, changes and improvements"
        >
          <Hero title="Changelog">
            <h2 className="text-sm md:text-base font-normal tracking-wide text-muted-foreground">
              This changelog provides visibility into key product updates,
              including new features, enhancements, resolutions and
              architectural improvements. Some bug fixes and backend adjustments
              may not be listed here. If you have a specific bug fix that you
              want to follow, please visit&nbsp;
              <Link
                href="https://support.sitecore.com"
                title="Go to the support portal"
                target="_blank"
                className="underline"
              >
                https://support.sitecore.com
              </Link>
            </h2>
          </Hero>

          <VerticalGroup>
            <CenteredContent className="py-8 gap-8">
              <div className="grid grid-cols-5 gap-14">
                <div className="col-span-5 md:col-span-3">
                  <SWRConfig value={{ fallback }}>
                    <ChangelogList
                      selectedProducts={selectedProduct}
                      onProductsChange={setSelectedProduct}
                    />
                  </SWRConfig>
                </div>

                <div className="col-span-2 hidden md:block">
                  <ChangelogFeeds url={router.pathname} />
                  <ChangelogByMonth
                    product={undefined}
                    selectedProducts={selectedProduct}
                  />
                </div>
              </div>
            </CenteredContent>
          </VerticalGroup>
        </Layout>
      </TrackPageView>
    </>
  );
}

export async function getStaticProps(context: any) {
  const isPreview = context.preview ? context.preview : null;

  const changelog = new Changelog(getChangelogCredentials(), isPreview);
  const entries = await changelog.getEntriesPaginated("5", "", "", "");

  return {
    props: {
      fallback: {
        "/api/changelog/v1?limit=5": entries,
      },
      preview: isPreview,
    },
    revalidate: 60,
  };
}
