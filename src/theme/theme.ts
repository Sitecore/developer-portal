import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme from '@sitecore/blok-theme';
// Load customizations
import { cardTheme } from './components/cardTheme';
import { modalTheme } from './components/modalTheme';
import breakpoints from './foundations/breakpoints';
import { proseBaseStyle } from './proseTheme';

import '@fontsource/dm-sans';

export const scdpTheme = extendTheme(
  sitecoreTheme,
  {
    styles: {},
    breakpoints: {
      ...breakpoints,
    },
    colors: {},
    components: {
      Card: cardTheme,
      Modal: modalTheme,
      // Heading: {
      //   sizes: {
      //     xl: { fontFamily: 'DM Sans, sans-serif', fontWeight: '400' },
      //     md: { fontFamily: 'DM Sans, sans-serif', fontWeight: '500' },
      //   },
      // },
    },
    sizes: {},
  },
  withProse({ baseStyle: proseBaseStyle })
);
