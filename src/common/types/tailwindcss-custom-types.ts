import type { NavTWClasses } from '@/src/layouts/components/head/Nav';
import type { InPageNavTWClasses } from '@/src/components/sidebar-nav/SidebarNav';

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
  // These are not yet supported by tailwindcss-classnames
  // even though they are official plugins
  | 'aspect-w-3'
  | 'aspect-w-16'
  | 'aspect-h-4'
  | 'aspect-h-9'
  // @ TODO find right way to generate type for hover dark mode
  | 'dark:hover:text-teal'
  | 'dark:hover:bg-teal'
  | 'current';

export default SCDPTailwindTypes;
