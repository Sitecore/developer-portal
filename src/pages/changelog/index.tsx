import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertIcon, Grid, GridItem, HStack, Image, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import ChangelogByMonth from '@components/changelog/ChangelogByMonth';
import ChangelogList from '@components/changelog/ChangelogList';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SWRConfig } from 'swr';

import { Hero } from '@/src/components/common';
import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { ButtonLink } from '@/src/components/links';
import { CenteredContent, VerticalGroup } from '@/src/components/ui';
import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

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
        <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
          <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
            <HStack>
              <Text variant={'sm'}>Powered by</Text>
              <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
                <Image
                  src={useColorModeValue('https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-content_hub_one', 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-content_hub_one-dark')}
                  alt="Powered by Content Hub ONE"
                  width={150}
                  height={18}
                />
              </Link>
            </HStack>
          </Hero>

          <VerticalGroup>
            <CenteredContent py={8} gap={8}>
              <Alert status="info" alignItems="center">
                <AlertIcon />
                <Tooltip label="Go to the overview of current release notes" aria-label="A tooltip">
                  <Link href="/changelog/current" title="View the list of current release notes per product">
                    You are viewing the Sitecore Cloud changelog. To see release notes for Sitecore products not yet listed here, click here.
                  </Link>
                </Tooltip>
              </Alert>
              <Grid templateColumns="repeat(5, 1fr)" gap={14}>
                <GridItem colSpan={{ base: 5, md: 3 }}>
                  <SWRConfig value={{ fallback }}>
                    <ChangelogList selectedProducts={selectedProduct} onProductsChange={setSelectedProduct} />
                  </SWRConfig>
                </GridItem>

                <GridItem colSpan={{ base: 2 }} hideBelow={'md'}>
                  <ButtonLink text={'RSS'} href={`${router.pathname}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <ButtonLink text={'ATOM'} href={`${router.pathname}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
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
