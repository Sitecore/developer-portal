// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
// Interfaces
import type { PartialData } from '@/interfaces/page-info';
// Lib
import setHeadingIds from '@/lib/remark/heading-ids';
import VerticalGroup from './VerticalGroup';

type MarkdownContentProps = {
  partials: PartialData;
  hasGrid?: boolean;
};

type NodeChild = {
  tagName: string;
  properties: {
    alt?: string;
    src?: string;
  };
};

type ParagraphNode = {
  node: {
    children: NodeChild[];
  };
  children: any[];
};

const MarkdownComponents: object = {
  p: (paragraph: ParagraphNode) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const alt = image.properties.alt;

      return (
        <div
          className={classnames('inline-block', 'relative', 'aspect-w-16', 'aspect-h-9', 'w-full')}
        >
          <Image src={image.properties.src || ''} alt={alt} layout="fill" />
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
};

const MarkdownContent = ({ partials, hasGrid = false }: MarkdownContentProps): JSX.Element => {
  if (hasGrid) {
    return (
      <div className={classnames('grid', 'gap-6', 'md:grid-cols-2')}>
        {partials.content.map((item, i) => (
          <div
            className={classnames('prose', 'p-8', 'border', 'border-gray-light', 'bg-white')}
            key={i}
          >
            <ReactMarkdown
              remarkPlugins={[setHeadingIds, remarkGfm]}
              components={MarkdownComponents}
            >
              {item}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    );
  }

  return (
    <VerticalGroup>
      {partials.content.map((item, i) => (
        <div className={classnames('prose')} key={i}>
          <ReactMarkdown remarkPlugins={[setHeadingIds, remarkGfm]} components={MarkdownComponents}>
            {item}
          </ReactMarkdown>
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
