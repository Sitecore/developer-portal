import type { SystemStyleFunction } from '@chakra-ui/theme-tools';

export const proseBaseStyle: SystemStyleFunction = () => ({
  //h1:where(.prose>:first-child):not(:where([class~=not-prose] *))
  h1: {
    fontFamily: 'heading',
    fontWeight: '900',
    fontSize: { base: '4xl', md: '5xl' },
    //mb: { base: 2, md: 0 },
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: '700',
    fontSize: { base: '2xl', md: '3xl' },
    //mt: { base: 0, md: 0 },
    //mb: { base: 0, md: 0 },
  },
  h3: {
    fontFamily: 'heading',
    fontWeight: '600',
    fontSize: { base: 'xl', md: '2xl' },
    mt: { base: 2, md: 4 },
    mb: { base: 0, md: 0 },
  },
  h4: {
    fontFamily: 'heading',
    fontWeight: 'semibold',
    fontSize: { base: 'md', md: 'lg' },
    mt: { base: 0, md: 0 },
    mb: 2,
  },
  p: {
    fontFamily: 'body',
    fontWeight: 'normal',
    fontSize: 'md',
    lineHeight: 6,
    mt: 0,
    mb: 6,
  },
  a: {
    fontWeight: 500,
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: {
      textDecoration: 'underline',
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
  hr: {
    my: { base: 12, md: 14 },
    borderColor: 'gray.200',

    _dark: {
      borderColor: 'gray.600',
    },
  },
  blockquote: {
    fontStyle: 'italic',
    fontWeight: 'semibold',
    paddingStart: 4,
    my: { base: 6, md: 8 },
    borderStartWidth: '4px',
    borderStartColor: 'gray.200',

    _dark: {
      borderStartColor: 'gray.600',
    },
  },

  pre: {
    p: 4,
    rounded: 'md',
    bg: 'gray.700',
    color: 'gray.50',
    overflow: 'auto',

    _dark: {
      bg: 'gray.800',
    },

    code: {
      fontWeight: 'normal',

      '&::before, &::after': {
        content: '""',
      },
    },
  },
  code: {
    fontWeight: 'semibold',

    '&::before, &::after': {
      content: '"`"',
    },
  },

  figure: {
    my: 8,

    figcaption: {
      color: 'gray.400',
      mt: 3,

      _dark: {
        color: 'gray.500',
      },
    },
  },

  ul: {
    paddingStart: 6,
    listStyleType: 'disc',
  },
  ol: {
    paddingStart: 6,
  },
  li: {
    paddingStart: 2,
    my: 3,
  },
  'ol>li::marker': {
    color: 'gray.400',

    _dark: {
      color: 'gray.500',
    },
  },
  'ul>li::marker': {
    color: 'gray.500',

    _dark: {
      color: 'gray.300',
    },
  },

  table: {
    width: 'full',
    my: 8,
    textAlign: 'start',

    thead: {
      borderBottomWidth: '1px',
      borderBottomColor: 'gray.300',

      _dark: {
        borderBottomColor: 'gray.600',
      },
    },

    th: {
      textAlign: 'inherit',
      fontWeight: 600,
      p: { base: 2, md: 3 },
    },

    td: {
      p: { base: 2, md: 3 },
      verticalAlign: 'baseline',
    },

    tbody: {
      tr: {
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.200',

        _dark: {
          borderBottomColor: 'gray.700',
        },

        ':last-of-type': {
          borderBottomWidth: '0px',
          borderBottomColor: 'transparent',
        },
      },
    },

    tfoot: {
      tr: {
        borderTopWidth: '1px',
        borderTopColor: 'gray.300',

        _dark: {
          borderTopColor: 'gray.600',
        },
      },
    },
  },

  'h1 + *, h2 + *, h3 + *, h4 + *, hr + *': {
    mt: 0,
  },
});
