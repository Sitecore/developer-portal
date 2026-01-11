import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import SearchResults from "@src/components/integrations/sitecore-search/SearchResults";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { CenteredContent, Hero, VerticalGroup } from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getPageInfo } from "@src/lib/page-info";
import { IsSearchEnabled } from "@src/lib/search";
import { AlertTriangle } from "lucide-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

interface SearchPageProps {
	pageInfo: PageInfo;
}

export async function getServerSideProps() {
	const pageInfo = await getPageInfo("_search");

	return {
		props: {
			pageInfo,
		},
	};
}

const Search: NextPage<SearchPageProps> = ({ pageInfo }) => {
	const router = useRouter();
	const query: string = (router?.query.q as string) ?? "";
	const currentPage: number = parseInt(router?.query.p as string, 10) || 1;

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
						{IsSearchEnabled() ? (
							<SearchResults
								initialKeyphrase={query}
								currentPage={currentPage}
								rfkId={"rfkid_7"}
							/>
						) : (
							<Alert
								variant="default"
								className="border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
							>
								<AlertTriangle className="h-4 w-4" />
								<AlertTitle>
									Search is not enabled on this environment
								</AlertTitle>
								<AlertDescription>
									<div className="flex flex-col gap-2 mt-4">
										<p>
											To enable search please update the following environment
											variables in the{" "}
											<code className="px-1 py-0.5 bg-muted rounded text-sm">
												.env
											</code>{" "}
											file:
										</p>
										<div className="flex flex-col gap-1 mt-2">
											<code className="px-2 py-1 bg-muted rounded text-sm">
												NEXT_PUBLIC_SEARCH_API_KEY
											</code>
											<code className="px-2 py-1 bg-muted rounded text-sm">
												NEXT_PUBLIC_SEARCH_APP_ENV
											</code>
											<code className="px-2 py-1 bg-muted rounded text-sm">
												NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY
											</code>
											<code className="px-2 py-1 bg-muted rounded text-sm">
												NEXT_PUBLIC_SEARCH_APP_API_KEY
											</code>
											<code className="px-2 py-1 bg-muted rounded text-sm">
												NEXT_PUBLIC_SEARCH_ENABLE_PREVIEW_SEARCH
											</code>
											<code className="px-2 py-1 bg-muted rounded text-sm">
												NEXT_PUBLIC_CHANGELOG_SEARCH_SOURCE
											</code>
										</div>
									</div>
								</AlertDescription>
							</Alert>
						)}
					</CenteredContent>
				</VerticalGroup>
			</Layout>
		</TrackPageView>
	);
};

export default Search;
