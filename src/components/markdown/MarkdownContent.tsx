import { Alert, AlertDescription, AlertIcon, Card, CardBody, CardHeader, Heading, HStack, SimpleGrid, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Article, Download, Group, LinkItem, Promo, Repository, VideoPromo } from '@components/cards';
import { GroupItem } from '@components/cards/Group';
import { TextLink } from '@components/links';
import { NewsletterStory } from '@components/newsletter';
import { ImageModal } from '@components/ui/imageModal';
import { Row } from '@components/ui/sections';
import { YouTube } from '@components/video';
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import styles from './MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */
import { MarkdownIntro } from './MarkdownIntro';

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
            <SyntaxHighlighter style={a11yDark} language={lang} className="no-prose" PreTag={'div'} customStyle={{ background: 'inherit', display: 'inline-grid', width: '100%' }} wrapLongLines wrapLines>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>{children}</code>
          );
        },
        h2: (props) => <Heading as={'h2'} fontWeight={'400'} {...props} />,
        h3: (props) => <Heading as={'h3'} {...props} />,
        p: (props) => <Text variant={'large'} {...props} />,
        VideoPromo: VideoPromo,
        // CtaCard: CTACard,
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
        CardBody: CardBody,
        Alert: Alert,
        AlertIcon: AlertIcon,
        AlertDescription: AlertDescription,
        SimpleGrid: SimpleGrid,
        TextLink,
        HStack,
        Image: ImageModal,
        NewsletterStory,
        Introduction: MarkdownIntro,
        Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        Td,
        TableCaption,
        TableContainer,
        Tabs,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
      }}
    />
  );
}

export const DecoratedMarkdown = ({ children, disabledProse = false }: DecoratedMarkdownProps) => {
  if (disabledProse) {
    return CustomMdx(children);
  }

  return <Prose className={styles.richText}>{CustomMdx(children)}</Prose>;
};

export const RenderContent = ({ content }: MarkdownContentProps) => {
  if (content == null) {
    return <></>;
  }

  return <DecoratedMarkdown>{content}</DecoratedMarkdown>;
};
