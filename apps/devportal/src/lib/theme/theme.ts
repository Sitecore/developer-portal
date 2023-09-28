import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme from '@sitecore/blok-theme';
// Load customizations
import { cardTheme } from './cardTheme';
import { proseBaseStyle } from './proseTheme';

export const scdpTheme = extendTheme(
  {
    styles: {},
    colors: {},
    components: {
      Card: cardTheme,
    },
    sizes: {},
    fonts: {
      heading: 'var(--font-avenir)',
    },
  },
  withProse({ baseStyle: proseBaseStyle }),
  sitecoreTheme
);
