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
  TruncatePages
}

export const SearchResults = (props: SearchPaginationType) => {
  const { defaultCurrentPage, onPageNumberChange, totalItems, pageSize } = props;
  let { page } = props;
  const pageCount = totalItems < pageSize ? 1 : Math.ceil(totalItems / pageSize);
  let pages = Array.from(Array(pageCount).keys()).map((x) => x + 1);
  const paginationRenderType: PaginationRenderType = pageCount < 10 ? PaginationRenderType.AllPages : PaginationRenderType.TruncatePages;

  if (paginationRenderType === PaginationRenderType.TruncatePages) {
    pages = page >= 5 
      ? pages.slice(page - 5, parseInt(page.toString()) + 4)
      : pages.slice(0, 9);
  } 

  if(typeof(page) == 'string') {
    page = parseInt(page);
  }

  const activePaginationClasses = 'bg-theme-text text-theme-bg';

  return (
    <Pagination.Root currentPage={page} defaultCurrentPage={defaultCurrentPage} totalPages={pageCount} onPageChange={onPageNumberChange} className="mt-8 flex items-center justify-center">
      <Pagination.PrevPage onClick={(e) => e.preventDefault()} className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${page == 1 ? 'hidden' : ''}`}>«</Pagination.PrevPage>
      {(paginationRenderType == PaginationRenderType.TruncatePages && page > 5) && <span className="ml-4 mr-4">...</span>}
      <Pagination.Pages>
        {pages.map((p) => (
          <Pagination.Page key={p} aria-label={`Page ${p}`} page={p} onClick={(e) => e.preventDefault()} className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${p == page ? [activePaginationClasses] : ''}`}>
            {p}
          </Pagination.Page>
        ))}
      </Pagination.Pages>
      {(paginationRenderType == PaginationRenderType.TruncatePages && pageCount !== 1) && <span className="ml-4 mr-4">...</span>}
      <Pagination.NextPage onClick={(e) => e.preventDefault()} className={`border-theme-border mx-2 border py-1 px-2 hover:underline ${page == pageCount ? 'hidden' : ''}`}>»</Pagination.NextPage>
    </Pagination.Root>
  );
};

export default SearchResults;
