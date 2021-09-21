import type { NavTWClasses } from '@/components/site/Nav/Nav';
import type { InPageNavTWClasses } from '@/components/layout/InPageNav/InPageNav';

type SCDPTailwindTypes =
  | 'px-gutter-all'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'heading-xs'
  | 'scroll-to-offset'
  | NavTWClasses
  | InPageNavTWClasses
  // @TODO - some transform utilities that are enabled by default
  // aren't being added to the classname gen. Why?
  | 'transform-none'
  | 'lg:transform-none'
  | 'lg:translate-none'
  // These are not yet supported by tailwindcss-classnames
  // even though they are official plugins
  | 'aspect-w-16'
  | 'aspect-h-9';

export default SCDPTailwindTypes;
