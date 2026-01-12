import { Alert, AlertDescription } from '@src/components/ui/alert';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

// Dynamically import react-syntax-highlighter to reduce initial bundle size
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then((mod) => mod.default), {
  ssr: false,
  loading: () => <code className="block p-4 bg-muted rounded animate-pulse" />,
});

import { cn } from '@/src/lib/util';
import { Article, Download, Group, LinkItem, Promo, Repository, VideoPromo } from '@src/components/cards';
import { GroupItem } from '@src/components/cards/Group';
import { TextLink } from '@src/components/links';
import { NewsletterStory } from '@src/components/newsletter';
import { Card, CardContent, CardHeader } from '@src/components/ui/card';
import { ImageModal } from '@src/components/ui/imageModal';
import { Row } from '@src/components/ui/sections';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@src/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@src/components/ui/tabs';
import { YouTube } from '@src/components/video';
import styles from './MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */
import { MarkdownIntro } from './MarkdownIntro';

// Dynamically load syntax highlighter styles
let a11yDark: any;
if (typeof window !== 'undefined') {
  a11yDark = require('react-syntax-highlighter/dist/cjs/styles/hljs').a11yDark;
}

type MarkdownContentProps = {
  content?: string;
};

type DecoratedMarkdownProps = {
  children: string;
  disabledProse?: boolean;
};

function CustomMdx(children: string) {
  return (
    <MDXRemote
      scope={''}
      frontmatter={undefined}
      compiledSource={children}
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const lang = match ? match[1] : '';

          return match ? (
            <SyntaxHighlighter
              style={a11yDark || {}}
              language={lang}
              className="no-prose"
              PreTag={'div'}
              customStyle={{
                background: 'inherit',
                display: 'inline-grid',
                width: '100%',
              }}
              wrapLongLines
              wrapLines
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>{children}</code>
          );
        },
        h2: (props: any) => <h2 className="text-3xl md:text-4xl font-heading font-semibold" {...props} />,
        h3: (props: any) => <h3 className="text-2xl md:text-3xl font-heading font-medium" {...props} />,
        h4: (props: any) => <h4 className="text-lg md:text-xl font-heading font-bold mt-4 mb-2" {...props} />,
        p: (props: any) => <p className="text-base leading-6 mb-6" {...props} />,
        VideoPromo: VideoPromo,
        Promo: Promo,
        YouTube: YouTube,
        Row: Row,
        Repository: Repository,
        Article: Article,
        Link: LinkItem,
        Download: Download,
        Group: Group,
        GroupItem: GroupItem,
        Card: Card,
        CardHeader: CardHeader,
        CardContent: CardContent,
        CardBody: CardContent, // Alias for backward compatibility with markdown files
        Alert: ({ children, status, ...props }: any) => (
          <Alert variant={status === 'error' ? 'destructive' : 'default'} {...props}>
            <AlertDescription>{children}</AlertDescription>
          </Alert>
        ),
        AlertIcon: () => null, // Handled by Alert component
        AlertDescription: AlertDescription,
        SimpleGrid: ({ children, columns, gap, ...props }: any) => <div className={cn('grid', `grid-cols-1 md:grid-cols-${columns || 2}`, `gap-${gap || 4}`, props.className)}>{children}</div>,
        TextLink,
        HStack: ({ children, ...props }: any) => <div className={cn('flex flex-row items-center gap-2', props.className)}>{children}</div>,
        Image: ImageModal,
        NewsletterStory,
        Introduction: MarkdownIntro,

        Tabs: ({ children, ...props }: any) => <Tabs {...props}>{children}</Tabs>,
        TabList: ({ children, ...props }: any) => <TabsList {...props}>{children}</TabsList>,
        Tab: ({ children, ...props }: any) => <TabsTrigger {...props}>{children}</TabsTrigger>,
        TabPanels: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        TabPanel: ({ children, ...props }: any) => <TabsContent {...props}>{children}</TabsContent>,
        table: ({ children, ...props }: any) => (
          <Table {...props} className="border-collapse">
            {children}
          </Table>
        ),
        thead: ({ children, ...props }: any) => (
          <TableHeader className="bg-primary dark:bg-neutral-800" {...props}>
            {children}
          </TableHeader>
        ),
        tbody: ({ children, ...props }: any) => (
          <TableBody className="bg-primary/5 dark:bg-neutral-800" {...props}>
            {children}
          </TableBody>
        ),
        tfoot: ({ children, ...props }: any) => (
          <TableFooter className="border-t border-border" {...props}>
            {children}
          </TableFooter>
        ),
        tr: ({ children, ...props }: any) => (
          <TableRow className="border-b border-border even:bg-primary/5 dark:even:bg-neutral-800" {...props}>
            {children}
          </TableRow>
        ),
        th: ({ children, ...props }: any) => (
          <TableHead className="text-left text-white text-base font-semibold p-2 md:p-3 ps-2!" {...props}>
            {children}
          </TableHead>
        ),
        td: ({ children, ...props }: any) => (
          <TableCell
            className="p-2 md:p-3 align-baseline text-base whitespace-break-spaces ps-2!
"
            {...props}
          >
            {children}
          </TableCell>
        ),
        caption: ({ children, ...props }: any) => (
          <TableCaption className="mt-4 text-muted-foreground text-sm" {...props}>
            {children}
          </TableCaption>
        ),
      }}
    />
  );
}

export const DecoratedMarkdown = ({ children, disabledProse = false }: DecoratedMarkdownProps) => {
  if (disabledProse) {
    return CustomMdx(children);
  }

  return <div className={cn('prose prose-lg max-w-none', styles.richText)}>{CustomMdx(children)}</div>;
};

export const RenderContent = ({ content }: MarkdownContentProps) => {
  if (content == null) {
    return null;
  }

  return <DecoratedMarkdown>{content}</DecoratedMarkdown>;
};
