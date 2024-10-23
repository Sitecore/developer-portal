import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import sitecoreTheme from '@sitecore/blok-theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import React from 'react';
import { PreviewProvider } from '../src/context/PreviewContext';
import { scdpTheme } from '../src/theme/theme';

initialize();

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
    (Story) => (
      <ChakraProvider theme={extendTheme(sitecoreTheme, scdpTheme)}>
        <PreviewProvider hostname={''}>
          <Story />
        </PreviewProvider>
      </ChakraProvider>
    ),
  ],
};
export default preview;
