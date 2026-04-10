import { mdiArrowRightCircle } from "@mdi/js";

import { type PromoCardProps, PromoList } from "@src/components/cards";
import UseWithAI from "@src/components/integrations/ai/useWithAI";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { SocialFeeds } from "@src/components/links";
import { AccelerateMetaData } from "@src/components/lists/accelerate/MetaData";
import GithubContributionNotice from "@src/components/markdown/contribute";
import Feedback from "@src/components/markdown/Feedback";
import { RenderContent } from "@src/components/markdown/MarkdownContent";
import { ArticlePaging } from "@src/components/navigation/ArticlePaging";
import BreadcrumbNav from "@src/components/navigation/BreadcrumbNav";
import { DropDownNavigation } from "@src/components/navigation/DropDownNavigation";
import InPageNav from "@src/components/navigation/InPageNav";
import SidebarNavigation from "@src/components/navigation/SidebarNavigation";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { Icon } from "@src/components/ui/icon";
import { CenteredContent } from "@src/components/ui/sections";
import useManifestRoutes from "@src/hooks/useManifestRoutes";
import Layout from "@src/layouts/Layout";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import type { ChildPageInfo, PageInfo } from "@src/lib/interfaces/page-info";
import { getItemUrl } from "@src/lib/manifestHelper";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThreeColumnLayout } from "./ThreeColumnLayout";

type ArticlePageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  childPageInfo?: Array<ChildPageInfo>;
  sidebarConfig: ManifestConfig;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const AcceleratePage = ({
  pageInfo,
  promoAfter,
  promoBefore,
  customNavPager,
  sidebarConfig,
}: ArticlePageProps) => {
  const router = useRouter();
  const path = router.asPath;
  const { children } = useManifestRoutes(sidebarConfig, path);

  if (!pageInfo) {
    return <>No pageInfo found</>;
  }

  // Check for headings in the content
  const sectionTitles: Array<ContentHeading> = [];

  if (pageInfo.headings) {
    sectionTitles.push(...pageInfo.headings);
  }

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout
        title={pageInfo.title}
        section={sidebarConfig.title}
        description={pageInfo.description}
        openGraphImage={pageInfo.openGraphImage}
      >
        {/* <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} demoId={pageInfo.guidedDemoId} /> */}

        <ThreeColumnLayout
          sidebar={<SidebarNavigation config={sidebarConfig} disableMobileMenu />}
          inPageNav={
            <>
              <div className="flex flex-col gap-4">
                {sectionTitles.length > 1 && (
                  <div className="pb-4 border-b border-border">
                    <InPageNav
                      titles={sectionTitles}
                      key={path}
                      title="Topics in this recipe"
                      className="mt-2"
                    />
                  </div>
                )}

                <UseWithAI pageInfo={pageInfo} />

                <AccelerateMetaData pageInfo={pageInfo} />
              </div>
              <Alert variant="primary" className="mt-4">
                <AlertTitle>Questions or suggestions?</AlertTitle>
                <AlertDescription>
                  <p className="text-sm text-muted-foreground pt-2">
                    We&apos;d love to hear your feedback!
                  </p>
                  <Feedback
                    variant={"link"}
                    className="p-0 mt-2"
                    projectId="RCPS"
                    issueTypeId="3"
                    product={sidebarConfig?.productFeedbackLabel}
                    text="Submit Feedback"
                  />
                </AlertDescription>
              </Alert>
            </>
          }
        >
          <CenteredContent className="min-h-[calc(100vh-400px)] prose-sm md:py-0">
            <div className="flex flex-col">
              <DropDownNavigation config={sidebarConfig} key={router.asPath} />
              <BreadcrumbNav
                enabled={sidebarConfig.enableBreadcrumb}
                currentPage={pageInfo}
                config={sidebarConfig}
                hideCurrentPage
              />
              <h1 className="text-2xl font-normal md:text-4xl xl:text-6xl font-heading">
                {pageInfo.title}
              </h1>
            </div>
            <ArticlePaging
              enabled={sidebarConfig.enableNextPrevious}
              currentfileName={pageInfo.fileName}
              config={sidebarConfig}
              currentPath={path}
            />

            <PromoList data={promoBefore} />
            <RenderContent content={pageInfo.parsedContent} />

            {/* Child Navigation */}
            {children && children?.length > 0 && (
              <div className="flex flex-col gap-4">
                <p className="font-semibold">Articles in this section:</p>
                <ul className="flex flex-col gap-2 list-none">
                  {children.map((child) => (
                    <li
                      key={child.path || child.title}
                      className="flex gap-2 items-center"
                    >
                      <Icon
                        path={mdiArrowRightCircle}
                        colorScheme="neutral"
                      />
                      <Link
                        href={getItemUrl(sidebarConfig, child)}
                        className="text-primary"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ArticlePaging
              enabled={sidebarConfig.enableNextPrevious}
              currentfileName={pageInfo.fileName}
              config={sidebarConfig}
              currentPath={path}
            />

            {customNavPager}
            <PromoList data={promoAfter} />
            <SocialFeeds pageInfo={pageInfo} />
          </CenteredContent>
          <CenteredContent>
            <GithubContributionNotice pageInfo={pageInfo} config={sidebarConfig} />
          </CenteredContent>
        </ThreeColumnLayout>
      </Layout>
    </TrackPageView>
  );
};

export default AcceleratePage;
