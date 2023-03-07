export const CHANGE_TYPE_QUERY = `
    id
    name
    changeType
`;
export default CHANGE_TYPE_QUERY

export const ALL_CHANGE_TYPE_QUERY = `{
data: allChangetype{
    total
    results {
      ${CHANGE_TYPE_QUERY}
    }
  }
}`;