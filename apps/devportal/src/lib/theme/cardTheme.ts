import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  blurred: definePartsStyle({
    container: {
      backdropFilter: 'blur(16px)',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      background: 'whiteAlpha.300',
      color: 'white',
      _dark: {
        background: 'blackAlpha.300',
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

// export variants in the component theme
export const cardTheme = defineMultiStyleConfig({ variants });
