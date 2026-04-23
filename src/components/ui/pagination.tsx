import { mdiChevronLeft, mdiChevronRight, mdiDotsHorizontal } from "@mdi/js";
import type * as React from "react";

import { cn } from "@/src/lib/util/index";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Icon } from "@/src/lib/icon";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          colorScheme: "neutral",
          size,
        }),
        "text-neutral-fg bg-transparent disabled:text-neutral-fg/40 font-medium hover:bg-neutral-bg active:bg-primary-bg",
        isActive &&
          "bg-primary-bg text-neutral-fg hover:bg-primary-bg active:bg-primary-bg font-medium",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="icon"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <Icon path={mdiChevronLeft} size={1} />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="icon"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <Icon path={mdiChevronRight} size={1} />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "text-neutral-fg flex size-9 items-center justify-center",
        className
      )}
      {...props}
    >
      <Icon path={mdiDotsHorizontal} size={0.6} />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
