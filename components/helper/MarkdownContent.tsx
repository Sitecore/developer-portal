// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
// Interfaces
import type { PartialData } from '@/interfaces/page-info';
// Lib
import setHeadingIds from '@/lib/remark/heading-ids';
import VerticalGroup from './VerticalGroup';

type MarkdownContentProps = {
  partials: PartialData;
  hasGrid?: boolean;
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
            <ReactMarkdown plugins={[setHeadingIds]}>{item}</ReactMarkdown>
          </div>
        ))}
      </div>
    );
  }

  return (
    <VerticalGroup>
      {partials.content.map((item, i) => (
        <div className={classnames('prose')} key={i}>
          <ReactMarkdown plugins={[setHeadingIds]}>{item}</ReactMarkdown>
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
