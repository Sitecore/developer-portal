import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import Repositories from "@src/components/integrations/github/Repositories";

import { RenderContent } from "@src/components/markdown/MarkdownContent";
import { CenteredContent, Hero, VerticalGroup } from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import { getGitHubRepositories } from "@src/lib/github";
import type { GitHubRepo } from "@src/lib/interfaces/github";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getPageInfo } from "@src/lib/page-info";
import type { NextPage } from "next";
import { useRouter } from "next/router";

interface OpenSourcePageProps {
	pageInfo: PageInfo;
	repositories: GitHubRepo[];
}

export async function getServerSideProps() {
	const pageInfo = await getPageInfo("_opensource");
	const repositories = await getGitHubRepositories(6);
	return {
		props: {
			pageInfo,
			repositories,
		},
	};
}

const OpenSource: NextPage<OpenSourcePageProps> = ({
	pageInfo,
	repositories,
}) => {
	const _router = useRouter();

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
						<RenderContent content={pageInfo.parsedContent} />
						<Repositories repositories={repositories} />
					</CenteredContent>
				</VerticalGroup>
			</Layout>
		</TrackPageView>
	);
};

export default OpenSource;
