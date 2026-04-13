import { mainNavigation, type NavItem } from "@/data/data-navigation";
import { mdiClose, mdiMenu } from "@mdi/js";
import UserAccount from "@src/components/authentication/UserAccount";
import { PreviewSearchInput } from "@src/components/integrations/sitecore-search/NewPreviewSearchInput";
import { Icon } from "@src/components/lib/icon";
import { cn } from "@src/components/lib/utils";
import { Button } from "@src/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@src/components/ui/collapsible";
import { ProductIcon } from "@src/components/ui/logos";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@src/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@src/components/ui/sheet";
import {
  GetProductLogoByVariant,
  Product,
  Type,
  Variant,
} from "@src/lib/assets";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ToggleAiAssistantButton from "../integrations/ai/toggleAiAssistantButton";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { QuickStartMenu } from "./QuickStartMenu";

export type TopNavProps = {
  searchEnabled?: boolean;
};

export default function TopNav({ searchEnabled }: TopNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full px-2 bg-background max-w-none py-0 lg:px-4 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] h-14">
      <div className="flex justify-between items-center mx-auto w-full h-14 lg:gap-x-2">
        {/* Logo */}
        <div className="w-[270px]">
          <span className="text-xl font-bold text-red-500">
            <Link href="/" className="w-auto">
              <Image
                alt="Logo"
                className="shrink-0 grow-0 rounded-md object-cover object-left p-1 block"
                src={getLogoByPath(router.asPath, theme) || ""}
                width={240}
                height={40}
              />
            </Link>
          </span>
          <span className="text-lg font-semibold"></span>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="md:inline-flex hidden">
          <NavigationMenuList>
            {mainNavigation.map((navItem) =>
              navItem.url && !navItem.children ? (
                <NavigationMenuItem key={navItem.url || navItem.title}>
                  <NavigationMenuLink
                    href={navItem.url || "#"}
                    className={navigationMenuTriggerStyle()}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={navItem.url || navItem.title}>
                  <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {navItem.type === "grouped" ? (
                      <div className="flex w-[800px] gap-5 p-4 md:w-[1000px] md:grid-cols-5 lg:w-[1000px]">
                        <div className="py-2">
                          <div
                            className={cn(
                              "flex flex-row flex-wrap gap-6 w-full max-w-[60vw]",
                            )}
                          >
                            {navItem.children?.map((item) => (
                              <div key={item.url || item.title}>
                                <span className="block mb-4 font-sans font-semibold">
                                  {item.title}
                                </span>
                                <ul
                                  className={`grid gap-2 ${(item.children?.length ?? 0) > 5 ? "grid-cols-2" : ""}`}
                                >
                                  {item.children?.map((product) => (
                                    <ProductListItem
                                      key={product.url || product.title}
                                      href={product.url}
                                      title={product?.title}
                                    >
                                      <ProductIcon
                                        product={
                                          product.logo || Product.Sitecore
                                        }
                                        height="20px"
                                        width="32px"
                                      />
                                    </ProductListItem>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : navItem.type === "cta" ? (
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-neutral-fg-inverse">
                        <li className="row-span-4">
                          <NavigationMenuLink
                            asChild
                            className="bg-hero-gradient"
                          >
                            <a
                              className="flex flex-col justify-end p-6 w-full h-full no-underline rounded-md outline-none select-none bg-linear-to-b from-muted/50 to-muted focus:shadow-md"
                              href={navItem?.children?.[0]?.url || "#"}
                            >
                              <div className="mt-2 mb-2 text-lg font-medium">
                                {navItem?.children?.[0]?.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {navItem?.children?.[0]?.subTitle}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {navItem?.children?.slice(1).map((child) => (
                          <ListItem
                            key={child.title}
                            href={child.url}
                            title={child.title}
                          />
                        ))}
                      </ul>
                    ) : null}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Top Right */}
        <div className="flex items-center gap-x-0.5 md:gap-x-2 xl:flex-1 xl:justify-end xl:gap-x-3">
          <ToggleAiAssistantButton text="Ask AI" />

          {searchEnabled && (
            <PreviewSearchInput rfkId="rfkid_6" defaultItemsPerPage={6} />
          )}

          <UserAccount />
          <DarkModeSwitch />
          <QuickStartMenu key={router.asPath} />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Toggle Navigation"
                className="md:hidden h-9 w-9 p-0"
              >
                {isOpen ? (
                  <Icon path={mdiClose} size={1} />
                ) : (
                  <Icon path={mdiMenu} size={1.25} />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[380px] p-0">
              <SheetHeader className="border-b px-4 py-4">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <MobileNavigation onNavigate={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function getLogoByPath(
  asPath: string,
  theme: string | undefined,
): string | undefined {
  // Default to developer logo
  let logo: Product = Product.SitecoreDevelopers;

  // Use the Sitecore logo for the roadmap pages
  if (asPath.includes("/roadmap")) {
    logo = Product.Sitecore;
  }
  return theme === "dark"
    ? GetProductLogoByVariant(logo, Variant.Dark, Type.Full)
    : GetProductLogoByVariant(logo, Variant.Light, Type.Full);
}

type MobileNavigationProps = {
  onNavigate: () => void;
};

function MobileNavigation({ onNavigate }: MobileNavigationProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string, isOpen: boolean) => {
    setExpanded((prev) => ({ ...prev, [key]: isOpen }));
  };

  return (
    <nav className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 py-2">
      <ul className="flex flex-col">
        {mainNavigation.map((navItem) => {
          const key = navItem.url || navItem.title;
          const isExpanded = expanded[key] ?? false;

          if (navItem.url && !navItem.children) {
            return (
              <li key={key} className="border-b last:border-b-0">
                <Link
                  href={navItem.url}
                  onClick={onNavigate}
                  className="flex items-center py-3 text-base font-medium"
                >
                  {navItem.title}
                </Link>
              </li>
            );
          }

          return (
            <li key={key} className="border-b last:border-b-0">
              <Collapsible
                open={isExpanded}
                onOpenChange={(open) => toggleExpanded(key, open)}
              >
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium"
                    aria-expanded={isExpanded}
                  >
                    <span>{navItem.title}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 text-foreground transition-transform duration-200",
                        isExpanded && "rotate-180",
                      )}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pb-3">
                  <MobileNavChildren
                    navItem={navItem}
                    onNavigate={onNavigate}
                  />
                </CollapsibleContent>
              </Collapsible>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

type MobileNavChildrenProps = {
  navItem: NavItem;
  onNavigate: () => void;
};

function MobileNavChildren({ navItem, onNavigate }: MobileNavChildrenProps) {
  if (navItem.type === "grouped") {
    return (
      <div className="space-y-4 pl-1">
        {navItem.children?.map((group) => (
          <div key={group.url || group.title}>
            {group.title.trim().length > 0 && (
              <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">
                {group.title}
              </p>
            )}
            <ul className="space-y-1">
              {group.children?.map((product) => (
                <li key={product.url || product.title}>
                  <Link
                    href={product.url || "#"}
                    onClick={onNavigate}
                    target={product.external ? "_blank" : undefined}
                    rel={product.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-accent"
                  >
                    <ProductIcon
                      product={product.logo || Product.Sitecore}
                      height="18px"
                      width="30px"
                    />
                    <span>{product.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (navItem.type === "cta") {
    return (
      <ul className="space-y-1 pl-1">
        {navItem.children?.map((child) => (
          <li key={child.url || child.title}>
            <Link
              href={child.url || "#"}
              onClick={onNavigate}
              target={child.external ? "_blank" : undefined}
              rel={child.external ? "noopener noreferrer" : undefined}
              className="block rounded-md px-2 py-2 hover:bg-accent"
            >
              <span className="text-sm font-medium">{child.title}</span>
              {child.subTitle && (
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {child.subTitle}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-1 pl-1">
      {navItem.children?.map((child) => (
        <li key={child.url || child.title}>
          <Link
            href={child.url || "#"}
            onClick={onNavigate}
            target={child.external ? "_blank" : undefined}
            rel={child.external ? "noopener noreferrer" : undefined}
            className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
          >
            {child.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const MenuItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href }, ref) => {
  return (
    <NavigationMenuItem className={className}>
      <NavigationMenuLink
        href={href}
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
      >
        {title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
});
MenuItem.displayName = "MenuItem";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block p-3 space-y-1 leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ProductListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-row gap-4 items-center leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          {children}
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ProductListItem.displayName = "ProductListItem";
