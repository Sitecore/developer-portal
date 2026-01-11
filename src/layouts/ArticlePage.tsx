import { type PromoCardProps, PromoList } from "@src/components/cards";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { SocialFeeds } from "@src/components/links";
import GithubContributionNotice from "@src/components/markdown/contribute";
import { RenderContent } from "@src/components/markdown/MarkdownContent";
import { ArticlePaging } from "@src/components/navigation/ArticlePaging";
import BreadcrumbNav from "@src/components/navigation/BreadcrumbNav";
import InPageNav from "@src/components/navigation/InPageNav";
import SidebarNavigation from "@src/components/navigation/SidebarNavigation";
import { Hero } from "@src/components/ui/sections";
import useManifestRoutes from "@src/hooks/useManifestRoutes";
import Layout from "@src/layouts/Layout";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import type { ChildPageInfo, PageInfo } from "@src/lib/interfaces/page-info";
import { getItemUrl } from "@src/lib/manifestHelper";
import { replaceOutgoingLinks } from "@src/lib/markdown/replaceLinks";
import { mdiArrowRightCircle } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

const ArticlePage = ({
	pageInfo,
	promoAfter,
	promoBefore,
	customNav,
	customNavPager,
	sidebarConfig,
}: ArticlePageProps) => {
	const router = useRouter();
	const { children } = useManifestRoutes(sidebarConfig, router.asPath);

	const [processedContent, setProcessedContent] = useState(
		pageInfo?.parsedContent ?? "",
	);

	useEffect(() => {
		// If the content changes or on page load, replace the links
		if (pageInfo?.parsedContent) {
			setProcessedContent(replaceOutgoingLinks(pageInfo.parsedContent));
		}
	}, [pageInfo?.parsedContent]);

	if (!pageInfo) {
		return <>No pageInfo found</>;
	}

	// Check for headings in the content
	const sectionTitles: Array<ContentHeading> = [];

	if (pageInfo.headings) {
		sectionTitles.push(...pageInfo.headings);
	}

	const Nav =
		pageInfo.hasInPageNav !== false ? (
			customNav ? (
				customNav
			) : sectionTitles != null ? (
				<InPageNav titles={sectionTitles} key={router.asPath} />
			) : null
		) : null;

	return (
		<TrackPageView pageInfo={pageInfo}>
			<Layout
				title={pageInfo.title}
				section={sidebarConfig.title}
				description={pageInfo.description}
				openGraphImage={pageInfo.openGraphImage}
			>
				<Hero
					title={pageInfo.title}
					description={pageInfo.description}
					image={pageInfo.heroImage}
					productLogo={pageInfo.productLogo}
					demoId={pageInfo.guidedDemoId}
				/>

				<ThreeColumnLayout
					sidebar={
						pageInfo.hasSubPageNav && (
							<SidebarNavigation config={sidebarConfig} />
						)
					}
					inPageLinks={sectionTitles}
					inPageNav={sectionTitles.length > 0 && Nav}
				>
					<BreadcrumbNav
						enabled={sidebarConfig.enableBreadcrumb}
						currentPage={pageInfo}
						config={sidebarConfig}
					/>
					<ArticlePaging
						enabled={sidebarConfig.enableNextPrevious}
						currentfileName={pageInfo.fileName}
						config={sidebarConfig}
						currentPath={router.asPath}
					/>
					{pageInfo.lastUpdated && (
						<p className="text-sm uppercase tracking-wide text-muted-foreground mb-0 md:mb-2">
							Last updated:{" "}
							{new Date(pageInfo.lastUpdated).toLocaleString("en-US", {
								dateStyle: "medium",
							})}
						</p>
					)}
					<PromoList data={promoBefore} />

					{/* {router.asPath.includes('/downloads') && (
            <Alert status="warning" mb={4}>
              <AlertIcon />

              <AlertDescription w="full">
                We have discovered an issue with some of our Developer downloads. Out of an abundance of caution we have temporarily disabled download ability while we address this issue. We hope to have access available as soon as possible; in the
                meantime please work with your customer support / account executive representative to get the access you need.
                <div style={{ marginTop: '1rem' }}>
                  For information on how to file a support case, please refer to <Link href="https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB0654910#HowToCreateASupportCase">this article</Link>
                </div>
              </AlertDescription>
            </Alert>
          )} */}

					<RenderContent content={processedContent} />

					{/* Child Navigation */}
					{children && (
						<div className="flex flex-col gap-4">
							<p className="font-semibold">Articles in this section:</p>
							<ul className="flex flex-col gap-2 list-none">
								{children.map((child) => (
									<li
										key={child.path || child.title}
										className="flex items-center gap-2"
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
						currentPath={router.asPath}
					/>
					<GithubContributionNotice
						pageInfo={pageInfo}
						config={sidebarConfig}
					/>
					{customNavPager}
					<PromoList data={promoAfter} />
					<SocialFeeds pageInfo={pageInfo} />
				</ThreeColumnLayout>
			</Layout>
		</TrackPageView>
	);
};

export default ArticlePage;
