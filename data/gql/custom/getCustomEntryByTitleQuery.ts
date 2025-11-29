import { SearchByTitleQuery, SearchByTitleQueryVariables, TypedDocumentString } from '../generated/graphql';

export function getCustomEntryByTitleQuery(entryTitle: string): TypedDocumentString<SearchByTitleQuery, SearchByTitleQueryVariables> {
  let whereClauseSearchTerm = '';

  const searchArray = entryTitle.split('-');

  if (searchArray.length > 0) {
    whereClauseSearchTerm += `AND: [`;
    searchArray.forEach((term: string) => {
      whereClauseSearchTerm += `{ title: { contains: "${term}" }}`;
    });
    whereClauseSearchTerm += `]`;
  }

  const query = new TypedDocumentString(`
  query searchByTitle($date: CustomDateTime, $productId: [String!]) {
  data: manyChangelog(
    minimumPageSize: 1
    filter: { AND: [
      { releaseDate: { lessThan: $date } }
      { sitecoreProduct: { containsAny: $productId } }
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
  version
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
}`) as unknown as TypedDocumentString<SearchByTitleQuery, SearchByTitleQueryVariables>;

  return query;
}
