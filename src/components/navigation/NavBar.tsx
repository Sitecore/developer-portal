"use client";

import {
  mainNavigation,
  type NavItem,
  sitecoreQuickLinks,
} from "@data/data-navigation";
import {
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClose,
  mdiMenu,
} from "@mdi/js";
import Icon from "@mdi/react";
import UserAccount from "@src/components/authentication/UserAccount";
import {
  PreviewSearchInput,
  SearchInput,
} from "@src/components/integrations/sitecore-search";
import { Button } from "@src/components/ui/button";
import { ProductIcon } from "@src/components/ui/logos";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/ui/popover";
import {
  GetProductLogoByVariant,
  Product,
  Type,
  Variant,
} from "@src/lib/assets";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import type React from "react";
import { useState } from "react";
import { cn } from "@/src/lib/util";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { QuickStartMenu } from "./QuickStartMenu";
import { SearchButton } from "./SearchButton";

export type NavigationChildData = {
  title: string;
  url?: string;
  external?: boolean;
  children?: Array<NavigationChildData>;
};

export type NavigationData = {
  title: string;
  url?: string;
  children?: Array<NavigationChildData>;
  pathname?: string;
};
export type NavProps = {
  navigationData: Array<NavigationData>;
  sitecoreQuickLinks: NavigationData;
  children?: React.ReactNode | Array<React.ReactNode>;
};

export type NavBarProps = {
  searchEnabled?: boolean;
};

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

export default function Navbar({
  searchEnabled,
}: NavBarProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedOnSearch, setFocusedOnSearch] = useState(false);
  const router = useRouter();
  useSession();
  const { theme } = useTheme();

  return (
    <div className="sticky top-0 z-50 bg-background shadow-md border-b">
      <div className="h-14 flex items-center justify-between px-4">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            {/* Logo */}
            <Link href="/" className="w-auto md:w-[270px]">
              <Image
                src={getLogoByPath(router.asPath, theme) || ""}
                alt="Go to the homepage"
                width={270}
                height={32}
                className="p-1 h-8 w-auto"
              />
            </Link>

            {/* Desktop menu (hide under xl or lower) */}
            <div className="hidden xl:block">
              <div className="flex items-center">
                <DesktopNav key={router.asPath} />
              </div>
            </div>
          </div>
          {/* Preview search on wide desktop */}
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center gap-2">
          {searchEnabled && (
            <>
              <div className="hidden 3xl:block">
                <PreviewSearchInput
                  rfkId="rfkid_6"
                  defaultItemsPerPage={6}
                  onFocus={() => setFocusedOnSearch(true)}
                  onBlur={() => setFocusedOnSearch(false)}
                  className={cn(
                    "flex transition-all duration-100 ease-in-out",
                    focusedOnSearch ? "w-2xl" : "w-lg",
                  )}
                />
              </div>

              <div className="3xl:hidden xl:block">
                <SearchButton />
              </div>
            </>
          )}

          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            size="sm"
            aria-label="Toggle Navigation"
            className="xl:hidden"
          >
            {isOpen ? (
              <Icon path={mdiClose} size={1} />
            ) : (
              <Icon path={mdiMenu} size={1.25} />
            )}
          </Button>
          <DarkModeSwitch />
          <QuickStartMenu key={router.asPath} />
          <UserAccount />
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden">
          <MobileNav key={router.asPath} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

const DesktopNav = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center gap-4">
      {mainNavigation.map((navItem) => (
        <div key={navItem.url || navItem.title} className="mx-2">
          {navItem.url && !navItem.children ? (
            <Button
              key={navItem.url || navItem.title}
              asChild
              variant="ghost"
              className={cn(
                "relative",
                router.asPath.includes(navItem.url) && "bg-accent",
              )}
            >
              <Link href={navItem.url ?? "#"}>{navItem.title}</Link>
            </Button>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "relative",
                    router.asPath === navItem.url && "bg-accent",
                  )}
                >
                  {navItem.title}
                  <Icon path={mdiChevronDown} size={1} className="ml-1" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full max-w-6xl rounded-md shadow-md p-2 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 relative gap-2 px-2 py-4">
                  {navItem.children?.map((child) => (
                    <DesktopSubNav key={child.title} {...child} />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      ))}
    </div>
  );
};

const navSection = ({ title, logo }: NavItem) => {
  return (
    <>
      {logo && (
        <div className="inline-block mr-2 relative">
          <ProductIcon product={logo} height="20px" width="32px" />
        </div>
      )}
      <span className="transition-all duration-300 ease-in-out font-medium text-foreground text-lg -mt-1 h-[26px]">
        {title}
      </span>
    </>
  );
};

const DesktopSubNav = ({
  title,
  url,
  subTitle,
  external,
  children,
  logo,
}: NavItem) => {
  return (
    <div className="block p-2" key={title}>
      {url ? (
        <Link
          href={url ? url : "#"}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex gap-1 mb-2"
        >
          {navSection({ title, logo })}
        </Link>
      ) : (
        <div className="flex gap-1 mb-2">{navSection({ title, logo })}</div>
      )}

      <p className="text-sm text-muted-foreground">{subTitle}</p>

      {children?.map((child) => (
        <Link
          href={child.url || "#"}
          target={child.external ? "_blank" : undefined}
          rel={child.external ? "noopener noreferrer" : undefined}
          className="flex gap-1 py-2 text-muted-foreground"
          key={child.url || child.title}
        >
          {child.logo && (
            <div className="inline-block mr-2">
              <ProductIcon product={child.logo} width="24px" height="24px" />
            </div>
          )}
          {child.title}
          {child.external && <ExternalLink className="mx-0.5 h-4 w-4 mt-1" />}
        </Link>
      ))}
    </div>
  );
};

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="xl:hidden bg-background shadow-lg h-screen absolute w-full -ml-15">
      <div className="p-4 border-t border-b border-border w-[95%]">
        <SearchInput showButton />
      </div>

      {mainNavigation.map((navItem) => (
        <MobileNavItem key={navItem.title} {...navItem} onClose={onClose} />
      ))}
      <MobileNavItem
        title={sitecoreQuickLinks.title}
        key={sitecoreQuickLinks.title}
        onClose={onClose}
      >
        {sitecoreQuickLinks.children}
      </MobileNavItem>
    </div>
  );
};

type MobileNavItemProps = {
  title: string;
  children?: Array<NavItem>;
  url?: string;
  onClose: () => void;
};

const MobileNavItem = ({
  title,
  children,
  url,
  onClose: _onClose,
}: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPage = router.asPath;

  return (
    <div
      onClick={() => children && setIsOpen(!isOpen)}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && children) {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      role={children ? "button" : undefined}
      tabIndex={children ? 0 : undefined}
    >
      <a
        href={url ?? "#"}
        className="flex px-4 py-4 justify-between items-center hover:no-underline border-t border-border"
      >
        <span className="font-semibold">{title}</span>
        {children && (
          <Icon
            path={mdiChevronRight}
            size={1.5}
            className={cn(
              "transition-all duration-250 ease-in-out",
              isOpen && "rotate-180",
            )}
          />
        )}
      </a>

      {isOpen && (
        <div className="fixed top-14 w-full bg-background h-screen">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-none justify-start px-2 h-14 mb-4 shadow-lg"
            variant="ghost"
          >
            <Icon path={mdiChevronLeft} size={1.5} className="mr-2" />
            Back
          </Button>
          <div className="mb-2 pl-4 border-l border-border flex flex-col items-start">
            {children?.map((child) => (
              <div
                key={child.url || child.title}
                className="py-4 border-b border-border w-[95%]"
              >
                {child.url ? (
                  <a href={child.url} className="py-2 block">
                    <h2 className="text-lg font-heading mb-2">{child.title}</h2>
                  </a>
                ) : (
                  <span className="py-2 block">
                    <h2 className="text-lg font-heading mb-2">{child.title}</h2>
                  </span>
                )}

                <ul className="list-none m-0">
                  {child.children?.map((subchild) => (
                    <li className="py-2" key={subchild.url || subchild.title}>
                      <Link
                        href={subchild.url || "#"}
                        target={subchild.external ? "_blank" : undefined}
                        rel={child.external ? "noopener noreferrer" : undefined}
                        aria-current={
                          currentPage === subchild.url ? "page" : undefined
                        }
                        className="text-foreground"
                      >
                        {subchild.title}{" "}
                        {subchild.external && (
                          <ExternalLink className="inline h-4 w-4" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
