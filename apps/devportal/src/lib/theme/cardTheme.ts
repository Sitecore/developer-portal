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
};

export const cardTheme = defineMultiStyleConfig({ variants });