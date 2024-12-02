import { Exact, InputMaybe, Scalars, TypedDocumentString } from '../generated/graphql.ts';

export function getCustomEntryByTitleAndDateQuery(entryTitle: string): TypedDocumentString<SearchByTitleAndDateQuery, SearchByTitleAndDateQueryVariables> {
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
  query searchByTitle($startDate: DateTime!, $endDate: DateTime!, $productId: [ID]) {
  data: allChangelog(
    first: 1
    where: {
      releaseDate_between: [$startDate, $endDate]
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
}`) as unknown as TypedDocumentString<SearchByTitleAndDateQuery, SearchByTitleAndDateQueryVariables>;

  return query;
}

export type SearchByTitleAndDateQueryVariables = Exact<{
  startDate: InputMaybe<Scalars['DateTime']['input']>;
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  productId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
}>;

export type SearchByTitleAndDateQuery = {
  data: {
    total: number | null;
    pageInfo: { hasNext: boolean | null; endCursor: string | null } | null;
    results: Array<{
      id: string | null;
      name: string | null;
      title: string | null;
      description: any | null;
      fullArticle: any | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      version: string | null;
      releaseDate: Date | null;
      scheduled: boolean | null;
      image: {
        total: number | null;
        results: Array<{
          id: string | null;
          name: string | null;
          fileName: string | null;
          fileUrl: string | null;
          description: string | null;
          fileWidth: any | null;
          fileHeight: any | null;
          fileId: string | null;
          fileSize: any | null;
          fileType: string | null;
        } | null> | null;
      };
      sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
      changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
      status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
    } | null> | null;
  } | null;
};
