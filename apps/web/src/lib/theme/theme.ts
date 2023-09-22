import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme from '@sitecore/blok-theme';
// Load customizations
import { proseBaseStyle } from './proseTheme';

export const scdpTheme = extendTheme(
  {
    styles: {},
    colors: {},
    components: {},
    sizes: {},
    fonts: {
      heading: 'var(--font-avenir)',
    },
  },
  withProse({ baseStyle: proseBaseStyle }),
  sitecoreTheme
);
