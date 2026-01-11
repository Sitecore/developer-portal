import ChangelogByMonth from "@src/components/changelog/ChangelogByMonth";
import { ChangelogFeeds } from "@src/components/changelog/ChangelogFeeds";
import ChangelogList from "@src/components/changelog/ChangelogList";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import { Changelog } from "@src/lib/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import type { Product } from "@src/lib/changelog/types";
import { getChangelogProductPaths } from "@src/lib/staticPaths";
import Link from "next/link";
import { getSlug, slugify } from "@/src/lib/util/stringUtil";

type ChangelogProps = { currentProduct: Product; preview: boolean };

export async function getStaticPaths() {
  const paths = await getChangelogProductPaths();

  return { paths: paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const preview = context.preview ? context.preview : null;
  const changelog = new Changelog(getChangelogCredentials(), preview);
  const products = await changelog
    .getProducts()
    .then((response: Array<Product>) => {
      return response;
    });

  const currentProduct: Product | undefined = products.find(
    (p) => slugify(p.name) === product,
  );

  return {
    props: { currentProduct: currentProduct, preview: preview },
    revalidate: 60,
  };
}

const ChangelogProduct = ({ currentProduct }: ChangelogProps) => {
  const title = `${currentProduct.name} Changelog`;
  const description = `Learn more about new versions, changes and improvements for ${currentProduct.name}`;

  return (
    <TrackPageView product={currentProduct}>
      <Layout title={title} description={description}>
        <Hero title={title}>
          <h2 className="text-sm md:text-base font-normal tracking-wide text-muted-foreground">
            This changelog provides visibility into key {currentProduct.name}{" "}
            updates, including new features, enhancements, resolutions and
            architectural improvements. Some bug fixes and backend adjustments
            may not be listed here. If you have a specific bug fix that you want
            to follow, please visit&nbsp;
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
                <ChangelogList initialProduct={currentProduct} />
              </div>
              <div className="col-span-2 hidden md:block">
                <ChangelogFeeds url={getSlug(currentProduct.name)} />
                <ChangelogByMonth product={currentProduct} />
              </div>
            </div>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default ChangelogProduct;
