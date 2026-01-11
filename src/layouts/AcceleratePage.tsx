import { mdiArrowRightCircle } from "@mdi/js";
import Icon from "@mdi/react";
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
import { CenteredContent } from "@src/components/ui/sections";
import useManifestRoutes from "@src/hooks/useManifestRoutes";
import Layout from "@src/layouts/Layout";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import type { ChildPageInfo, PageInfo } from "@src/lib/interfaces/page-info";
import { getItemUrl } from "@src/lib/manifestHelper";
import { Info } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sidebar } from "./Sidebar";

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

        <div className="flex flex-col flex-grow-0 gap-0 justify-between w-full md:flex-row">
          <Sidebar showBackground>
            <SidebarNavigation config={sidebarConfig} />
          </Sidebar>

          <main className="w-full max-w-6xl min-h-[calc(100vh-215px)] px-4 md:px-0">
            <CenteredContent className="min-h-[calc(100vh-400px)]">
              <div className="flex flex-col gap-4 mb-4">
                <DropDownNavigation
                  config={sidebarConfig}
                  key={router.asPath}
                />
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
                        <Icon path={mdiArrowRightCircle} size={1} />
                        <Link
                          href={getItemUrl(sidebarConfig, child)}
                          className="hover:underline"
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
              <GithubContributionNotice
                pageInfo={pageInfo}
                config={sidebarConfig}
              />
            </CenteredContent>
          </main>

          <Sidebar className="hidden sticky top-0 pl-4 min-h-full border-l xl:block border-border">
            <div className="flex flex-col gap-4">
              <div className="pb-4 border-b border-border">
                {sectionTitles.length > 1 && (
                  <InPageNav
                    titles={sectionTitles}
                    key={path}
                    title="Topics in this recipe"
                    className="mt-2"
                  />
                )}
              </div>

              <UseWithAI pageInfo={pageInfo} />

              <AccelerateMetaData pageInfo={pageInfo} />
            </div>
            <Alert variant="default" className="mt-4">
              <Info className="w-4 h-4" />
              <AlertTitle>Questions or suggestions?</AlertTitle>
              <AlertDescription>
                <p className="text-sm text-muted-foreground">
                  We&apos;d love to hear your feedback!
                </p>
                <Feedback
                  variant={"outline"}
                  projectId="RCPS"
                  issueTypeId="3"
                  product={sidebarConfig?.productFeedbackLabel}
                  text="Submit Feedback"
                />
              </AlertDescription>
            </Alert>
          </Sidebar>
        </div>
      </Layout>
    </TrackPageView>
  );
};

export default AcceleratePage;
