"use client";

import { mdiClose, mdiFilterVariant } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import Link from "next/link";
import React from "react";
import { cn } from "@/src/lib/util";
import { appendPathToBasePath } from "@/src/lib/util/stringUtil";

export interface SidebarNavigationProps {
  title?: string;
  config: ManifestConfig;
  onFocus: () => void;
  onBlur: () => void;
}

const SidebarSearch = ({ config, onFocus, onBlur }: SidebarNavigationProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      return reset();
    }

    setSearchTerm(event.target.value);
    onFocus();
  };

  const reset = () => {
    setSearchTerm("");
    onBlur();
  };

  const searchRoutes = (searchTerm: string) => {
    return config.routes
      .map((route) => ({
        ...route,
        children: route.children.filter((child) =>
          child.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      }))
      .filter(
        (route) =>
          route.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.children.length > 0,
      );
  };

  const filteredRoutes = searchRoutes(searchTerm);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) => {
      const key = `${text}-${part}-${i}`;
      return part.toLowerCase() === query.toLowerCase() ? (
        <mark key={key} className="px-0 py-0.5 bg-orange-100">
          {part}
        </mark>
      ) : (
        <span key={key}>{part}</span>
      );
    });
  };

  return (
    <>
      <div>
        <div className="relative max-w-full">
          <Icon
            path={mdiFilterVariant}
            size={1}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground"
          />
          <Input
            placeholder="Filter"
            onChange={handleSearch}
            value={searchTerm}
            className="pl-10 pr-10"
          />
          {searchTerm && (
            <Button
              onClick={reset}
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              aria-label="Close"
            >
              <Icon path={mdiClose} size={1} />
            </Button>
          )}
        </div>
      </div>
      <div>
        {filteredRoutes.length === 0 && (
          <p className="text-sm uppercase tracking-wide text-muted-foreground p-2">
            No results found
          </p>
        )}

        {filteredRoutes.map((link) => (
          <div
            key={link.path || link.title}
            className={cn(
              "mt-6",
              (filteredRoutes.length === 0 || searchTerm === "") && "hidden",
            )}
          >
            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
              {link.title}
            </p>
            {link.children.map((child) => (
              <div key={child.path || child.title}>
                <ul className="flex flex-col gap-1 w-full">
                  <li>
                    <Button
                      asChild
                      variant="ghost"
                      className="px-2 w-full inline-block text-left justify-start"
                    >
                      <Link
                        href={appendPathToBasePath(config.path, child.path)}
                      >
                        {highlightText(child.title, searchTerm)}
                      </Link>
                    </Button>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SidebarSearch;
