import { ChangelogEntry } from "../types/changeLogEntry";

export type QuerySearchApiParams = {
  query: string;
}

export async function QuerySearchApi({ query }: QuerySearchApiParams): Promise<ChangelogEntry[]> {

  const res = await fetch('https://discover.sitecorecloud.io/discover/v2/140623527', {
    method: 'POST',
    headers: {
      Authorization: process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY ?? '',
    },
    body: query,
  });

  const data = await res.json();
  const entries =
    data?.widgets[0]?.content.map((entry: any) => {
      return {
        id: entry.id,
        title: entry.title,
        name: entry.title,
        description: entry.description,
        breakingChange: entry.breakingChange,
        changeTypeName: entry.changeTypeName,
        releaseDate: entry.releaseDate,
        productName: entry.product_names[0],
        sitecoreProduct: [],
        readMoreLink: entry.url,
        fullArticle: entry.full_article,
        image: entry.image ?? [],
        products: entry?.products.map((product: any) => {
          return {
            id: product.id,
            productName: product.productName,
            productDescription: product.productDescription,
            lightIcon: product.lightIcon,
            darkIcon: product.darkIcon
          }
        }) ?? [],
        changeType: [],
      };
    }) ?? [];
  return entries;
}