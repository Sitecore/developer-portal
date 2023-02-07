import type { InPageNavTWClasses } from '@/src/components/sidebar-nav/SidebarNav';
import type { NavTWClasses } from '@/src/layouts/components/head/Nav';
import classnamesLib from 'clsx';
import { TTailwindString } from 'tailwindcss-classnames';

type TUtilityFunction<T extends string> = (
  ...args: Array<T | `!${T}` | null | undefined | TTailwindString>
) => TTailwindString;

export const customClasses: TUtilityFunction<SCDPTailwindTypes> = classnamesLib as any;

type SCDPTailwindTypes =
  | 'px-gutter-all'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'heading-xs'
  | 'scroll-to-offset'
  | 'theme-light'
  | 'theme-dark'
  | NavTWClasses
  | InPageNavTWClasses
  // @TODO - some transform utilities that are enabled by default
  // aren't being added to the classname gen. Why?
  | 'transform'
  | 'transform-none'
  | 'lg:transform-none'
  | 'lg:translate-none'
  | '-translate-x-2/4'
  | '-translate-y-2/4'
  | '-mx-gutter'
  // @ TODO find right way to generate type for hover dark mode
  | 'dark:hover:text-teal'
  | 'dark:hover:bg-teal'
  | 'dark:border-theme-bg'
  | 'dark:text-teal'
  | 'hover:text-white'
  | 'current'
  | 'not-prose'
  | 'lg';

export default SCDPTailwindTypes;
