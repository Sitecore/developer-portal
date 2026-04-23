import { SearchInput } from "@src/components/integrations/sitecore-search";
import { LinkButton } from "@src/components/links";
import Layout from "@src/layouts/Layout";
import Image from "next/image";

export default function Custom404() {
  return (
    <Layout
      title={"This page is not available"}
      description={
        "The link you have followed might be broken, or the page has been removed"
      }
    >
      <div className="h-[calc(100vh-215px)]">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center text-center gap-6 max-w-lg">
            <Image
              width={128}
              height={128}
              src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-map-search"
              alt="map-search"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-heading">
                This page is not available
              </h1>
              <p className="text-sm text-muted-foreground">Error 404</p>
            </div>
            <div className="flex flex-col gap-4 max-w-lg">
              <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-0">
                Maybe you can search to find what you are looking for?
              </h2>
              <div className="flex">
                <SearchInput showButton />
              </div>
            </div>
            <p>The page you are looking for cannot be found.</p>
            <div className="flex">
              <LinkButton variant="link" href="/" text="Go to homepage" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
