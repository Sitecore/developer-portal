import { Pagination } from '@sitecore-search/ui';

export interface SearchPaginationType {
  page: number;
  defaultCurrentPage: number;
  onPageNumberChange: (page: number) => void;
  totalItems: number;
  pageSize: number;
}

enum PaginationRenderType {
  AllPages,
  TruncateMiddle,
  TruncateFirstLast,
}

export const SearchResults = (props: SearchPaginationType) => {
  const { page, defaultCurrentPage, onPageNumberChange, totalItems, pageSize } = props;
  const pageCount = totalItems < pageSize ? 1 : Math.ceil(totalItems / pageSize);
  let pages = Array.from(Array(pageCount).keys()).map((x) => x + 1);
  const paginationRenderType: PaginationRenderType = pageCount < 10 ? PaginationRenderType.AllPages : page <= 5 || page > pageCount - 5 ? PaginationRenderType.TruncateMiddle : PaginationRenderType.TruncateFirstLast;

  if (paginationRenderType === PaginationRenderType.TruncateMiddle) {
    pages.splice(5, pageCount - 10);
  } else if (paginationRenderType === PaginationRenderType.TruncateFirstLast) {
    pages = pages.slice(page - 5, page + 4);
  }

  const activePaginationClasses = 'bg-theme-text text-theme-bg';

  return (
    <Pagination.Root currentPage={page} defaultCurrentPage={defaultCurrentPage} totalPages={pageCount} onPageChange={onPageNumberChange} className="mt-8 flex items-center justify-center">
      <Pagination.PrevPage className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${page == 1 ? 'hidden' : ''}`}>«</Pagination.PrevPage>
      {paginationRenderType == PaginationRenderType.TruncateFirstLast && <span className="ml-4 mr-4">...</span>}
      <Pagination.Pages>
        {pages.map((p, index) => (
          <>
            <Pagination.Page key={p} aria-label={`Page ${p}`} page={p} onClick={(e) => e.preventDefault()} className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${p == page ? [activePaginationClasses] : ''}`}>
              {p}
            </Pagination.Page>
            {paginationRenderType == PaginationRenderType.TruncateMiddle && index == 4 && <span className="ml-4 mr-4">...</span>}
          </>
        ))}
      </Pagination.Pages>
      {paginationRenderType == PaginationRenderType.TruncateFirstLast && <span className="ml-4 mr-4">...</span>}
      <Pagination.NextPage className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${page == pageCount ? 'hidden' : ''}`}>»</Pagination.NextPage>
    </Pagination.Root>
  );
};

export default SearchResults;
