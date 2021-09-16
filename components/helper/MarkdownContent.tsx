// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
import type { PagePartial } from '@/interfaces/page-info';
import getSectionId from '@/lib/section-id';

type MarkdownContentProps = {
  partials: PagePartial[];
  hasGrid?: boolean;
};

const gridClasses = classnames('grid', 'gap-6', 'md:grid-cols-2');
const gridItemClasses = classnames('p-8', 'border', 'border-gray-light', 'bg-white');

const MarkdownContent = ({ partials, hasGrid = false }: MarkdownContentProps): JSX.Element => (
  <div className={classnames({ [gridClasses]: hasGrid })}>
    {partials.map((item, i) => (
      <div
        className={classnames('prose', {
          'mb-16': i !== partials.length && !hasGrid,
          [gridItemClasses]: hasGrid,
        })}
        key={i}
        id={getSectionId(item.title)}
      >
        <ReactMarkdown>{item.content}</ReactMarkdown>
      </div>
    ))}
  </div>
);

export default MarkdownContent;
