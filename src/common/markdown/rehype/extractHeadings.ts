import { ExtractHeadingsConfig } from '@/src/interfaces/contentheading';
import { Root } from 'hast';
import { headingRank } from 'hast-util-heading-rank';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';

/**
 * Extracts headings from a unified tree.
 * To be used *AFTER* the `rehype-slug` plugin.
 */

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
