import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { Option } from '@/src/components/ui/dropdown';
import { CenteredContent, Hero, VerticalGroup } from '@/src/components/ui/sections';
import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import ChangelogByMonth from '@components/changelog/ChangelogByMonth';
import ChangelogList from '@components/changelog/ChangelogList';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SWRConfig } from 'swr';

import { ChangelogFeeds } from '@/src/components/changelog/ChangelogFeeds';
import Link from 'next/link';
import { Changelog } from '../../lib/changelog/changelog';

type ChangelogHomeProps = {
  fallback: any;
  preview: boolean;
};

export default function ChangelogHome({ fallback }: ChangelogHomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<Array<Option>>([]);

  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <TrackPageView>
        <Layout title="Changelog" description="Learn more about new versions, changes and improvements">
          <Hero title="Changelog">
            <Text as="h2" color={'neutral'} fontSize={{ base: 'sm', md: 'md' }} fontFamily={'"DM Sans", sans-serif'} fontWeight={'normal'} letterSpacing={'0.5'}>
              This changelog provides visibility into key product updates, including new features, enhancements, resolutions and architectural improvements. Some bug fixes and backend adjustments may not be listed here. If you have a specific bug fix
              that you want to follow, please visit&nbsp;
              <Link href="https://support.sitecore.com" title="Go to the support portal" target="_blank" style={{ textDecoration: 'underline' }}>
                https://support.sitecore.com
              </Link>
            </Text>
          </Hero>

          <VerticalGroup>
            <CenteredContent py={8} gap={8}>
              {/* <Alert status="info" alignItems="center">
                <AlertIcon />

              </Alert> */}
              <Grid templateColumns="repeat(5, 1fr)" gap={14}>
                <GridItem colSpan={{ base: 5, md: 3 }}>
                  <SWRConfig value={{ fallback }}>
                    <ChangelogList selectedProducts={selectedProduct} onProductsChange={setSelectedProduct} />
                  </SWRConfig>
                </GridItem>

                <GridItem colSpan={{ base: 2 }} hideBelow={'md'}>
                  <ChangelogFeeds url={router.pathname} />
                  {/* <LinkButton text={'RSS'} href={`${router.pathname}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <LinkButton text={'ATOM'} href={`${router.pathname}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} /> */}
                  <ChangelogByMonth product={undefined} selectedProducts={selectedProduct} />
                </GridItem>
              </Grid>
            </CenteredContent>
          </VerticalGroup>
        </Layout>
      </TrackPageView>
    </>
  );
}

export async function getStaticProps(context: any) {
  const isPreview = context.preview ? context.preview : null;

  const changelog = new Changelog(getChangelogCredentials(), isPreview);
  const entries = await changelog.getEntriesPaginated('5', '', '', '');

  return {
    props: {
      fallback: {
        '/api/changelog/v1?limit=5': entries,
      },
      preview: isPreview,
    },
    revalidate: 60,
  };
}
