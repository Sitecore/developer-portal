export interface IQuerySummary {
  resultsPerPage: number;
  totalResults: number;
  currentPage: number;
  title: string;
}

const QuerySummary = (props: IQuerySummary): JSX.Element => {
  const { resultsPerPage, totalResults, currentPage, title } = props;

  const showResultFrom = (currentPage - 1) * resultsPerPage + 1;
  const showResultTo = showResultFrom + resultsPerPage - 1;

  return (
    <div className="flex text-left">
      <span className="inline-flex text-sm">
        <span>
          Showing <span className="font-bold">{showResultFrom}</span> to
          <span className="font-bold"> {showResultTo < totalResults ? showResultTo : totalResults} </span>
          from <span className="font-bold">{totalResults} </span> results for <span className="font-bold">&quot;{title}&quot;</span>
        </span>
      </span>
    </div>
  );
};

export default QuerySummary;
