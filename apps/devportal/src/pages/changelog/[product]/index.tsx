import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { Alert, AlertIcon, Grid, GridItem, HStack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import ChangelogByMonth from '@components/changelog/ChangelogByMonth';
import ChangelogList from '@components/changelog/ChangelogList';
import { getChangelogProductPaths } from '@lib/staticPaths';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import Layout from '@src/layouts/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { GetProducts } from '@scdp/changelog';
import { Product } from '@scdp/changelog/types';
import { getSlug, slugify } from '@scdp/changelog/utils';
import { Hero } from '@scdp/ui/components';
import { CenteredContent, VerticalGroup } from '@scdp/ui/components';
import { ButtonLink } from '@scdp/ui/components';

type ChangelogProps = {
  currentProduct: Product;
  preview: boolean;
};

export async function getStaticPaths() {
  const paths = await getChangelogProductPaths();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const preview = context.preview ? context.preview : null;
  const products = await GetProducts(preview).then((response: Product[]) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  return {
    props: {
      currentProduct: currentProduct,
      preview: preview,
    },
    revalidate: 60,
  };
}

const ChangelogProduct = ({ currentProduct }: ChangelogProps) => {
  const title = `${currentProduct.name} Changelog`;
  const description = `Learn more about new versions, changes and improvements for ${currentProduct.name}`;

  return (
    <TrackPageView product={currentProduct}>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title={title} description={description}>
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
                  You are viewing the Sitecore Cloud changelog. To see release notes for Sitecore products not yet listed here, click here.
                </Link>
              </Tooltip>
            </Alert>

            <Grid templateColumns="repeat(5, 1fr)" gap={14}>
              <GridItem colSpan={{ base: 5, md: 3 }}>
                <ChangelogList initialProduct={currentProduct} />
              </GridItem>
              <GridItem colSpan={{ base: 2 }} hideBelow={'md'}>
                <ButtonLink text={'RSS'} href={`${getSlug(currentProduct.name)}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                <ButtonLink text={'ATOM'} href={`${getSlug(currentProduct.name)}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                <ChangelogByMonth product={currentProduct} />
              </GridItem>
            </Grid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};
export default ChangelogProduct;
