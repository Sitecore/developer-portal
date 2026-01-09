'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@components/ui/dialog';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@components/ui/breadcrumb';
import { mdiDownload } from '@mdi/js';
import Icon from '@mdi/react';
import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { LinkButton } from '@/src/components/links';
import { CenteredContent, Hero, VerticalGroup } from '@/src/components/ui/sections';
import { SocialShare } from '@/src/components/ui/socialShare';
import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';
import { Changelog } from '@lib/changelog';
import { ChangelogEntry, Product } from '@lib/changelog/types';
import { getQueryArray } from '@/src/lib/utils/requests';
import { getSlug, slugify } from '@/src/lib/utils/stringUtil';
import { getChangelogEntryUrl } from '@/src/lib/utils/urlUtil';
import ChangelogByMonth from '@src/components/changelog/ChangelogByMonth';
import { ChangelogItemMeta } from '@src/components/changelog/ChangelogItemMeta';
import Layout from '@src/layouts/Layout';
import { Info } from 'lucide-react';

type ChangelogProps = {
  currentProduct: Product;
  changelogEntry: ChangelogEntry;
};

export async function getServerSideProps(context: any) {
  const product = context.params.product;
  const entry = getQueryArray(context.params.entry);

  const isPreview = context.preview || false;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  const products = await changelog.getProducts().then((response: Array<Product>) => {
    return response;
  });
  let changelogEntry;
  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);
  if (!currentProduct) {
    return {
      notFound: true,
    };
  }

  try {
    changelogEntry = entry.length == 2 ? await changelog.getEntryByTitleAndDate(entry[1], entry[0], currentProduct.id) : await changelog.getEntryByTitle(entry[0], currentProduct?.id);
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
  const [isOpen, setIsOpen] = useState(false);
  const title = `${currentProduct.name} Changelog`;
  const description = `Learn more about new versions, changes and improvements for ${currentProduct.name}`;

  return (
    <TrackPageView product={currentProduct}>
      <Layout title={changelogEntry.title} section={title} description={changelogEntry.title}>
        <Hero title={title} description={description}>
        </Hero>
        <VerticalGroup>
          <CenteredContent className="py-8 gap-8">
            <div className="grid grid-cols-5 gap-14">
              <div className="col-span-5 md:col-span-3">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/changelog">Changelog</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/changelog/${getSlug(currentProduct.name)}`}>{currentProduct.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                {/* The full changelog item */}
                <Card className="border-0 shadow-none mt-8 mb-16">
                  <CardHeader className="pb-4">
                    <h2 className="text-xl font-heading" id={getSlug(changelogEntry.title)}>
                      <Link href={getChangelogEntryUrl(changelogEntry)} title={changelogEntry.title} className="hover:underline">
                        {changelogEntry.title}
                      </Link>
                    </h2>

                    <ChangelogItemMeta item={changelogEntry} />

                    {changelogEntry.scheduled && (
                      <Alert variant="default" className="mt-4">
                        <Info className="h-4 w-4" />
                        <AlertDescription>This functionality has not been released yet</AlertDescription>
                      </Alert>
                    )}
                    {!changelogEntry.scheduled && changelogEntry.status && changelogEntry.status.identifier == 'in-progress' && (
                      <Alert variant="default" className="mt-4">
                        <Info className="h-4 w-4" />
                        <AlertDescription>This functionality is currently being deployed and might not be available to all customers yet</AlertDescription>
                      </Alert>
                    )}
                  </CardHeader>
                  <CardContent className="py-0">
                    {changelogEntry.image.length > 0 && changelogEntry.image[0].fileUrl && (
                      <>
                        <Image 
                          src={changelogEntry.image[0].fileUrl} 
                          alt={changelogEntry.title || ''} 
                          width={800}
                          height={400}
                          className="rounded-lg cursor-zoom-in mb-4 max-w-full" 
                          onClick={() => setIsOpen(true)}
                        />

                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                          <DialogContent className="max-w-6xl">
                            <DialogHeader>
                              <DialogTitle>{changelogEntry.title}</DialogTitle>
                            </DialogHeader>
                            <div className="flex items-center justify-center">
                              <Image src={changelogEntry.image[0].fileUrl} alt={changelogEntry.title || ''} width={1200} height={600} />
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsOpen(false)}>
                                Close
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </>
                    )}
                    <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: changelogEntry.description }} />

                    {changelogEntry.image.filter((img) => img.fileType?.includes('pdf')).length > 0 &&
                      changelogEntry.image
                        .filter((img) => img.fileType?.includes('pdf'))
                        .map((pdf, index) => {
                          return (
                            <LinkButton
                              key={index}
                              text="Download PDF"
                              variant="outline"
                              size="sm"
                              icon={<Icon path={mdiDownload} size={1} />}
                              href={pdf.fileUrl}
                              title={`Download the PDF ${pdf.name}`}
                            />
                          );
                        })}

                    {changelogEntry.fullArticle != null && (
                      <article className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: changelogEntry.fullArticle }} />
                    )}
                  </CardContent>
                  <CardFooter className={changelogEntry.readMoreLink ? 'justify-between' : 'justify-end'}>
                    {changelogEntry.readMoreLink && <LinkButton variant="ghost" href={changelogEntry.readMoreLink} text="Read more" title={`Read more about ${changelogEntry.title}`} />}
                    <SocialShare url={getChangelogEntryUrl(changelogEntry, true)} title={`${changelogEntry.title} - ${changelogEntry.productName} Changelog - Sitecore`} />
                  </CardFooter>
                </Card>
              </div>
              <div className="col-span-2 hidden md:block">
                <ChangelogByMonth product={currentProduct} />
              </div>
            </div>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default ChangelogProduct;
