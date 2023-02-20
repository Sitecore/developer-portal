// Global
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useState } from 'react';
import SyntaxHighlight from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// Interfaces
import type { PartialData } from '@/src/interfaces/page-info';
// Lib
import VideoPromo from '@/src/components/videoPromo/index';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { Article } from '../cards/Article';
import CTACard from '../cards/CTACard';
import { LinkItem } from '../cards/LinkItem';
import { Promo } from '../cards/PromoCard';
import { Repository } from '../cards/Repository';
import { Row } from '../common/Row';
import { TabItem, Tabs } from '../tabs';
import YouTube from './YouTube';

type MarkdownContentProps = {
  partials: PartialData;
  hasGrid?: boolean;
};

type DecoratedMarkdownProps = {
  children: string;
};

type EditButtonProps = {
  editUrl: string;
  classes?: string;
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
            <div className="not-prose">
              <SyntaxHighlight style={style} language={lang} PreTag="div">
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlight>
            </div>
          ) : (
            <code className={className}>{children}</code>
          );
        },
        VideoPromo: VideoPromo,
        CtaCard: CTACard,
        Promo: Promo,
        YouTube: YouTube,
        Row: Row,
        Tabs: Tabs,
        TabItem: TabItem,
        Repository: Repository,
        Article: Article,
        Link: LinkItem,
      }}
    />
  );
};

function EditButton({ editUrl, classes }: EditButtonProps) {
  return (
    <button className={`btn-textlink ${classes ? classes : ''}`}>
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
      <div className="grid gap-6 md:grid-cols-2">
        {partials.content.map((item, i) => (
          <div
            className="prose dark:prose-invert border-theme-border bg-theme-bg text-theme-text relative max-w-4xl border p-8"
            key={i}
          >
            <DecoratedMarkdown>{item}</DecoratedMarkdown>
            <EditButton editUrl={partials.fileNames[i]} classes="absolute right-2 bottom-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <VerticalGroup>
      {partials.content.map((item, i) => (
        <div key={i}>
          <div className="prose dark:prose-invert max-w-4xl">
            <DecoratedMarkdown>{item}</DecoratedMarkdown>
          </div>
          <EditButton editUrl={partials.fileNames[i]} />
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
