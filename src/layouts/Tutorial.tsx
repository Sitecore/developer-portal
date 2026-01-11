import { type PromoCardProps, PromoList } from "@src/components/cards";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { SocialFeeds } from "@src/components/links/SocialFeeds";
import GithubContributionNotice from "@src/components/markdown/contribute";
import { RenderContent } from "@src/components/markdown/MarkdownContent";
import { ArticlePaging } from "@src/components/navigation/ArticlePaging";
import { ArticlePagingNext } from "@src/components/navigation/ArticlePagingNext";
import BreadcrumbNav from "@src/components/navigation/BreadcrumbNav";
import InPageNav from "@src/components/navigation/InPageNav";
import SidebarNavigation from "@src/components/navigation/SidebarNavigation";
import { Hero } from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import type { ChildPageInfo, PageInfo } from "@src/lib/interfaces/page-info";
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

const Tutorial = ({
	pageInfo,
	promoAfter,
	promoBefore,
	customNav,
	customNavPager,
	sidebarConfig,
}: ArticlePageProps) => {
	const router = useRouter();

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
				description={pageInfo.description}
				openGraphImage={pageInfo.openGraphImage}
			>
				<Hero
					title={pageInfo.title}
					description={pageInfo.description}
					image={pageInfo.heroImage}
					productLogo={pageInfo.productLogo}
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
					<PromoList data={promoBefore} />
					<RenderContent content={pageInfo.parsedContent} />
					<ArticlePagingNext
						enabled={sidebarConfig.enableNextPrevious}
						currentFileName={pageInfo.fileName}
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

export default Tutorial;
