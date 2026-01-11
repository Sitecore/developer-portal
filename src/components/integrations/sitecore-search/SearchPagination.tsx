/* eslint-disable no-unused-vars */

import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Pagination } from "@sitecore-search/ui";
import { Button } from "@src/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";

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

export const SearchPagination = (props: SearchPaginationType) => {
  const { defaultCurrentPage, onPageNumberChange, totalItems, pageSize } =
    props;
  let { page } = props;
  const pageCount =
    totalItems < pageSize ? 1 : Math.ceil(totalItems / pageSize);
  let pages = Array.from(Array(pageCount).keys()).map((x) => x + 1);
  const paginationRenderType: PaginationRenderType =
    pageCount < 10
      ? PaginationRenderType.AllPages
      : PaginationRenderType.TruncatePages;

  if (paginationRenderType === PaginationRenderType.TruncatePages) {
    pages =
      page >= 5
        ? pages.slice(page - 5, parseInt(page.toString(), 10) + 4)
        : pages.slice(0, 9);
  }

  if (typeof page === "string") {
    page = parseInt(page, 10);
  }

  return (
    <div className="flex items-center justify-center">
      <Pagination.Root
        currentPage={page}
        defaultCurrentPage={defaultCurrentPage}
        totalPages={pageCount}
        onPageChange={onPageNumberChange}
        className="flex items-center justify-center mt-8"
      >
        <div className="flex items-center gap-1 mt-8">
          <Pagination.PrevPage onClick={(e) => e.preventDefault()}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    aria-label="Previous"
                  >
                    <Icon path={mdiChevronLeft} size={1} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Previous</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Pagination.PrevPage>
          {paginationRenderType === PaginationRenderType.TruncatePages &&
            page > 5 && (
              <Button variant="ghost" disabled>
                …
              </Button>
            )}
          <Pagination.Pages>
            {pages.map((p) => (
              <Pagination.Page
                key={p}
                aria-label={`Page ${p}`}
                page={p}
                onClick={(e) => e.preventDefault()}
              >
                <Button variant={p === page ? "default" : "outline"} size="sm">
                  {p}
                </Button>
              </Pagination.Page>
            ))}
          </Pagination.Pages>
          {paginationRenderType === PaginationRenderType.TruncatePages &&
            pageCount !== 1 && (
              <Button variant="ghost" disabled>
                …
              </Button>
            )}
          <Pagination.NextPage onClick={(e) => e.preventDefault()}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === pageCount}
                    aria-label="Next"
                  >
                    <Icon path={mdiChevronRight} size={1} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Pagination.NextPage>
        </div>
      </Pagination.Root>
    </div>
  );
};
