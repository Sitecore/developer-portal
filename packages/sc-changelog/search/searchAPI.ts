import { ChangeLogSearchFacet, QuerySearchApiParams, QuerySearchApiResult } from "./types";

export async function QuerySearchApi({ query, selectedFacets }: QuerySearchApiParams): Promise<QuerySearchApiResult> {

  const response = await fetch('https://discover.sitecorecloud.io/discover/v2/140623527', {
    method: 'POST',
    headers: {
      Authorization: process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY ?? '',
    },
    body: query,
  });

  return await BindResponse(response, selectedFacets);
}

export async function BindResponse(response: Response, selectedFacets: ChangeLogSearchFacet[]): Promise<QuerySearchApiResult> {
  const data = await response.json();

  const entries = data?.widgets[0]?.content.map((entry: any) => {
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

  const entriesByMonth = data?.widgets[1]?.content.map((entry: any) => {
    return {
      id: entry.id,
      title: entry.title,
      releaseDate: entry.releaseDate,
      lightIcon: entry?.products[0]?.lightIcon,
      darkIcon: entry?.products[0]?.darkIcon,
      productName: entry.product_names[0],
      products: entry?.products.map((product: any) => {
        return {
          id: product.id,
          productName: product.productName,
          productDescription: product.productDescription,
          lightIcon: product.lightIcon,
          darkIcon: product.darkIcon
        }
      }) ?? [],
      changeTypeName: entry.changeTypeName,
    };
  }) ?? [];

  const facets = data?.widgets[0]?.facet.map((facet: any) => {
    return {
      name: facet.name,
      label: facet.label,
      value: facet.value.map((value: any) => {
        return {
          id: value.id,
          text: value.text,
          count: value.count,
          selected: IsFacetValueSelected(facet.name, value.id, selectedFacets)
        }
      })
    }
  });

  return {
    entries,
    entriesByMonth,
    facets,
    isMore: data?.widgets[0].total_item > data?.widgets[0].offset + data?.widgets[0].limit
  }
}

export function IsFacetValueSelected(facetName: string, facetValueId: string, selectedFacets: ChangeLogSearchFacet[]) {
  return selectedFacets.find(facet => facet.name === facetName)?.value.find(value => value.id === facetValueId)?.selected ?? false;
}