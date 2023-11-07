import { Alert, AlertIcon, Grid, GridItem, HStack, Hide, Image, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import ChangelogByMonth from '@components/changelog/ChangelogByMonth';
import ChangelogList from '@components/changelog/ChangelogList';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { SWRConfig } from 'swr';
import Hero from 'ui/components/common/Hero';
import { Option } from 'ui/components/dropdown/MultiSelect';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { ButtonLink } from 'ui/components/links/ButtonLink';

type ChangelogHomeProps = {
  fallback: any;
  preview: boolean;
};

export default function ChangelogHome({ fallback, preview }: ChangelogHomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);

  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements" preview={preview}>
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
          <HStack>
            <Text variant={'sm'}>Powered by</Text>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <Image
                src={useColorModeValue('https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e', 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5e8689d29cc4ef49a74b96e2149af13')}
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
                  You are viewing the public preview of the upcoming Sitecore global changelog.
                </Link>
              </Tooltip>
            </Alert>
            <Grid templateColumns="repeat(5, 1fr)" gap={14}>
              <GridItem colSpan={{ base: 5, md: 3 }}>
                <SWRConfig value={{ fallback }}>
                  <ChangelogList selectedProducts={selectedProduct} onProductsChange={setSelectedProduct} />
                </SWRConfig>
              </GridItem>
              <Hide below="md">
                <GridItem colSpan={{ base: 2 }}>
                  <ButtonLink text={'RSS'} href={`${router.pathname}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <ButtonLink text={'ATOM'} href={`${router.pathname}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <ChangelogByMonth product={undefined} selectedProducts={selectedProduct} />
                </GridItem>
              </Hide>
            </Grid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </>
  );
}

export async function getStaticProps(context: any) {
  const isPreview = context.preview ? context.preview : null;
  const entries = await ChangelogEntriesPaginated(isPreview, '5', '', '', '');

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
