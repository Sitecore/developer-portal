import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { TextLink } from "@src/components/links";
import {
	DecoratedMarkdown,
	RenderContent,
} from "@src/components/markdown/MarkdownContent";
import SidebarNavigation from "@src/components/navigation/SidebarNavigation";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@src/components/ui/card";
import { CenteredContent, Hero, VerticalGroup } from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import type { ChildPageInfo, PageInfo } from "@src/lib/interfaces/page-info";
import Link from "next/link";

type NewsLetterPagePageProps = {
	pageInfo: PageInfo;
	sidebarConfig: ManifestConfig;
	childPageInfo: Array<ChildPageInfo>;
};

const NewsLetterPage = ({
	pageInfo,
	sidebarConfig,
	childPageInfo,
}: NewsLetterPagePageProps) => {
	if (!pageInfo) {
		return <>No pageInfo found</>;
	}

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
						<div className="flex flex-grow-0 justify-between w-full gap-4 flex-col md:flex-row">
							<nav className="w-full md:w-1/4">
								<SidebarNavigation config={sidebarConfig} />
							</nav>

							{/* Show overview is the route has childs */}
							{childPageInfo.length > 0 && (
								<div className="flex flex-col gap-10 w-full">
									{/* Show markdown content if we have some */}
									{pageInfo.content && pageInfo.content?.length > 0 && (
										<div className="mb-10">
											<RenderContent content={pageInfo.parsedContent} />
										</div>
									)}
									{/* Render the list of child pages */}
									<div className="grid grid-cols-2 gap-4">
										{childPageInfo.map((childPage, i) => (
											<div
												key={childPage.link || childPage.title || i}
												style={{ order: -i }}
											>
												<Card className="border shadow-md hover:shadow-lg transition-shadow">
													<CardHeader>
														<TextLink
															isHeading
															text={childPage.title}
															aria-label={childPage.title}
															href={childPage.link}
														/>
													</CardHeader>
													<CardContent>
														<p className="line-clamp-2">
															{childPage.description}
														</p>
													</CardContent>
													<CardFooter>
														<Button variant="outline" asChild>
															<Link href={childPage.link}>Read more</Link>
														</Button>
													</CardFooter>
												</Card>
											</div>
										))}
									</div>
								</div>
							)}

							{/* No childpages, show newsletter content */}
							{childPageInfo.length === 0 && (
								<div className="flex flex-col gap-10 w-full">
									<div className="grid grid-cols-0 md:grid-cols-3 gap-8">
										{pageInfo.parsedContent && (
											<DecoratedMarkdown disabledProse>
												{pageInfo.parsedContent}
											</DecoratedMarkdown>
										)}
									</div>
								</div>
							)}
						</div>
					</CenteredContent>
				</VerticalGroup>
			</Layout>
		</TrackPageView>
	);
};

export default NewsLetterPage;
