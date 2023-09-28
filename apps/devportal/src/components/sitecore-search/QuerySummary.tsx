import { Text } from '@chakra-ui/react';

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
    <Text>
      Showing <Text as="b">{showResultFrom}</Text> to
      <Text as="b"> {showResultTo < totalResults ? showResultTo : totalResults} </Text>
      from <Text as="b">{totalResults} </Text> results for <Text as="b">&quot;{title}&quot;</Text>
    </Text>
  );
};

export default QuerySummary;
