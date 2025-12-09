import { SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables, TypedDocumentString } from '../generated/graphql';

export function getSearchByProductsAndChangeTypesQuery(
  productIds?: string[],
  changeTypeIds?: string[]
): TypedDocumentString<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables> {
  // Build the AND conditions array conditionally
  const andConditions = [
    '{ releaseDate: { lessThan: $date } }'
  ];

  // Only include sitecoreProduct filter if productIds is provided and not empty
  if (productIds && productIds.length > 0) {
    andConditions.push('{ sitecoreProduct: { containsAny: $productIds } }');
  }

  // Only include changeType filter if changeTypeIds is provided and not empty
  if (changeTypeIds && changeTypeIds.length > 0) {
    andConditions.push('{ changeType: { containsAny: $changeTypeIds } }');
  }

  const filterClause = `AND: [\n                ${andConditions.join(',\n                ')}\n            ]`;

  const query = new TypedDocumentString(`
query searchByProductsAndChangeTypes(
  $date: CustomDateTime
  $productIds: [String!]
  $changeTypeIds: [String!] = []
  $first: Int = 5
  $after: String = ""
) {
  changelog: manyChangelog(
    orderBy: RELEASE_DATE_DESC
    minimumPageSize: $first
    after: $after
    filter: {
      ${filterClause}
    }
  ) {
    results {
      ...changelogEntry
    }
    hasMore
    cursor
  }
}

fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}

fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}

fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}

fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}

fragment status on Status {
  system {
    id
    name
  }
  description
  identifier
}
`) as unknown as TypedDocumentString<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables>;

  return query;
}

