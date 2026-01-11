import { LinkButton } from "@src/components/links";
import Layout from "@src/layouts/Layout";
import Image from "next/image";

export default function Custom500() {
  return (
    <Layout
      title={"Internal Server error"}
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
              src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-alert-circle?"
              alt="alert"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-heading">Internal server error</h1>
              <p className="text-sm text-muted-foreground">Error 500</p>
            </div>
            <p>Apologies, this page seems to be broken.</p>
            <div className="flex">
              <LinkButton variant="link" href="/" text="Go to homepage" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
