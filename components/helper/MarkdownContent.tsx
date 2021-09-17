// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
// Interfaces
import type { PartialData } from '@/interfaces/page-info';
// Lib
import setHeadingIds from '@/lib/remark/heading-ids';

type MarkdownContentProps = {
  partials: PartialData;
  hasGrid?: boolean;
};

const gridClasses = classnames('grid', 'gap-6', 'md:grid-cols-2');
const gridItemClasses = classnames('p-8', 'border', 'border-gray-light', 'bg-white');

const MarkdownContent = ({ partials, hasGrid = false }: MarkdownContentProps): JSX.Element => (
  <div className={classnames({ [gridClasses]: hasGrid })}>
    {partials.content.map((item, i) => (
      <div
        className={classnames('prose', {
          'mb-16': i !== partials.content.length && !hasGrid,
          [gridItemClasses]: hasGrid,
        })}
        key={i}
      >
        <ReactMarkdown plugins={[setHeadingIds]}>{item}</ReactMarkdown>
      </div>
    ))}
  </div>
);

export default MarkdownContent;
