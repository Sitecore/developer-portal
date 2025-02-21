import { Grid, GridItem } from '@chakra-ui/react';
import ChangelogByMonth from '@components/changelog/ChangelogByMonth';
import ChangelogList from '@components/changelog/ChangelogList';
import { Changelog } from '@lib/changelog';
import { Product } from '@lib/changelog/types';
import { getChangelogProductPaths } from '@lib/staticPaths';
import { getSlug, slugify } from '@lib/utils';
import Layout from '@src/layouts/Layout';

import { ChangelogFeeds } from '@/src/components/changelog/ChangelogFeeds';
import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { CenteredContent, Hero, VerticalGroup } from '@/src/components/ui/sections';
import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

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
  const changelog = new Changelog(getChangelogCredentials(), preview);
  const products = await changelog.getProducts().then((response: Array<Product>) => {
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
      <Layout title={title} description={description}>
        <Hero title={title} description={description}>
          {/* <HStack>
            <Text variant={'sm'}>Powered by</Text>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <Image
                src={useColorModeValue('https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-content_hub_one', 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-content_hub_one-dark')}
                alt="Powered by Content Hub ONE"
                width={150}
                height={18}
              />
            </Link>
          </HStack> */}
        </Hero>

        <VerticalGroup>
          <CenteredContent py={8} gap={8}>
            {/* <Alert status="info" alignItems="center">
              <AlertIcon />
              <Tooltip label="Go to the overview of current release notes" aria-label="A tooltip">
                <Link href="/changelog/current" title="View the list of current release notes per product">
                  You are viewing the Sitecore Cloud changelog. To see release notes for Sitecore products not yet listed here, click here.
                </Link>
              </Tooltip>
            </Alert> */}

            <Grid templateColumns="repeat(5, 1fr)" gap={14}>
              <GridItem colSpan={{ base: 5, md: 3 }}>
                <ChangelogList initialProduct={currentProduct} />
              </GridItem>
              <GridItem colSpan={{ base: 2 }} hideBelow={'md'}>
                <ChangelogFeeds url={getSlug(currentProduct.name)} />
                {/* <LinkButton text={'RSS'} href={`${getSlug(currentProduct.name)}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                <LinkButton text={'ATOM'} href={`${getSlug(currentProduct.name)}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} /> */}
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
