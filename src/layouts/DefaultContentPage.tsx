import { type PromoCardProps, PromoList } from "@src/components/cards";
import ChangelogEntries from "@src/components/changelog/ChangelogEntries";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { SocialFeeds } from "@src/components/links/SocialFeeds";
import { RenderContent } from "@src/components/markdown/MarkdownContent";
import InPageNav from "@src/components/navigation/InPageNav";
import { ContentSection, Hero } from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import type { ChildPageInfo, PageInfo } from "@src/lib/interfaces/page-info";
import { useRouter } from "next/router";
import { ThreeColumnLayout } from "./ThreeColumnLayout";

type DefaultContentPageProps = {
	pageInfo: PageInfo;
	hasGrid?: boolean;
	promoAfter?: Array<PromoCardProps>;
	promoBefore?: Array<PromoCardProps>;
	childPageInfo?: Array<ChildPageInfo>;
	customNav?: React.ReactNode;
	customNavPager?: React.ReactNode;
};

const DefaultContentPage = ({
	pageInfo,
	promoAfter,
	promoBefore,
	customNav,
	customNavPager,
}: DefaultContentPageProps) => {
	const router = useRouter();

	if (!pageInfo) {
		return <>No pageInfo found</>;
	}

	// Check for headings in the content
	const sectionTitles: Array<ContentHeading> = [];

	if (pageInfo.headings) {
		sectionTitles.push(...pageInfo.headings);
	}

	const Nav = customNav ? (
		customNav
	) : sectionTitles != null ? (
		<InPageNav titles={sectionTitles} />
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
					demoId={pageInfo.guidedDemoId}
				/>

				<ContentSection
					className={pageInfo.hasInPageNav ? "bg-gray-50 dark:bg-gray-900" : ""}
				>
					{/* <CenteredContent paddingTop={10}> */}
					<PromoList data={promoBefore} />
					{/* Page structure */}

					<ThreeColumnLayout
						sidebar={pageInfo.hasSubPageNav && Nav}
						inPageNav={
							sectionTitles.length > 0 && (
								<InPageNav titles={sectionTitles} key={router.asPath} />
							)
						}
						inPageLinks={sectionTitles}
					>
						<RenderContent content={pageInfo.parsedContent} />

						<ChangelogEntries
							entries={pageInfo.changelogEntries}
							title={`Latest product updates`}
							linkText="Full changelog"
							columns={2}
						/>
						<PromoList data={promoAfter} />
						<SocialFeeds pageInfo={pageInfo} />
					</ThreeColumnLayout>
					{customNavPager}
					{/* End Page structure */}
					{/* </CenteredContent> */}
				</ContentSection>
			</Layout>
		</TrackPageView>
	);
};

export default DefaultContentPage;
