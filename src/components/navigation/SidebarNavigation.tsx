'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { Button } from '@components/ui/button';
import { mdiChevronDown, mdiChevronRight, mdiMinus, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { appendPathToBasePath } from '@/src/lib/utils/stringUtil';
import { ManifestConfig, ManifestNavigationItem } from '@/src/lib/interfaces/manifest';
import { GetProductLogo } from '@/src/lib/assets';
import SidebarSearch from './SidebarSearch';
import { cn } from '@lib/utils';

export interface SidebarNavigationProps {
  title?: string;
  showSearch?: boolean;
  config: ManifestConfig;
}

let basePath: string;
let showRootAsSections: boolean | undefined;
let manifestConfig = {} as ManifestConfig;

const SidebarNavigation = ({ config }: SidebarNavigationProps) => {
  manifestConfig = config;
  const router = useRouter();
  const [searchActive, setSearchActive] = useState<boolean>(false);

  showRootAsSections = config.showRootAsSections;
  basePath = config.path;

  const { theme } = useTheme();
  const logoSrc = config.productLogo 
    ? (theme === 'dark' 
        ? GetProductLogo(config.productLogo, 'Dark')
        : GetProductLogo(config.productLogo, 'Light'))
    : undefined;

  return (
    <div className="mt-4">
      {config.enableSearch && (
        <div className="hidden md:block">
          <SidebarSearch config={config} onFocus={() => setSearchActive(true)} onBlur={() => setSearchActive(false)} />
        </div>
      )}

      {config.heading && !searchActive && (
        <Link href={config.path} className="hidden md:block text-sm uppercase tracking-wide text-muted-foreground my-4 mx-0 hover:underline">
          {config.title}
        </Link>
      )}

      {config.productLogo && logoSrc && (
        <div className="h-6 w-full relative my-4">
          <Image src={logoSrc} alt={config.title} fill style={{ objectFit: 'fill' }} sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw" className="!w-auto" />
        </div>
      )}
      {/* Desktop */}
      <div className={cn('flex flex-col hidden md:flex', searchActive && 'hidden')}>
        {showRootAsSections && config.routes.map((link, i) => <SidebarGroupItem {...link} key={i} />)}

        {!showRootAsSections && (
          <ul className="flex flex-col gap-1 w-full">
            {config.routes.map((link, i) => (
              <li key={i} className="flex flex-col gap-1 w-full">
                <MenuItemLink href={appendPathToBasePath(basePath, link.path)} title={link.title} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile */}
      <DropDownMenu config={config} key={router.asPath} />
    </div>
  );
};

export const SidebarGroupItem = (ManifestNavigationItem: ManifestNavigationItem) => {
  const currentBasePath = appendPathToBasePath(basePath, ManifestNavigationItem.path);

  return (
    <>
      {/* Load collapsable menu when the manifest.json contains the property collapsed  */}
      {ManifestNavigationItem.collapsed != null ? (
        <SidebarCollapsableGroupItem {...ManifestNavigationItem} />
      ) : (
        // Load the normal menu
        <li>
          {ManifestNavigationItem.ignoreLink != null && ManifestNavigationItem.ignoreLink && (
            <p className="text-sm uppercase tracking-wide text-muted-foreground my-4" data-type="title">
              {ManifestNavigationItem.title}
            </p>
          )}

          {!showRootAsSections && <MenuItemLink href={ManifestNavigationItem.path} title={ManifestNavigationItem.title} />}
          <ul className="flex flex-col gap-1 w-full" role="list">
            {ManifestNavigationItem.children?.map((child, i) =>
              child.children?.length > 0 ? <MenuItemGroup manifestItem={child} basePath={currentBasePath} key={i} /> : <MenuItemLink href={appendPathToBasePath(currentBasePath, child.path)} title={child.title} key={i} />
            )}
          </ul>
        </li>
      )}
    </>
  );
};

const SidebarCollapsableGroupItem = (ManifestNavigationItem: ManifestNavigationItem) => {
  const [isOpen, setIsOpen] = useState(ManifestNavigationItem.collapsed ?? false);

  return (
    <li className="flex flex-col" data-type="collapsable-group-item">
      <div className="flex justify-between items-center mt-4">
        {ManifestNavigationItem.ignoreLink == false ? (
          <Link href={appendPathToBasePath(basePath, ManifestNavigationItem.path)} className="text-sm uppercase tracking-wide text-muted-foreground cursor-pointer hover:underline">
            {ManifestNavigationItem.title}
          </Link>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm uppercase tracking-wide text-muted-foreground cursor-pointer hover:underline">
            {ManifestNavigationItem.title}
          </button>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
          aria-label=""
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon path={isOpen ? mdiPlus : mdiMinus} size={1} className="text-muted-foreground" />
        </Button>
      </div>

      {!isOpen && (
        <ul className="flex flex-col gap-1 w-full mt-2" data-type="buttons">
          {ManifestNavigationItem.children?.map((child, i) =>
            child.children?.length > 0 ? <MenuItemGroup manifestItem={child} basePath={basePath} key={i} /> : <MenuItemLink href={appendPathToBasePath(basePath, child.path)} title={child.title} key={i} />
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
      <Button asChild variant="ghost" className={cn('px-2 w-full justify-start', router.asPath.endsWith(href) && 'bg-accent')} data-type="menu-item-link">
        <Link href={href}>
          {title}
        </Link>
      </Button>
    </li>
  );
};

const MenuItemGroup = ({ manifestItem, basePath, index }: { manifestItem: ManifestNavigationItem; basePath: string; index?: number }) => {
  const router = useRouter();
  const currentRouteIncludesChild = router.asPath.includes(`${basePath}/${manifestItem.path}`) || manifestItem.children?.some((child) => router.asPath.includes(`${basePath}/${child.path}`));
  const currentRouteActive = router.asPath.endsWith(`${basePath}/${manifestItem.path}`) || manifestItem.children?.some((child) => router.asPath.includes(`${basePath}/${child.path}`));
  const [isOpen, setIsOpen] = useState(currentRouteIncludesChild);
  const currentBasePath = appendPathToBasePath(basePath, manifestItem.path);

  return (
    <li key={index} data-type="menu-item-group" className="list-none">
      <Button
        variant="ghost"
        className={cn('justify-between w-full transition ease-in-out', currentRouteActive && 'bg-accent')}
        onClick={() => setIsOpen(!isOpen)}
      >
        {manifestItem.ignoreLink ? (
          <span>{manifestItem.title}</span>
        ) : (
          <Link href={appendPathToBasePath(basePath, manifestItem.path)} className="flex-1 text-left">
            {manifestItem.title}
          </Link>
        )}
        <Icon path={isOpen ? mdiChevronDown : mdiChevronRight} size={1} />
      </Button>

      {isOpen && (
        <ul className="pl-2">
          {manifestItem.children.map((link, i) => {
            if (link.children?.length > 0) {
              return <MenuItemGroup manifestItem={link} basePath={appendPathToBasePath(currentBasePath, link.path)} key={i} />;
            }

            return <MenuItemLink href={appendPathToBasePath(currentBasePath, link.path)} title={link.title} key={i} />;
          })}
        </ul>
      )}
    </li>
  );
};

const DropDownMenu = ({ config, ...rest }: SidebarNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden" {...rest}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full flex items-center justify-between"
      >
        {config.title}
        <Icon path={mdiChevronDown} size={1} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </Button>
      {isOpen && (
        <div className="relative">
          <ul className="flex flex-col gap-1 w-full mt-2">
            {config.routes.map((link, i) => (
              <SidebarGroupItem {...link} key={i} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SidebarNavigation;
