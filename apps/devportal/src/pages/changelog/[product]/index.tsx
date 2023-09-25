import { Alert, AlertDescription, AlertIcon, AlertTitle, Grid, GridItem, HStack, Hide, Text, useColorModeValue } from '@chakra-ui/react';
import ChangelogByMonth from '@components/changelog/ChangelogByMonth';
import ChangelogList from '@components/changelog/ChangelogList';
import { getChangelogProductPaths } from '@lib/staticPaths';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import Layout from '@src/layouts/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GetProducts from 'sc-changelog/products';
import { Product } from 'sc-changelog/types';
import { slugify } from 'sc-changelog/utils/stringUtils';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { ButtonLink } from 'ui/components/links/ButtonLink';

type ChangelogProps = {
  currentProduct: Product;
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
    },
    revalidate: 60,
  };
}

const ChangelogProduct = ({ currentProduct }: ChangelogProps) => {
  const router = useRouter();
  const title = `${currentProduct.name} Changelog`;
  const description = `Learn more about new versions, changes and improvements for ${currentProduct.name}`;

  return (
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
              <ChangelogList initialProduct={currentProduct} />
            </GridItem>
            <Hide below="md">
              <GridItem colSpan={2}>
                <ButtonLink text={'RSS'} href={`${router.asPath}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                <ButtonLink text={'ATOM'} href={`${router.asPath}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                <ChangelogByMonth product={currentProduct} />
              </GridItem>
            </Hide>
          </Grid>
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};
export default ChangelogProduct;
