import type {
	ChangelogEntry,
	ChangelogEntrySummary,
} from "@src/lib/changelog/types";

import { formatDate } from "./dateUtil";
import { slugify } from "./stringUtil";

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL
	? process.env.NEXT_PUBLIC_PUBLIC_URL
	: "";

export function getChangelogEntryUrlSegments(
	entry: ChangelogEntry | ChangelogEntrySummary,
): Array<string> {
	const segments: Array<string> = [];

	segments.push(slugify(entry.productName ?? entry.title));
	// Add date to the URL to prevent conflicts with entries with the same title
	segments.push(formatDate(entry.releaseDate));
	segments.push(`${slugify(entry.title)}`);

	return segments;
}

export function getChangelogEntryUrl(
	entry: ChangelogEntry | ChangelogEntrySummary,
	includeServerUrl?: boolean,
): string {
	const url: Array<string> = [];

	url.push("/changelog");
	url.push(...getChangelogEntryUrlSegments(entry));

	if (includeServerUrl) {
		return `${publicUrl + url.join("/")}`;
	}

	return url.join("/");
}
