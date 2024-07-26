import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import React from 'react';
import { PreviewProvider } from '../src/context/PreviewContext';
import { scdpTheme } from '../src/theme/theme';

initialize();

const preview: Preview = {
  parameters: {
    chakra: {
      theme: scdpTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  loaders: [mswLoader], // 👈 Add the MSW loader to all stories
  decorators: [
    (Story) => (
      <ChakraProvider theme={scdpTheme}>
        <PreviewProvider hostname={''}>
          <Story />
        </PreviewProvider>
      </ChakraProvider>
    ),
  ],
};

export default preview;
