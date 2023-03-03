import { getProductChangeLogEntryPaths } from '@/src/common/static-paths';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import Image from 'next/image';
import { ChangelogEntryByTitle } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import Container from 'ui/components/common/Container';
import ProductIcon from 'ui/components/common/ProductIcon';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

export async function getStaticPaths() {
  const productPaths = await getProductChangeLogEntryPaths();

  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const changeType = context.params.changeType;
  const entry = context.params.entry;

  const currentProduct: ProductConfig | undefined = Products.find((x) => getSlug(x.name) == product);
  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => getSlug(x.name) == changeType);
  const entryPhrase = entry.replaceAll('-', ' ');

  const changelogEntry = await ChangelogEntryByTitle(entryPhrase, currentProduct?.entityId, currentChangeType?.entityId);

  return {
    props: {
      currentProduct,
      currentChangeType,
      changelogEntry,
    },
    revalidate: 600, // 10 minutes
  };
}

type ChangelogProps = {
  currentProduct: ProductConfig;
  currentChangeType: ChangeTypeConfig;
  changelogEntry: ChangelogEntry;
};

const ChangelogHome = ({ currentProduct, currentChangeType, changelogEntry }: ChangelogProps) => {
  return (
    <Layout title={`Release Notes ${currentProduct.name}`} description="Empty">
      <Hero title={`${currentProduct.name} Changelog`} description={`Learn more about new versions, changes and improvements we made to ${currentProduct.name}`} />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid auto-cols-max gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <nav className="mt-4 mb-8 flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <a href="/changelog" className="text-theme-text-alt inline-flex items-center text-sm font-medium">
                      Changelog
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="text-theme-text-alt h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <a href={`/changelog/${getSlug(currentProduct.name)}`} className="text-theme-text-alt ml-1 text-sm font-medium md:ml-2">
                        {currentProduct.name}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="text-theme-text-alt h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <a href={`/changelog/${getSlug(currentProduct.name)}/${getSlug(currentChangeType.name)}`} className="text-theme-text-alt ml-1 text-sm font-medium md:ml-2">
                        {currentChangeType.name}
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <h2 className={`heading-sm font-bolder`}>{changelogEntry.title}</h2>
              <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-5">
                  <div className={`text-sm`}>
                    {changelogEntry.imageId && (
                      <>
                        <div className="absolute h-5 w-5 dark:hidden">
                          <ProductIcon product={changelogEntry.imageId} variant="Light" className={`relative h-5 w-5 `} />
                        </div>
                        <div className="absolute hidden h-5 w-5 dark:block">
                          <ProductIcon product={changelogEntry.imageId} variant="Dark" className={`relative h-5 w-5`} />
                        </div>
                      </>
                    )}
                    <div className="ml-6 text-xs">{changelogEntry.sitecoreProduct[0].name}</div>
                  </div>
                  <time className={`text-xs`} dateTime="2022-10-21T15:48:00.000Z">
                    {changelogEntry.releaseDate}
                  </time>
                  <div>
                    <span className={`bg-theme-bg-alt py-1'} inline-block rounded-md px-3 text-xs`}>{changelogEntry.changeType[0].name}</span>
                  </div>
                </div>
              </div>
              {changelogEntry.image.length > 0 && (
                <div className={`relative my-4 h-40 w-full`}>
                  <Image src={changelogEntry.image[0].fileUrl} alt={changelogEntry.title || ''} className="relative z-10 rounded-lg" fill sizes="100vw" style={{ objectFit: 'cover' }} />
                </div>
              )}

              <div className={`my-3 text-sm`} dangerouslySetInnerHTML={{ __html: changelogEntry.description }} />
            </div>
            <div className="col-span-2">
              <ChangelogByMonth />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default ChangelogHome;
