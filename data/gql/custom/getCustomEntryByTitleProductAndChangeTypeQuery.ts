import { SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables, TypedDocumentString } from '../generated/graphql';

export function getCustomEntryByTitleProductAndChangeTypeQuery(entryTitle: string): TypedDocumentString<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables> {
  let whereClauseSearchTerm = '';

  const searchArray = entryTitle.split('-');

  if (searchArray.length > 0) {
    whereClauseSearchTerm += `AND: [`;
    searchArray.forEach((term: string) => {
      whereClauseSearchTerm += `{title_contains: "${term}"}`;
    });
    whereClauseSearchTerm += `]`;
  }

  const query = new TypedDocumentString(`
  query searchByProductsAndChangeTypes(
    $date: CustomDateTime!, 
    $productIds: [String!], 
    $changeTypeIds: [String!], 
    $first: Int = 5, 
    $after: String = ""
  ) {
  changelog: manyChangelog(
    orderBy: RELEASE_DATE_DESC, 
    minimumPageSize: $first, 
    after: $after,
    filter: { AND: [
      { releaseDate: { lessThan: $date } }
      { sitecoreProduct: { containsAny: $productId } }
      { changeType: { containsAny: $changeTypeIds } }
      ${whereClauseSearchTerm}
    ] }
  ) {
    hasMore
    cursor
    results {
      ...changelogEntry
    }
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
  media_publicLink
  media_fileSize
  media_type {
    name
    label
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
}`) as unknown as TypedDocumentString<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables>;

  return query;
}
