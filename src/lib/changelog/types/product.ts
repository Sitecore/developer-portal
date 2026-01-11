import type { GetAllProductsQuery } from "@data/gql/generated/graphql";

import { parseSitecoreProductItem } from "./sitecoreProduct";

export type Product = {
	id: string;
	name: string;
	darkIcon: string;
	lightIcon: string;
	hasEntries: boolean;
};

/**
 * Parse Product items from a GraphQL query result
 * Product is a simplified version of SitecoreProduct used for product listings
 */
export function ParseProduct(data: GetAllProductsQuery): Array<Product> {
	if (!data.manySitecoreProduct?.results) {
		console.log("No products found");
		return [];
	}

	return data.manySitecoreProduct.results.map((x) => {
		const sitecoreProduct = parseSitecoreProductItem(x);
		return {
			id: sitecoreProduct.id,
			name: sitecoreProduct.name,
			lightIcon: sitecoreProduct.lightIcon,
			darkIcon: sitecoreProduct.darkIcon,
			hasEntries: false,
		};
	});
}
