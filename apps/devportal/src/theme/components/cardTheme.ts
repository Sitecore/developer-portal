import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  blurred: definePartsStyle({
    container: {
      shadow: 'dark-lg',
      backdropFilter: 'blur(16px)',
      background: 'whiteAlpha.300',
      color: 'white',
      _dark: {
        background: 'blackAlpha.300',
        shadow: 'dark-lg',
      },
    },
    header: {},
    body: {
      color: 'white',
      _dark: {},
    },
    footer: {
      color: 'white',
      '*:link, *:visited': {
        color: 'white',
      },
      _dark: {
        '*:link, *:visited': {
          color: 'white',
        },
      },
    },
  }),
  borderedImage: definePartsStyle({
    container: {
      background: 'transparent',
      color: 'white',
      _hover: {
        shadow: 'none',
      },
    },
    header: {
      border: 'md',
      borderRadius: 'md',
      borderWidth: '1px',
      background: 'chakra-bg',
    },
    body: {
      padding: '0',
      color: 'chakra-body-text',
    },
    footer: {
      color: 'chakra-body-text',
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ variants });
