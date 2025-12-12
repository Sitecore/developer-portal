import { Exact, InputMaybe, Scalars, TypedDocumentString } from '../generated/graphql';

export function getCustomEntryByTitleAndDateQuery(entryTitle: string, productId?: string[]): TypedDocumentString<SearchByTitleAndDateQuery, SearchByTitleAndDateQueryVariables> {
  // Build title filters - flatten them directly into the AND array
  const titleFilters: string[] = [];
  const searchArray = entryTitle.split('-');

  if (searchArray.length > 0) {
    searchArray.forEach((term: string) => {
      titleFilters.push(`{ title: { contains: "${term}", case: INSENSITIVE } }`);
    });
  }

  // Build the AND conditions array
  const andConditions = ['{ releaseDate: { inRange: { from: $startDate, to: $endDate } } }', '{ sitecoreProduct: { containsAny: $productId } }'];

  // Only include sitecoreProduct filter if productId is provided and not empty
  if (productId && productId.length > 0) {
    //andConditions.push('{ sitecoreProduct: { containsAny: $productId } }');
  }

  // Add all title filters
  andConditions.push(...titleFilters);

  const filterClause = `AND: [\n      ${andConditions.join(',\n      ')}\n    ]`;

  const query = new TypedDocumentString(`
  query searchByTitle($startDate: CustomDateTime!, $endDate: CustomDateTime!, $productId: [String!]) {
  data: manyChangelog(
    minimumPageSize: 1
    filter: {
      ${filterClause}
    }
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
    label
  }
  description
  identifier
}
`) as unknown as TypedDocumentString<SearchByTitleAndDateQuery, SearchByTitleAndDateQueryVariables>;

  return query;
}

export type SearchByTitleAndDateQueryVariables = Exact<{
  startDate: InputMaybe<Scalars['CustomDateTime']['input']>;
  endDate: InputMaybe<Scalars['CustomDateTime']['input']>;
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
