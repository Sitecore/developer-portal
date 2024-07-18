import { Alert, AlertIcon, Box, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, HStack, Heading, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { PagePartialGroup, PartialData } from '@lib/interfaces/page-info';
import { mdiSquareEditOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Article, Download, Group, LinkItem, Repository } from '../cards';
import { GroupItem } from '../cards/Group';
import { Row } from '../helpers';
import { ImageModal } from '../images';
import { ButtonLink, TextLink } from '../links';
import { NewsletterStory } from '../newsletter';
import { Promo, VideoPromo } from '../promos';
import { YouTube } from '../video';
import styles from './MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */
import { MarkdownIntro } from './MarkdownIntro';

const { a11yDark } = require('react-syntax-highlighter/dist/cjs/styles/hljs');

type MarkdownContentProps = {
  content?: string;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
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
  // const [isDark, setIsLight] = useState(false);

  // useEffect(() => {
  //   setIsLight(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  // }, []);

  if (disabledProse) return CustomMdx(children);

  return <Prose className={styles.richText}>{CustomMdx(children)}</Prose>;
};

export const MarkDownContent = ({ content, partials, partialGroups }: MarkdownContentProps): JSX.Element => (
  <>
    <RenderContent content={content} />
    <RenderPartialGroups partialGroups={partialGroups} />
    <RenderPartials partials={partials} />
  </>
);

export const RenderContent = ({ content }: MarkdownContentProps): JSX.Element => {
  if (content == null) return <></>;

  return <DecoratedMarkdown>{content}</DecoratedMarkdown>;
};

export const RenderPartials = ({ partials }: MarkdownContentProps): JSX.Element => {
  return (
    <>
      {partials && partials.content.length > 0 && (
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          {partials?.content.map((item, i) => RenderPartial({ key: i.toString(), item: item, fileName: partials.fileNames[i] }))}
        </Grid>
      )}
    </>
  );
};

export const RenderPartialGroups = ({ partialGroups }: MarkdownContentProps): JSX.Element => {
  if (partialGroups == null || partialGroups.length == 0) return <></>;

  return (
    <>
      {/** Render the partialgroups  */}
      {partialGroups != null &&
        partialGroups.length > 0 &&
        partialGroups.map((partialGroup, i) => (
          <Box key={i}>
            <Heading as={'h2'} key={i} size={'xl'} mb={4} mt={{ base: 0, md: 8 }}>
              {partialGroup.title}
            </Heading>
            {partialGroup.description && (
              <Text variant={'large'} mb={4}>
                {partialGroup.description}
              </Text>
            )}
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
              {partialGroup.partials.content.map((item, key) => RenderPartial({ key: key.toString(), item: item, fileName: partialGroup.partials.fileNames[key] }))}
            </Grid>
          </Box>
        ))}
    </>
  );
};

const MarkdownContent = ({ content, partials, partialGroups }: MarkdownContentProps): JSX.Element => {
  return (
    <>
      {/** Render the page content  */}
      {content != null && <DecoratedMarkdown>{content}</DecoratedMarkdown>}

      {/** Render the partialgroups  */}
      {partialGroups != null &&
        partialGroups.length > 0 &&
        partialGroups.map((partialGroup, i) => (
          <Box key={i} data-component="partialgroup">
            <Heading as={'h2'} key={i} size={'xl'} mb={4} mt={8} fontWeight={400}>
              {partialGroup.title}
            </Heading>
            {partialGroup.description && (
              <Text variant={'large'} mb={4}>
                {partialGroup.description}
              </Text>
            )}
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {partialGroup.partials.content.map((item, key) => RenderPartial({ key: key.toString(), item: item, fileName: partialGroup.partials.fileNames[key] }))}
            </Grid>
          </Box>
        ))}
      {/** Render the partials  */}
      {partials && partials.content.length > 0 && (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {partials?.content.map((item, i) => RenderPartial({ key: i.toString(), item: item, fileName: partials.fileNames[i] }))}
        </Grid>
      )}
    </>
  );
};

const RenderPartial = ({ key, item, fileName }: { key: string; item: string; fileName: string }): JSX.Element => {
  return (
    <GridItem key={key}>
      <Card height={'100%'}>
        <CardBody>
          <DecoratedMarkdown>{item}</DecoratedMarkdown>
        </CardBody>
        <CardFooter justifyContent={'end'}>
          <ButtonLink href={fileName} text="Suggest an edit" variant={'link'} size={'xs'} icon={<Icon path={mdiSquareEditOutline} size={0.8} />} colorScheme="neutral" />
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default MarkdownContent;
