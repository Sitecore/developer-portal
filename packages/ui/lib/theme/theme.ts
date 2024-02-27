import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme, { toastOptions } from '@sitecore/blok-theme';

// Load customizations
import { cardTheme } from './components/cardTheme';
import { modalTheme } from './components/modalTheme';
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
      Modal: modalTheme,
    },
    sizes: {},
  },
  withProse({ baseStyle: proseBaseStyle }),
  sitecoreTheme
);

export { toastOptions };
