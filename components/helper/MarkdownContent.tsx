// Global
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';

type MarkdownContentProps = {
  partials: string[];
};

const MarkdownContent = ({ partials }: MarkdownContentProps): JSX.Element => (
  <div>
    {partials.map((item, i) => (
      <div
        className={classnames('prose', {
          'mb-16': i !== partials.length,
        })}
        key={i}
      >
        <ReactMarkdown>{item}</ReactMarkdown>
      </div>
    ))}
  </div>
);

export default MarkdownContent;
