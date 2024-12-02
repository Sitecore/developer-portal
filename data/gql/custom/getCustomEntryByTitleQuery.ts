import { SearchByTitleQuery, SearchByTitleQueryVariables, TypedDocumentString } from '../generated/graphql';

export function getCustomEntryByTitleQuery(entryTitle: string): TypedDocumentString<SearchByTitleQuery, SearchByTitleQueryVariables> {
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
  query searchByTitle($date: DateTime, $productId: [ID]) {
  data: allChangelog(
    first: 1
    where: {
      releaseDate_lt: $date
      sitecoreProduct: { changelog_ids: $productId }
      ${whereClauseSearchTerm}
    }
  ) {
    pageInfo {
      hasNext
      endCursor
    }
    total
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByTitleQuery, SearchByTitleQueryVariables>;

  return query;
}
