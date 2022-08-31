import { visit } from 'unist-util-visit';
import getSectionId from '@/src/common/section-id';

type HeaderNodeData = {
  value?: string;
  children?: HeaderNodeData[];
  type: string;
  data?: {
    id?: string;
    hProperties?: {
      id?: string;
    };
  };
  depth?: number;
};

/**
 * Transforms all h tags to add an id based on the text value of the heading
 *
 * @returns {HeaderNodeData} The updated node data with the appropriate id attributes
 */
const setHeadingIds = () => {
  return (node: HeaderNodeData) => {
    visit(node, 'heading', (node: HeaderNodeData) => {
      if (!node.children || node?.depth !== 2) {
        return;
      }

      const firstChild = node.children[0];
      let text = '';
      // If our heading is a link, grab it's child text
      if (firstChild.type === 'link' && !!firstChild.children) {
        text = firstChild.children[0].value || '';
      } else if (firstChild.type === 'text') {
        text = firstChild.value || '';
      }

      if (!!text) {
        const id = getSectionId(text);

        // Make sure the data structure is in place
        if (!node.data) {
          node.data = {};
        }
        if (!node.data.hProperties) {
          node.data.hProperties = {};
        }
        // Set the id & hProperties id
        node.data.id = node.data.hProperties.id = id;
      }
    });
  };
};

export default setHeadingIds;
