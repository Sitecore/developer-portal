import { Alert, AlertIcon, Card, CardBody, CardHeader, HStack, Heading, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Article, Download, Group, LinkItem, Repository } from '../cards';
import { GroupItem } from '../cards/Group';
import { Row } from '../helpers';
import { ImageModal } from '../images';
import { TextLink } from '../links';
import { NewsletterStory } from '../newsletter';
import { Promo, VideoPromo } from '../promos';
import { YouTube } from '../video';
import styles from './MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */
import { MarkdownIntro } from './MarkdownIntro';

const { a11yDark } = require('react-syntax-highlighter/dist/cjs/styles/hljs');

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
        h2: (props) => <Heading as={'h2'} {...props} />,
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
      }}
    />
  );
}

export const DecoratedMarkdown = ({ children, disabledProse = false }: DecoratedMarkdownProps): JSX.Element => {
  if (disabledProse) return CustomMdx(children);

  return <Prose className={styles.richText}>{CustomMdx(children)}</Prose>;
};

export const RenderContent = ({ content }: MarkdownContentProps): JSX.Element => {
  if (content == null) return <></>;

  return <DecoratedMarkdown>{content}</DecoratedMarkdown>;
};
