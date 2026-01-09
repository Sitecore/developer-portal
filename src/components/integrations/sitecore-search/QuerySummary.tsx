export interface IQuerySummary {
  resultsPerPage: number;
  totalResults: number;
  currentPage: number;
  title: string;
}

export const QuerySummary = (props: IQuerySummary) => {
  const { resultsPerPage, totalResults, currentPage, title } = props;

  const showResultFrom = (currentPage - 1) * resultsPerPage + 1;
  const showResultTo = showResultFrom + resultsPerPage - 1;

  return (
    <p>
      Showing <strong>{showResultFrom}</strong> to
      <strong> {showResultTo < totalResults ? showResultTo : totalResults} </strong>
      from <strong>{totalResults} </strong> results for <strong>&quot;{title}&quot;</strong>
    </p>
  );
};


