import { sitecoreQuickLinks } from "@data/data-navigation";
import { mdiDotsGrid } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { ExternalLink } from "lucide-react";
import NextLink from "next/link";

export const QuickStartMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="hidden xl:flex"
          aria-label="Open the menu for links to other Sitecore sites"
        >
          <Icon size={1} path={mdiDotsGrid} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sitecoreQuickLinks.children?.map((link) => (
          <DropdownMenuItem key={link.url || link.title} asChild>
            <NextLink
              href={link.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-[90%]"
            >
              {link.title}
              <ExternalLink className="h-4 w-4 ml-2" />
            </NextLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
