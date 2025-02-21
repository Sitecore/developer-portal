import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme from '@sitecore/blok-theme';
// Load customizations
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import { cardTheme } from './components/cardTheme';
import { Heading } from './components/heading';
import { modalTheme } from './components/modalTheme';
import breakpoints from './foundations/breakpoints';
import { proseBaseStyle } from './proseTheme';

export const scdpTheme = extendTheme(
  sitecoreTheme,
  {
    fonts: {
      heading: `'DM Sans', sans-serif`,
    },
    styles: {},
    breakpoints: {
      ...breakpoints,
    },
    colors: {},
    components: {
      Card: cardTheme,
      Modal: modalTheme,
      Heading: Heading,
    },
    sizes: {},
  },
  withProse({ baseStyle: proseBaseStyle })
);
