import { headingRank } from "hast-util-heading-rank";
import { toString } from "hast-util-to-string";
import type Root from "remark-gfm";
import { visit } from "unist-util-visit";

import type { ExtractHeadingsConfig } from "../../interfaces/contentheading";

/**
 * Extracts headings from a unified tree.
 * To be used *AFTER* the `rehype-slug` plugin.
 */

// eslint-disable-next-line no-unused-vars
export default function rehypeExtractHeadings({
	rank,
	headings,
}: ExtractHeadingsConfig): (tree: typeof Root) => void {
	return (tree: typeof Root) => {
		visit(tree, "element", (node: any) => {
			if (headingRank(node) === rank && node.properties && node.properties.id) {
				headings.push({
					title: toString(node),
					id: node.properties.id.toString(),
				});
			}
		});
	};
}
