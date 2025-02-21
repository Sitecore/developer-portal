import type { SystemStyleFunction } from '@chakra-ui/theme-tools';

export const proseBaseStyle: SystemStyleFunction = () => ({
  // h1:where(.prose>:first-child):not(:where([class~=not-prose] *))
  h1: {
    fontFamily: 'heading',
    fontWeight: '500',
    fontSize: { base: '4xl', md: '5xl' },
    lineHeight: '110%',
    //mb: { base: 2, md: 0 },
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: '500',
    lineHeight: '110%',
    fontSize: { base: '3xl', md: '4xl' },
    //mb: '1.5rem',
  },

  h3: {
    fontFamily: 'heading',
    fontWeight: '500',
    lineHeight: '110%',
    fontSize: { base: '2xl', md: '3xl' },
    //mt: { base: 2, md: 8 },
    //mb: '0.5rem',
  },
  h4: {
    fontFamily: 'heading',
    fontWeight: '700',
    lineHeight: '110%',
    fontSize: { base: 'md', md: 'lg' },
    //mt: { base: 0, md: 0 },
    //mb: '0.5rem',
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
    textDecoration: 'inherit',
    outline: 'none',
    color: 'primary',
    _hover: {
      color: 'primary.400',
      textDecoration: 'underline',
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
  'p>a': {
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    _hover: {
      textDecorationStyle: 'dotted',
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
    width: 'full',
    display: 'inline-grid',
    _dark: {
      bg: 'gray.700',
      border: '1px solid',
      borderColor: 'gray.400',
    },

    code: {
      fontWeight: 'medium',
      fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
      '&::before, &::after': {
        content: '""',
      },
      fontSize: 'inherit',
      backgroundColor: 'transparent',
      _dark: {
        backgroundColor: 'transparent',
      },
    },
  },
  code: {
    fontWeight: 'medium',
    fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
    '&::before, &::after': {
      content: '""',
    },
    fontSize: 'inherit',
    backgroundColor: 'gray.100',
    _dark: {
      backgroundColor: 'gray.700',
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
    p: {
      mb: 0,
    },
  },
  'ol>li::marker': {
    color: 'chakra-body-text',

    _dark: {
      color: 'chakra-inverse-text',
    },
  },
  'ul>li::marker': {
    color: 'chakra-body-text',

    _dark: {
      color: 'chakra-inverse-text',
    },
  },

  table: {
    width: 'full',
    my: 8,
    textAlign: 'start',
    borderColor: 'chakra-border-color',
    shadow: 'sm',
    tableLayout: 'auto',

    thead: {
      background: 'primary-fg',
      color: 'chakra-inverse-text',
      _dark: {
        background: 'neutral.800',
        color: 'chakra-subtle-text',
      },
    },

    th: {
      textAlign: 'inherit',
      fontWeight: 600,
      p: { base: 2, md: 3 },
      ':nth-of-type(1)': {
        borderTopLeftRadius: 'md',
      },
      ':nth-last-of-type(1)': {
        borderTopRightRadius: 'md',
      },
    },

    td: {
      p: { base: 2, md: 3 },
      verticalAlign: 'baseline',
    },

    tbody: {
      tr: {
        borderBottomWidth: '1px',
        borderColor: 'chakra-border-color',
        paddingTop: 4,
        _dark: {
          borderColor: 'chakra-border-color',
          background: 'neutral.800',
        },
        // td: {
        //   wordBreak: 'normal',
        // },
        // 'td:nth-of-type(1)': {
        //   minWidth: '20%',
        // },
        // 'td:nth-of-type(2)': {
        //   maxWidth: '65%',
        //   wordBreak: 'break-word',
        // },
        ':nth-last-of-type(1)': {
          borderBottomWidth: '0px',
          borderBottomColor: 'transparent',
        },
        ':nth-last-of-type(even)': {
          background: 'primary.50',
          _dark: {
            background: 'neutral.700',
          },
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
  // Custom overrides for prose Markdown components
  'div.chakra-card__header': {
    h2: {
      mt: { base: 0, md: 0 },
      mb: { base: 0, md: 0 },
    },
  },
  'div.chakra-alert': {
    p: {
      mt: { base: 0, md: 0 },
      mb: { base: 0, md: 0 },
    },
  },
});
