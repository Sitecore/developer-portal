import ChangelogSearchResults from '@/src/components/changelog/search/ChangelogSearchResults';
import { Alert, AlertIcon, Grid, GridItem, HStack, Hide, Text, Tooltip } from '@chakra-ui/react';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import Hero from 'ui/components/common/Hero';
import ProductLogo from 'ui/components/common/ProductLogo';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { ButtonLink } from 'ui/components/links/ButtonLink';
import { Product } from 'ui/lib/assets';

export default function ChangeSearchlogHome({ entries }: { entries: ChangelogEntry[] }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
          <HStack>
            <Text variant={'sm'}>Powered by</Text>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <ProductLogo product={Product.ContentHubOne} width={140} height={18} />
            </Link>
            <Text variant={'sm'}>and</Text>
            <Link href="/content-management/search" title="Visit the Sitecore Search product page to learn more">
              <ProductLogo product={Product.Search} width={66} height={18} />
            </Link>
          </HStack>
        </Hero>

        <VerticalGroup>
          <CenteredContent py={8} gap={8}>
            <Alert status="info" alignItems="center">
              <AlertIcon />
              <Tooltip label="Go to the overview of current release notes" aria-label="A tooltip">
                <Link href="/changelog/current" title="View the list of current release notes per product">
                  You are viewing the public preview of the upcoming Sitecore global changelog.
                </Link>
              </Tooltip>
            </Alert>
            <Grid templateColumns="repeat(5, 1fr)" gap={14}>
              <GridItem colSpan={{ base: 5, md: 3 }}>
                <ChangelogSearchResults entries={entries} />
              </GridItem>
              <Hide below="md">
                <GridItem colSpan={{ base: 2 }}>
                  <ButtonLink text={'RSS'} href={`${router.pathname}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <ButtonLink text={'ATOM'} href={`${router.pathname}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <p>Changes by month will appear in here!</p>
                </GridItem>
              </Hide>
            </Grid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const req = `{"context":{"page":{"uri":"/changelog-search"}},"widget":{"items":[{"entity":"content","rfk_id":"rfk_changelog","search":{"content":{},"facet":{"all":false,"types":[{"name":"changeTypeName"},{"name":"product_names"}]},"sort":{"value":[{"name":"release_date_desc"}]}}}]}}`;

  // Fetch data from external API
  const res = await fetch('https://discover.sitecorecloud.io/discover/v2/140623527', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY ?? '',
    },
    body: req, // body data type must match "Content-Type" header
  });
  const data = await res.json();
  const entries =
    data?.widgets[0]?.content.map((entry: any) => {
      return {
        id: entry.id,
        title: entry.title,
        name: entry.title,
        description: entry.description,
        breakingChange: entry.breakingChange,
        changeTypeName: entry.changeTypeName,
        releaseDate: entry.releaseDate,
        lightIcon: 'lightIcon',
        darkIcon: 'darkIcon',
        productName: entry.product_names[0],
        sitecoreProduct: [],
        readMoreLink: entry.url,
        fullArticle: entry.full_article,
        version: '1234',
        image: [],
        products: [],
        changeType: [],
      };
    }) ?? [];

  // Pass data to the page via props
  return { props: { entries } };
}
