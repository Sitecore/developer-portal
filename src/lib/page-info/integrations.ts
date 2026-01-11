/**
 * Data fetching functions for page integrations
 * Extracted from getPageInfo for better maintainability and testability
 */

import {
	SITECORE_COMMUNITY_MAX_COUNT,
	SitecoreCommunityApi,
	type SitecoreCommunityContent,
	type SitecoreCommunityEvent,
	StackExchangeApi,
	YouTubeApi,
} from "@src/components/integrations";
import { Changelog } from "@src/lib/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import type { MarkdownMeta, PageInfo } from "@src/lib/interfaces/page-info";

/**
 * Fetch all page integrations in parallel
 * @param meta - Page metadata
 * @param pageInfo - Page info object to populate
 */
export async function fetchPageIntegrations(
	meta: MarkdownMeta,
	pageInfo: PageInfo,
): Promise<void> {
	// Prepare all API calls as promises for parallel execution
	const apiCalls: Array<Promise<void>> = [];

	// StackExchange API call
	apiCalls.push(
		StackExchangeApi.get(meta.stackexchange).then((data) => {
			pageInfo.stackexchange = data;
		}),
	);

	// Changelog API call
	if (meta.changelog) {
		apiCalls.push(
			(async () => {
				const changelog = new Changelog(getChangelogCredentials());
				const entriesData = await changelog.getEntries({
					productId: meta.changelogProductId?.join("|") ?? "",
					pageSize: meta.changelog ? Number(meta.changelog) : 6,
				});
				pageInfo.changelogEntries = entriesData.entries;
			})(),
		);
	}

	// YouTube API call
	apiCalls.push(
		YouTubeApi.get(meta.youtube).then((youtubeInfo) => {
			pageInfo.youtube = youtubeInfo.content;
			if (youtubeInfo.playlistTitle) {
				pageInfo.youtubePlaylistTitle = youtubeInfo.playlistTitle;
			}
		}),
	);

	// Sitecore Community API calls - all can run in parallel
	if (meta.sitecoreCommunityBlog) {
		const maxResults =
			typeof meta.sitecoreCommunityBlog === "number"
				? meta.sitecoreCommunityBlog
				: undefined;
		const sort = meta.sitecoreCommunityBlogSort
			? Array.isArray(meta.sitecoreCommunityBlogSort)
				? meta.sitecoreCommunityBlogSort[0]
				: meta.sitecoreCommunityBlogSort
			: "created";
		apiCalls.push(
			SitecoreCommunityApi.get({
				forum: "blog",
				contentType: "blog",
				maxResults,
				sort,
			}).then((sCBlog) => {
				pageInfo.sitecoreCommunity.blog =
					sCBlog as Array<SitecoreCommunityContent>;
			}),
		);
	}

	if (meta.sitecoreCommunityQuestions) {
		const maxResults =
			typeof meta.sitecoreCommunityQuestions === "number"
				? meta.sitecoreCommunityQuestions
				: SITECORE_COMMUNITY_MAX_COUNT;
		const sort = meta.sitecoreCommunityQuestionsSort
			? Array.isArray(meta.sitecoreCommunityQuestionsSort)
				? meta.sitecoreCommunityQuestionsSort[0]
				: meta.sitecoreCommunityQuestionsSort
			: "publish";
		const forum = meta.sitecoreCommunityQuestionsCategory
			? Array.isArray(meta.sitecoreCommunityQuestionsCategory)
				? meta.sitecoreCommunityQuestionsCategory[0]
				: meta.sitecoreCommunityQuestionsCategory
			: undefined;
		apiCalls.push(
			SitecoreCommunityApi.get({
				contentType: "questions",
				maxResults,
				sort,
				forum,
			}).then((sCQuestions) => {
				pageInfo.sitecoreCommunity.questions =
					sCQuestions as Array<SitecoreCommunityContent>;
			}),
		);
	}

	if (meta.sitecoreCommunityEvents) {
		apiCalls.push(
			SitecoreCommunityApi.get({ contentType: "event" }).then((sCEvents) => {
				pageInfo.sitecoreCommunity.events =
					sCEvents as Array<SitecoreCommunityEvent>;
			}),
		);
	}

	if (meta.sitecoreCommunityNews) {
		apiCalls.push(
			SitecoreCommunityApi.get({ forum: "news" }).then((sCNews) => {
				pageInfo.sitecoreCommunity.news =
					sCNews as Array<SitecoreCommunityContent>;
			}),
		);
	}

	// Execute all API calls in parallel
	await Promise.all(apiCalls);
}
