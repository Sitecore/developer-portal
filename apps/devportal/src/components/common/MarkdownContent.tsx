// Global
import { MDXRemote } from 'next-mdx-remote';
import { useEffect, useState } from 'react';
import SyntaxHighlight from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// Interfaces
import type { PartialData } from '@/src/interfaces/page-info';
// Lib
import EditButton from 'ui/components/buttons/EditButton';
import { Row } from 'ui/components/common/Row';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import { TabItem, Tabs } from 'ui/components/tabs';
import VideoPromo from 'ui/components/video/videoPromo';
import YouTube from 'ui/components/video/YouTube';
import { Article } from '../cards/Article';
import CTACard from '../cards/CTACard';
import { LinkItem } from '../cards/LinkItem';
import { Promo } from '../cards/PromoCard';
import { Repository } from '../cards/Repository';

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

const MarkdownContent = ({ partials, hasGrid = false }: MarkdownContentProps): JSX.Element => {
  if (hasGrid) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {partials.content.map((item, i) => (
          <div
            className="relative max-w-4xl p-8 prose border dark:prose-invert border-theme-border bg-theme-bg text-theme-text"
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
          <div className="max-w-4xl prose dark:prose-invert">
            <DecoratedMarkdown>{item}</DecoratedMarkdown>
          </div>
          <EditButton editUrl={partials.fileNames[i]} />
        </div>
      ))}
    </VerticalGroup>
  );
};

export default MarkdownContent;
