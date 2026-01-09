import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import { Button } from '@components/ui/button';
import { mdiDotsGrid } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';
import { ExternalLink } from 'lucide-react';
import { sitecoreQuickLinks } from '../../../data/data-navigation';

export const QuickStartMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="hidden xl:flex" aria-label="Open the menu for links to other Sitecore sites">
          <Icon size={1} path={mdiDotsGrid} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sitecoreQuickLinks.children &&
          sitecoreQuickLinks.children.map((link, key) => (
            <DropdownMenuItem key={key} asChild>
              <NextLink href={link.url || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-[90%]">
                {link.title}
                <ExternalLink className="h-4 w-4 ml-2" />
              </NextLink>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
