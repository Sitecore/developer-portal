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
  const skipPages = pageCount > 10;
  if (skipPages) {
    pages.splice(5, pageCount - 10);
  }

  const activePaginationClasses = 'bg-theme-text text-theme-bg';

  return (
    <Pagination.Root currentPage={page} defaultCurrentPage={defaultCurrentPage} totalPages={pageCount} onPageChange={onPageNumberChange} className="mt-8 flex items-center justify-center">
      <Pagination.PrevPage className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${page == 1 ? 'hidden' : ''}`}>«</Pagination.PrevPage>
      <Pagination.Pages>
        {pages.map((p, index) => (
          <>
            <Pagination.Page key={p} aria-label={`Page ${p}`} page={p} onClick={(e) => e.preventDefault()} className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${p == page ? [activePaginationClasses] : ''}`}>
              {p}
            </Pagination.Page>
            {skipPages && index == 4 && <span className="ml-4 mr-4">...</span>}
          </>
        ))}
      </Pagination.Pages>
      <Pagination.NextPage className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${page == pageCount ? 'hidden' : ''}`}>»</Pagination.NextPage>
    </Pagination.Root>
  );
};

export default SearchResults;
