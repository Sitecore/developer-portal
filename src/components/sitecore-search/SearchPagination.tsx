/* eslint-disable no-unused-vars */
import { Button, ButtonGroup, Center, IconButton, Tooltip } from '@chakra-ui/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
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
  TruncatePages,
}

export const SearchResults = (props: SearchPaginationType) => {
  const { defaultCurrentPage, onPageNumberChange, totalItems, pageSize } = props;
  let { page } = props;
  const pageCount = totalItems < pageSize ? 1 : Math.ceil(totalItems / pageSize);
  let pages = Array.from(Array(pageCount).keys()).map((x) => x + 1);
  const paginationRenderType: PaginationRenderType = pageCount < 10 ? PaginationRenderType.AllPages : PaginationRenderType.TruncatePages;

  if (paginationRenderType === PaginationRenderType.TruncatePages) {
    pages = page >= 5 ? pages.slice(page - 5, parseInt(page.toString()) + 4) : pages.slice(0, 9);
  }

  if (typeof page == 'string') {
    page = parseInt(page);
  }

  return (
    <Center>
      <Pagination.Root currentPage={page} defaultCurrentPage={defaultCurrentPage} totalPages={pageCount} onPageChange={onPageNumberChange} className="flex items-center justify-center mt-8">
        <ButtonGroup size="sm" variant="pagination" spacing="1" marginTop={8}>
          <Pagination.PrevPage onClick={(e) => e.preventDefault()}>
            <Tooltip label="Previous">
              <IconButton variant="pagination" size={'sm'} icon={<Icon path={mdiChevronLeft} />} isDisabled={page == 1} aria-label={'Previous'} />
            </Tooltip>
          </Pagination.PrevPage>
          {paginationRenderType == PaginationRenderType.TruncatePages && page > 5 && <Button isDisabled>…</Button>}
          <Pagination.Pages>
            {pages.map((p) => (
              <Pagination.Page key={p} aria-label={`Page ${p}`} page={p} onClick={(e) => e.preventDefault()}>
                <Button isActive={p == page}>{p}</Button>
              </Pagination.Page>
            ))}
          </Pagination.Pages>
          {paginationRenderType == PaginationRenderType.TruncatePages && pageCount !== 1 && <Button isDisabled>…</Button>}
          <Pagination.NextPage onClick={(e) => e.preventDefault()}>
            <Tooltip label="Next">
              <IconButton variant="Next" size={'sm'} icon={<Icon path={mdiChevronRight} />} isDisabled={page == pageCount} aria-label={'Next'} />
            </Tooltip>
          </Pagination.NextPage>
        </ButtonGroup>
      </Pagination.Root>
    </Center>
  );
};

export default SearchResults;
