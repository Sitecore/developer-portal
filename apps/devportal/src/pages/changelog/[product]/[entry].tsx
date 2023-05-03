import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import { ChangelogItemMeta } from '@/src/components/changelog/ChangelogItemMeta';
import Image from 'next/image';
import Link from 'next/link';
import { ChangelogEntryByTitle } from 'sc-changelog/changelog';
import GetProducts from 'sc-changelog/products';
import { Product } from 'sc-changelog/types';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug, slugify } from 'sc-changelog/utils/stringUtils';
import Container from 'ui/components/common/Container';
import { Message, Type } from 'ui/components/common/Message';
import TextLink from 'ui/components/common/TextLink';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

type ChangelogProps = {
  currentProduct: Product;
  changelogEntry: ChangelogEntry;
};

export async function getServerSideProps(context: any) {
  const product = context.params.product;
  const entry = context.params.entry;
  const preview = context.preview ? context.preview : null;

  const products = await GetProducts(preview).then((response: Product[]) => {
    return response;
  });
  let changelogEntry;
  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);
  try {
    changelogEntry = await ChangelogEntryByTitle(preview, entry, currentProduct?.id);
  } catch {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      currentProduct: currentProduct,
      changelogEntry: changelogEntry,
    },
  };
}

const ChangelogProduct = ({ currentProduct, changelogEntry }: ChangelogProps) => {
  return (
    <Layout title={`${currentProduct.name} Changelog`} description="Empty">
      <Hero title={`${currentProduct.name} Changelog`} description={`Learn more about new versions, changes and improvements we made to ${currentProduct.name}`}>
        <div className="absolute flex h-8 flex-row dark:hidden">
          <span className="mr-1 text-xs">Powered by</span>
          <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
            <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
          </Link>
        </div>
        <div className="absolute hidden h-8 flex-row dark:flex">
          <span className="mr-1 text-xs">Powered by</span>
          <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
            <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5e8689d29cc4ef49a74b96e2149af13" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
          </Link>
        </div>
      </Hero>
      <VerticalGroup>
        <Container>
          <Message type={Type.Info} className="mt-8">
            <p>
              You are viewing the public preview of the upcoming Sitecore global changelog.
              <Link href="/changelog/current" title="View the list of current release notes per product" className="mx-1 font-bold hover:underline">
                Click here
              </Link>
              for the current release notes per product
            </p>
          </Message>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="changelog-item col-span-3">
              <nav className="mb-8 mt-4 flex" aria-label="Breadcrumb">
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
                </ol>
              </nav>

              <h2 className={`heading-sm font-bolder`}>{changelogEntry.title}</h2>
              <ChangelogItemMeta item={changelogEntry} />
              {changelogEntry.image.length > 0 && (
                <div className={`'w-12' my-4 `}>
                  <Image src={`${changelogEntry.image[0].fileUrl}?transform=true&width=620&fit=cover&gravity=auto`} alt={changelogEntry.title || ''} className={`relative z-10 rounded-lg`} width={620} height={100} />
                </div>
              )}

              <div className={`prose dark:prose-invert my-3 max-w-none text-sm`} dangerouslySetInnerHTML={{ __html: changelogEntry.description }} />
              {changelogEntry.fullArticle && <div className={`prose dark:prose-invert my-3 max-w-none text-sm`} dangerouslySetInnerHTML={{ __html: changelogEntry.fullArticle }} />}

              {changelogEntry.readMoreLink && <TextLink className="font-medium" href={changelogEntry.readMoreLink} text="Read more" title={`Read more about ${changelogEntry.title}`} />}
            </div>
            <div className="col-span-2 hidden md:block">
              <ChangelogByMonth product={currentProduct} />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default ChangelogProduct;
