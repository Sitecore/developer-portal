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
        <div className={classnames('prose', 'max-w-4xl')} key={i}>
          <DecoratedMarkdown>{item}</DecoratedMarkdown>
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
