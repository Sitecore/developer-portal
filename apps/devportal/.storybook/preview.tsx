import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import { scdpTheme } from '../src/theme/theme';

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
  decorators: [
    (Story) => (
      <ChakraProvider theme={scdpTheme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
