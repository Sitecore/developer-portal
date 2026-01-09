import Link from 'next/link';
import { Button } from '@components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import useInPageNavigation from '../../hooks/useInPageNavigation';
import { ContentHeading } from '../../lib/interfaces/contentheading';
import { cn } from '@lib/utils';

type InPageNavProps = {
  titles: Array<ContentHeading>;
  hideFrom?: string;
  className?: string;
  mb?: number;
};

const InPageNavSmall = ({ titles, className, mb = 4 }: InPageNavProps) => {
  if (titles.length == 0) {
    return <></>;
  }

  const links = useInPageNavigation(titles, false);

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
          {links.map((link, i) => {
            return (
              <DropdownMenuItem key={i} asChild>
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
