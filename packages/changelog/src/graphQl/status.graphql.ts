export const STATUS_QUERY = `
    id
    name
    description
    identifier
`;

export const ALL_STATUS_QUERY = `{
data: allStatus{
    total
    results {
      ${STATUS_QUERY}
    }
  }
}`;
