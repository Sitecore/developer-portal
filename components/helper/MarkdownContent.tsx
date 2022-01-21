// Global
import { useEffect, useState } from 'react';
import { classnames } from '@/tailwindcss-classnames';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlight from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import remarkGfm from 'remark-gfm';
// Interfaces
import type { PartialData } from '@/interfaces/page-info';
// Lib
import setHeadingIds from '@/lib/remark/heading-ids';
import VerticalGroup from './VerticalGroup';

type MarkdownContentProps = {
  partials: PartialData;
  hasGrid?: boolean;
};

type DecoratedMarkdownProps = {
  children: string;
};

const DecoratedMarkdown = ({ children }: DecoratedMarkdownProps): JSX.Element => {
  const [isDark, setIsLight] = useState(false);
  useEffect(() => {
    setIsLight(
      typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }, []);

  return (
    <ReactMarkdown
      remarkPlugins={[setHeadingIds, remarkGfm]}
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const lang = !!match ? match[1] : '';
          const style = isDark ? a11yDark : a11yLight;
          return !inline && match ? (
            <SyntaxHighlight
              children={String(children).replace(/\n$/, '')}
              style={style}
              language={lang}
              PreTag="div"
            />
          ) : (
            <code className={className}>{children}</code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

const MarkdownContent = ({ partials, hasGrid = false }: MarkdownContentProps): JSX.Element => {
  if (hasGrid) {
    return (
      <div className={classnames('grid', 'gap-6', 'md:grid-cols-2')}>
        {partials.content.map((item, i) => (
          <div
            className={classnames(
              'prose',
              'max-w-4xl',
              'p-8',
              'border',
              'border-theme-border',
              'bg-theme-bg',
              'text-theme-text'
            )}
            key={i}
          >
            <DecoratedMarkdown>{item}</DecoratedMarkdown>
          </div>
        ))}
      </div>
    );
  }

  return (
    <VerticalGroup>
      {partials.content.map((item, i) => (
        <div key={i}>
          <div className={classnames('prose', 'max-w-4xl')}>
            <DecoratedMarkdown>{item}</DecoratedMarkdown>
          </div>
          <button
            className="border border-teal text-teal text-xs mt-4 rounded-sm py-1 px-2 mr-0 flex items-center hover:bg-teal hover:text-white"
            key={i}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            <a className="pl-1" href={`${partials.fileNames[i]}`}>
              Suggest an edit
            </a>
          </button>
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
