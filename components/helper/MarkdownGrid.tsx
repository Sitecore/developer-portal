// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';

type MarkdownGridProps = {
  partials: string[];
};

const MarkdownGrid = ({ partials }: MarkdownGridProps): JSX.Element => (
  <div className={classnames('grid', 'gap-6', 'md:grid-cols-3')}>
    {partials.map((item, i) => (
      <div className={classnames('prose', 'border', 'p-4')} key={i}>
        <ReactMarkdown>{item}</ReactMarkdown>
      </div>
    ))}
  </div>
);

export default MarkdownGrid;
