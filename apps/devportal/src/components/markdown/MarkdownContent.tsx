// Global
import { Alert, AlertIcon, Box, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { PagePartialGroup, PartialData } from '@lib/interfaces/page-info';
import { mdiSquareEditOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { MDXRemote } from 'next-mdx-remote';
import { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { Article, LinkItem, Repository } from 'ui/components/cards';
import { Row } from 'ui/components/helpers/Row';
import { ButtonLink } from 'ui/components/links/ButtonLink';
import { Promo, VideoPromo } from 'ui/components/promos';
import YouTube from 'ui/components/video/YouTube';

import { Download } from 'ui/components/cards/Download';
import { Group } from 'ui/components/cards/Group';
import { TextLink } from 'ui/components/links/TextLink';
import styles from './MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { a11yDark } = require('react-syntax-highlighter/dist/cjs/styles/hljs');

type MarkdownContentProps = {
  content?: string;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
};

type DecoratedMarkdownProps = {
  children: string;
};

export const DecoratedMarkdown = ({ children }: DecoratedMarkdownProps): JSX.Element => {
  // const [isDark, setIsLight] = useState(false);

  // useEffect(() => {
  //   setIsLight(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  // }, []);

  return (
    <Prose className={styles.richText}>
      <MDXRemote
        scope={''}
        frontmatter={undefined}
        compiledSource={children}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || '');
            const lang = match ? match[1] : '';
            return match ? (
              <SyntaxHighlight style={a11yDark} language={lang} className="no-prose" PreTag={'div'} customStyle={{ background: 'inherit', display: 'inline-grid', width: '100%' }} wrapLongLines wrapLines>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlight>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          //h3: Heading,
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
          Card: Card,
          CardHeader: CardHeader,
          CardBody: CardBody,
          Alert: Alert,
          AlertIcon: AlertIcon,
          TextLink,
        }}
      />
    </Prose>
  );
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
