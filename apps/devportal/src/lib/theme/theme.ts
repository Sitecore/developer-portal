import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme from '@sitecore/blok-theme';
// Load customizations
import { cardTheme } from './components/cardTheme';
import breakpoints from './foundations/breakpoints';
import { proseBaseStyle } from './proseTheme';

export const scdpTheme = extendTheme(
  {
    styles: {},
    breakpoints: {
      ...breakpoints,
    },
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
