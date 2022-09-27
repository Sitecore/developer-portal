// Global
import { classnames, TArg } from '@/src/common/types/tailwindcss-classnames';
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useState } from 'react';
import SyntaxHighlight from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// Interfaces
import type { PartialData } from '@/src/interfaces/page-info';
// Lib
import VerticalGroup from './VerticalGroup';

type MarkdownContentProps = {
  partials: PartialData;
  hasGrid?: boolean;
};

type DecoratedMarkdownProps = {
  children: string;
};

type EditButtonProps = {
  editUrl: string;
  classes?: TArg;
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
    <MDXRemote
      compiledSource={children}
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const lang = match ? match[1] : '';
          const style = isDark ? a11yDark : a11yLight;
          return match ? (
            <div className={classnames('not-prose')}>
              <SyntaxHighlight style={style} language={lang} PreTag="div">
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlight>
            </div>
          ) : (
            <code className={className}>{children}</code>
          );
        },
      }}
    />
  );
};

function EditButton({ editUrl, classes }: EditButtonProps) {
  return (
    <button
      className={classnames(
        'text-charcoal',
        'dark:text-teal',
        'hover:bg-violet',
        'dark:hover:bg-teal',
        'hover:text-white',
        'text-xs',
        'mt-4',
        'rounded-sm',
        'py-1',
        'px-2',
        'mr-0',
        'flex',
        'items-center',
        classes
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path
          fillRule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clipRule="evenodd"
        />
      </svg>
      <a className="pl-1" href={editUrl}>
        Suggest an edit
      </a>
    </button>
  );
}

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
              'text-theme-text',
              'relative'
            )}
            key={i}
          >
            <DecoratedMarkdown>{item}</DecoratedMarkdown>
            <EditButton
              editUrl={partials.fileNames[i]}
              classes={classnames('absolute', 'right-2', 'bottom-2')}
            />
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
          <EditButton editUrl={partials.fileNames[i]} />
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
