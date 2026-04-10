"use client";

import { cn } from "@/src/lib/util";
import { appendPathToBasePath } from "@/src/lib/util/stringUtil";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@src/components/ui/button";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@src/components/ui/sidebar";
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

type MenuTreeItemProps = {
  item: ManifestNavigationItem;
  basePath: string;
  depth?: number;
};

const menuRowClass =
  "flex h-10 items-center rounded-md px-2.5 text-sm font-medium transition-[background-color,color]";
const menuRowInactiveClass =
  "text-neutral-fg hover:bg-(--color-neutral-100) hover:text-neutral-fg";
const menuRowActiveClass =
  "bg-primary-bg text-primary-fg hover:bg-primary-bg hover:text-primary-fg";

const normalizePath = (value: string) => {
  const withoutHashOrQuery = value.split("?")[0].split("#")[0];
  const trimmed = withoutHashOrQuery.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

const isPathActive = (currentPath: string, targetPath: string) => {
  const normalizedCurrent = normalizePath(currentPath);
  const normalizedTarget = normalizePath(targetPath);

  if (normalizedCurrent === normalizedTarget) {
    return true;
  }

  return normalizedCurrent.endsWith(normalizedTarget);
};

const hasActiveDescendant = (
  currentPath: string,
  item: ManifestNavigationItem,
  basePath: string,
): boolean => {
  const itemHref = appendPathToBasePath(basePath, item.path);

  if (isPathActive(currentPath, itemHref)) {
    return true;
  }

  return (
    item.children?.some((child) =>
      hasActiveDescendant(currentPath, child, itemHref),
    ) ?? false
  );
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
    <div className="">
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
            "text-sm uppercase font-medium text-muted-foreground my-4 mx-0 hover:underline",
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
        <SidebarMenu>
          {config.routes.map((link) => (
            <SidebarGroupItem
              item={link}
              rootBasePath={basePath}
              showRootAsSections={showRootAsSections}
              key={link.path || link.title}
            />
          ))}
        </SidebarMenu>
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
  const router = useRouter();
  const sectionBasePath = appendPathToBasePath(rootBasePath, item.path);
  const hasChildren = item.children?.length > 0;
  const sectionIsActive = isPathActive(router.asPath, sectionBasePath);
  const sectionBranchIsActive = hasActiveDescendant(
    router.asPath,
    item,
    rootBasePath,
  );
  const defaultExpanded: boolean =
    item.collapsed != null ? !item.collapsed : sectionBranchIsActive;
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  if (!showRootAsSections) {
    return <MenuTreeItem item={item} basePath={rootBasePath} />;
  }

  return (
    <SidebarMenuItem className="h-auto w-full max-w-none flex-col items-start">
      <div className="flex w-full items-center">
        {item.ignoreLink === false ? (
          <Link
            href={sectionBasePath}
            className={cn(
              "my-4 mx-0 flex-1 text-sm font-medium uppercase hover:underline",
              sectionIsActive ? "text-primary-fg" : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        ) : hasChildren ? (
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="my-4 text-left flex-1 text-sm uppercase tracking-wide font-medium text-muted-foreground"
          >
            {item.title}
          </button>
        ) : (
          <p
            className="my-4 text-sm uppercase tracking-wide text-muted-foreground"
            data-type="title"
          >
            {item.title}
          </p>
        )}

        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "ml-1 h-8 w-8 p-0",
              sectionBranchIsActive &&
                "text-primary-fg hover:bg-primary-bg hover:text-primary-fg",
            )}
            aria-label={isExpanded ? "Collapse submenu" : "Expand submenu"}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <Icon
              path={mdiChevronRight}
              size={1}
              className={cn("transition-transform", isExpanded && "rotate-90")}
            />
          </Button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <SidebarMenu className="w-full">
          {item.children?.map((child) => (
            <MenuTreeItem
              item={child}
              basePath={sectionBasePath}
              depth={0}
              key={child.path || child.title}
            />
          ))}
        </SidebarMenu>
      )}
    </SidebarMenuItem>
  );
};

const MenuItemLink = ({
  href,
  title,
  asSubItem,
}: {
  href: string;
  title: string;
  asSubItem?: boolean;
}) => {
  const router = useRouter();
  const isActive = isPathActive(router.asPath, href);

  if (asSubItem) {
    return (
      <SidebarMenuSubItem className="h-10 w-full">
        <SidebarMenuSubButton
          asChild
          isActive={isActive}
          data-type="menu-item-link"
        >
          <Link href={href}>{title}</Link>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  }

  return (
    <SidebarMenuItem className="list-none h-10 w-full max-w-none">
      <SidebarMenuSubButton
        asChild
        isActive={isActive}
        data-type="menu-item-link"
      >
        <Link href={href}>{title}</Link>
      </SidebarMenuSubButton>
    </SidebarMenuItem>
  );
};

const MenuTreeItem = ({ item, basePath, depth = 0 }: MenuTreeItemProps) => {
  const router = useRouter();
  const itemHref = appendPathToBasePath(basePath, item.path);
  const hasChildren = item.children?.length > 0;
  const itemIsActive = isPathActive(router.asPath, itemHref);
  const branchIsActive = hasActiveDescendant(router.asPath, item, basePath);
  const defaultExpanded: boolean =
    item.collapsed != null ? !item.collapsed : branchIsActive;
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  if (!hasChildren) {
    return (
      <MenuItemLink href={itemHref} title={item.title} asSubItem={depth > 0} />
    );
  }

  return (
    <SidebarMenuItem
      data-type="menu-item-group"
      className="h-auto w-full max-w-none list-none flex-col items-start"
    >
      <div className="flex w-full items-center">
        {item.ignoreLink ? (
          <button
            type="button"
            className={cn(
              menuRowClass,
              "flex-1",
              branchIsActive ? menuRowActiveClass : menuRowInactiveClass,
            )}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {item.title}
          </button>
        ) : (
          <Link
            href={itemHref}
            className={cn(
              menuRowClass,
              "flex-1",
              itemIsActive ? menuRowActiveClass : menuRowInactiveClass,
            )}
          >
            {item.title}
          </Link>
        )}

        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "ml-1 h-8 w-8 p-0",
            branchIsActive &&
              "text-primary-fg hover:bg-primary-bg hover:text-primary-fg",
          )}
          aria-label={isExpanded ? "Collapse submenu" : "Expand submenu"}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <Icon
            path={mdiChevronRight}
            size={1}
            className={cn("transition-transform", isExpanded && "rotate-90")}
          />
        </Button>
      </div>

      {isExpanded && (
        <SidebarMenuSub className={cn(depth === 0 && "w-full")}>
          {item.children.map((child) => (
            <MenuTreeItem
              item={child}
              basePath={itemHref}
              depth={depth + 1}
              key={child.path || child.title}
            />
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
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
          <SidebarMenu className="w-full mt-2">
            {config.routes.map((link) => (
              <SidebarGroupItem
                item={link}
                rootBasePath={config.path}
                showRootAsSections={config.showRootAsSections}
                key={link.path || link.title}
              />
            ))}
          </SidebarMenu>
        </div>
      )}
    </nav>
  );
};

export default SidebarNavigation;
