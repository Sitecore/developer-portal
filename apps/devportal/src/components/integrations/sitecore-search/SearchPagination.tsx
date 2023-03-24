import { Pagination } from '@sitecore-discover/ui';

export interface SearchPaginationType {
  page: number;
  defaultCurrentPage: number;
  onPageNumberChange: (page: number) => void;
  totalItems: number;
  pageSize: number;
}

export const SearchResults = (props: SearchPaginationType) => {
  const { page, defaultCurrentPage, onPageNumberChange, totalItems, pageSize } = props;
  const pageCount = totalItems < pageSize ? 1 : Math.ceil(totalItems / pageSize);
  const pages = Array.from(Array(pageCount).keys()).map((x) => x + 1);
  const activePaginationClasses = 'bg-theme-text text-theme-bg';

  return (
    <Pagination.Root currentPage={page} defaultCurrentPage={defaultCurrentPage} totalPages={pageCount} onPageChange={onPageNumberChange} className="mt-8 flex items-center justify-center">
      <Pagination.Pages>
        {pages.map((p) => (
          <Pagination.Page key={p} aria-label={`Page ${p}`} page={p} onClick={(e) => e.preventDefault()} className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${p == page ? [activePaginationClasses] : ''}`}>
            {p}
          </Pagination.Page>
        ))}
      </Pagination.Pages>
    </Pagination.Root>
  );
};

export default SearchResults;
