"use client";

import { cn } from "@/src/lib/util";
import { appendPathToBasePath } from "@/src/lib/util/stringUtil";
import { mdiChevronDown, mdiChevronRight, mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import { GetProductLogo } from "@src/lib/assets";
import type {
  ManifestConfig,
  ManifestNavigationItem,
} from "@src/lib/interfaces/manifest";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SidebarSearch from "./SidebarSearch";

export interface SidebarNavigationProps {
  config: ManifestConfig;
  disableMobileMenu?: boolean;
}

type SidebarGroupItemProps = {
  item: ManifestNavigationItem;
  rootBasePath: string;
  showRootAsSections?: boolean;
};

const SidebarNavigation = ({
  config,
  disableMobileMenu = false,
}: SidebarNavigationProps) => {
  const router = useRouter();
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const showRootAsSections = config.showRootAsSections;
  const basePath = config.path;

  const { theme } = useTheme();
  const logoSrc = config.productLogo
    ? theme === "dark"
      ? GetProductLogo(config.productLogo, "Dark")
      : GetProductLogo(config.productLogo, "Light")
    : undefined;

  return (
    <div className="mt-4">
      {config.enableSearch && (
        <div className={cn(disableMobileMenu ? "block" : "hidden md:block")}>
          <SidebarSearch
            config={config}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
        </div>
      )}

      {config.heading && !searchActive && (
        <Link
          href={config.path}
          className={cn(
            "text-sm uppercase tracking-wide text-muted-foreground my-4 mx-0 hover:underline",
            disableMobileMenu ? "block" : "hidden md:block",
          )}
        >
          {config.title}
        </Link>
      )}

      {config.productLogo && logoSrc && (
        <div className="h-6 w-full relative my-4">
          <Image
            src={logoSrc}
            alt={config.title}
            fill
            style={{ objectFit: "fill" }}
            sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw"
            className="!w-auto"
          />
        </div>
      )}
      {/* Desktop */}
      <div
        className={cn(
          "flex flex-col",
          disableMobileMenu ? "flex" : "hidden md:flex",
          searchActive && "hidden",
        )}
      >
        {showRootAsSections &&
          config.routes.map((link) => (
            <SidebarGroupItem
              item={link}
              rootBasePath={basePath}
              showRootAsSections={showRootAsSections}
              key={link.path || link.title}
            />
          ))}

        {!showRootAsSections && (
          <ul className="flex flex-col gap-1 w-full">
            {config.routes.map((link) => (
              <li
                key={link.path || link.title}
                className="flex flex-col gap-1 w-full"
              >
                <MenuItemLink
                  href={appendPathToBasePath(basePath, link.path)}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile */}
      {!disableMobileMenu && (
        <DropDownMenu config={config} key={router.asPath} />
      )}
    </div>
  );
};

export const SidebarGroupItem = ({
  item,
  rootBasePath,
  showRootAsSections,
}: SidebarGroupItemProps) => {
  const currentBasePath = appendPathToBasePath(rootBasePath, item.path);

  return (
    <>
      {/* Load collapsable menu when the manifest.json contains the property collapsed  */}
      {item.collapsed != null ? (
        <SidebarCollapsableGroupItem item={item} rootBasePath={rootBasePath} />
      ) : (
        // Load the normal menu
        <li>
          {item.ignoreLink != null && item.ignoreLink && (
            <p
              className="text-sm uppercase tracking-wide text-muted-foreground my-4"
              data-type="title"
            >
              {item.title}
            </p>
          )}

          {!showRootAsSections && (
            <MenuItemLink href={item.path} title={item.title} />
          )}
          <ul className="flex flex-col gap-1 w-full">
            {item.children?.map((child) =>
              child.children?.length > 0 ? (
                <MenuItemGroup
                  manifestItem={child}
                  basePath={currentBasePath}
                  key={child.path || child.title}
                />
              ) : (
                <MenuItemLink
                  href={appendPathToBasePath(currentBasePath, child.path)}
                  title={child.title}
                  key={child.path || child.title}
                />
              ),
            )}
          </ul>
        </li>
      )}
    </>
  );
};

const SidebarCollapsableGroupItem = ({
  item,
  rootBasePath,
}: {
  item: ManifestNavigationItem;
  rootBasePath: string;
}) => {
  const [isOpen, setIsOpen] = useState(item.collapsed ?? false);

  return (
    <li className="flex flex-col" data-type="collapsable-group-item">
      <div className="flex justify-between items-center mt-4">
        {item.ignoreLink === false ? (
          <Link
            href={appendPathToBasePath(rootBasePath, item.path)}
            className="text-sm uppercase tracking-wide text-muted-foreground cursor-pointer hover:underline"
          >
            {item.title}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm uppercase tracking-wide text-muted-foreground cursor-pointer hover:underline"
          >
            {item.title}
          </button>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
          aria-label={isOpen ? "Collapse section" : "Expand section"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            path={isOpen ? mdiPlus : mdiMinus}
            size={1}
            className="text-muted-foreground"
          />
        </Button>
      </div>

      {!isOpen && (
        <ul className="flex flex-col gap-1 w-full mt-2" data-type="buttons">
          {item.children?.map((child) =>
            child.children?.length > 0 ? (
              <MenuItemGroup
                manifestItem={child}
                basePath={rootBasePath}
                key={child.path || child.title}
              />
            ) : (
              <MenuItemLink
                href={appendPathToBasePath(rootBasePath, child.path)}
                title={child.title}
                key={child.path || child.title}
              />
            ),
          )}
        </ul>
      )}
    </li>
  );
};

const MenuItemLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();

  return (
    <li className="list-none">
      <Button
        asChild
        variant="ghost"
        className={cn(
          "px-2 w-full justify-start",
          router.asPath.endsWith(href) && "bg-accent",
        )}
        data-type="menu-item-link"
      >
        <Link href={href}>{title}</Link>
      </Button>
    </li>
  );
};

const MenuItemGroup = ({
  manifestItem,
  basePath,
  index,
}: {
  manifestItem: ManifestNavigationItem;
  basePath: string;
  index?: number;
}) => {
  const router = useRouter();
  const currentRouteIncludesChild =
    router.asPath.includes(`${basePath}/${manifestItem.path}`) ||
    manifestItem.children?.some((child) =>
      router.asPath.includes(`${basePath}/${child.path}`),
    );
  const currentRouteActive =
    router.asPath.endsWith(`${basePath}/${manifestItem.path}`) ||
    manifestItem.children?.some((child) =>
      router.asPath.includes(`${basePath}/${child.path}`),
    );
  const [isOpen, setIsOpen] = useState(currentRouteIncludesChild);
  const currentBasePath = appendPathToBasePath(basePath, manifestItem.path);

  return (
    <li key={index} data-type="menu-item-group" className="list-none">
      <Button
        variant="ghost"
        className={cn(
          "justify-between w-full transition ease-in-out",
          currentRouteActive && "bg-accent",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {manifestItem.ignoreLink ? (
          <span>{manifestItem.title}</span>
        ) : (
          <Link
            href={appendPathToBasePath(basePath, manifestItem.path)}
            className="flex-1 text-left"
          >
            {manifestItem.title}
          </Link>
        )}
        <Icon path={isOpen ? mdiChevronDown : mdiChevronRight} size={1} />
      </Button>

      {isOpen && (
        <ul className="pl-2">
          {manifestItem.children.map((link) => {
            if (link.children?.length > 0) {
              return (
                <MenuItemGroup
                  manifestItem={link}
                  basePath={appendPathToBasePath(currentBasePath, link.path)}
                  key={link.path || link.title}
                />
              );
            }

            return (
              <MenuItemLink
                href={appendPathToBasePath(currentBasePath, link.path)}
                title={link.title}
                key={link.path || link.title}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

const DropDownMenu = ({ config }: { config: ManifestConfig }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
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
          <ul className="flex flex-col gap-1 w-full mt-2">
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

export default SidebarNavigation;
