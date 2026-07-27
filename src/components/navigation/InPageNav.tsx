import { cn } from "@/src/lib/util";
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import useInPageNavigation from "@src/hooks/useInPageNavigation";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";

type InPageNavProps = {
  title?: string;
  titles: Array<ContentHeading>;
  className?: string;
};

const InPageNav = ({ title, titles, className }: InPageNavProps) => {
  const links = useInPageNavigation(titles, true);

  return (
    <nav
      className={cn(
        "flex flex-col",
        "mr-0 p-2 md:p-0 w-48",
        "sticky",
        className,
      )}
    >
      <h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-0 md:mb-2">
        {title ? title : "On this page"}
      </h2>
      <div className="flex flex-col gap-1 -mx-4">
        {links.map((link) => {
          return (
            <Button
              asChild
              variant="link"
              colorScheme="neutral"
              key={link.href || link.text}
              className="h-auto w-full justify-start whitespace-normal py-1 text-left"
            >
              <a href={link.href} className="flex w-full items-start gap-1">
                <Icon path={mdiChevronRight} size={0.8} />
                <span className="line-clamp-2 break-words leading-snug">
                  {link.text}
                </span>
              </a>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default InPageNav;
