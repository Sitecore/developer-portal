// import Select from 'react-select';
import { useSearchResults, widget, WidgetDataType } from '@sitecore-discover/react';
import { WidgetComponentProps } from '@sitecore-discover/react/types';
import Image from 'next/image';
import type { ComponentType } from 'react';
// import Loader from '../../components/Loader';
// import QuerySummary from '../../components/QuerySummary';
// import { ArticleType } from '../../components/Common';
// import { ILanguageContext, LanguageContext } from '../../contexts/languageContext';

export interface SearchResultsType extends WidgetComponentProps {
  initialKeyphrase?: string;
  initialArticlesPerPage?: number;
  title?: string;
}

export const SearchResults = (props: SearchResultsType) => {
  // const { language } = useContext<ILanguageContext>(LanguageContext);

  const { initialKeyphrase = '', initialArticlesPerPage = 24, title = '' } = props;
  const {
    queryResult: { isLoading, data: { content: articles = [] } = {} },
  } = useSearchResults(() => {
    // initialization code
    return {
      itemsPerPage: initialArticlesPerPage,
      keyphrase: initialKeyphrase,
    };
  });
  // const sortOptions = sortChoices.map(({ name, label, order }) => {
  //   return { label, value: `${name}#${order}` };
  // });
  return (
    <>
      {/* {isLoading && <Loader />} */}
      {!isLoading && (
        <>
          <section>
            <h1>{title}</h1>
          </section>
          <section>
            <div>
              {/* {articles.length && (
                <QuerySummary
                  currentPage={page}
                  resultsPerPage={itemsPerPage}
                  totalResults={totalItems}
                />
              )} */}
              {/* <SortOptions>
                <label>Sort by:</label>
                <Select
                  isSearchable={false}
                  className="sortSelect"
                  onChange={(selected) => {
                    const sort = selected.value.split('#');
                    onSortChange({ sortType: sort[0], sortDirection: sort[1] });
                  }}
                  options={sortOptions}
                />
              </SortOptions> */}
            </div>

            <div>
              <ul>
                {articles.map((result, index) => (
                  <li key={index}>
                    <div className="border-theme-border relative border-b p-4">
                      <a href={result.url} className="group">
                        {result.image_url && <Image width={25} height={25} src={result.image_url} alt={title} />}
                        <p className="font-bold group-hover:underline">{result.title}</p>
                        <span className="text-xs italic">{result.url}</span>
                        <p>{result.description}</p>
                        <span className="absolute inset-0 z-10"></span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
};

const SearchResultsWidget = widget(SearchResults as ComponentType, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
