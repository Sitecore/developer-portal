import { Alert, AlertDescription, AlertIcon, AlertTitle, Grid, GridItem, HStack, Hide, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { SWRConfig } from 'swr';
import { Option } from 'ui/components/dropdown/MultiSelect';
import Hero from '../../components/Hero';
import ChangelogByMonth from '../../components/changelog/ChangelogByMonth';
import ChangelogList from '../../components/changelog/ChangelogList';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { CenteredContent } from '../../components/ui/CenteredContent';
import { VerticalGroup } from '../../components/ui/VerticalGroup';
import Layout from '../../layouts/Layout';

type ChangelogHomeProps = {
  fallback: any;
  preview: boolean;
};

export default function ChangelogHome({ fallback }: ChangelogHomeProps) {
  const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);

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
            <Alert status="info">
              <AlertIcon />
              <AlertTitle>You are viewing the public preview of the upcoming Sitecore global changelog.</AlertTitle>
              <AlertDescription>
                <Link href="/changelog/current" title="View the list of current release notes per product">
                  Click here for the current release notes per product
                </Link>
              </AlertDescription>
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
