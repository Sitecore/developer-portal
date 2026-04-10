"use client";

import { cn } from "@/src/lib/util";
import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import { useState } from "react";
import { SidebarGroupItem } from "./SidebarNavigation";

export interface SidebarNavigationProps {
  config: ManifestConfig;
}

export const DropDownNavigation = ({ config }: SidebarNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full flex items-center justify-between"
      >
        {config.title}
        <Icon
          path={mdiChevronDown}
          size={1}
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </Button>
      {isOpen && (
        <div className="relative">
          <ul className="flex flex-col gap-1 mt-2 w-full">
            {config.routes.map((link) => (
              <SidebarGroupItem
                item={link}
                rootBasePath={config.path}
                showRootAsSections={config.showRootAsSections}
                key={link.path || link.title}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
