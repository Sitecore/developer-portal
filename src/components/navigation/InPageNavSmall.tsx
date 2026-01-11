import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";
import useInPageNavigation from "@src/hooks/useInPageNavigation";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import Link from "next/link";
import { cn } from "@/src/lib/util";

type InPageNavProps = {
  titles: Array<ContentHeading>;
  hideFrom?: string;
  className?: string;
  mb?: number;
};

const InPageNavSmall = ({ titles, className, mb = 4 }: InPageNavProps) => {
  const links = useInPageNavigation(titles, false);

  if (titles.length === 0) {
    return null;
  }

  return (
    <div className={cn(`mb-${mb}`, className)}>
      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 mt-2 w-8 p-2"
                >
                  <Icon path={mdiChevronDown} size={1} />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Sections on this page</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href || link.text} asChild>
                <Link href={link.href} title={link.text}>
                  {link.text}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InPageNavSmall;
