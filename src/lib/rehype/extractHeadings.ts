import { hasProperty } from 'hast-util-has-property';
import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';
import { Root } from 'hast';
import { parseRankingInfo } from '@coveo/headless/dist/definitions/features/debug/ranking-info-parser';
import { logCollapseSmartSnippet } from '@coveo/headless/dist/definitions/features/question-answering/question-answering-analytics-actions';

/**
 * Extracts headings from a unified tree.
 * To be used *AFTER* the `rehype-slug` plugin.
 */
interface ExtractHeadingsConfig {
  rank: number;
  headings: ContentHeading[];
}

export interface ContentHeading {
  title: string;
  id: string;
}

export default function rehypeExtractHeadings({
  rank,
  headings,
}: ExtractHeadingsConfig): (tree: Root) => void {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (headingRank(node) === rank && node.properties?.id) {
        headings.push({
          title: toString(node),
          id: node.properties['id'].toString(),
        });
      }
    });
  };
}
