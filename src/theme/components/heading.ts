import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  sizes: {
    // The following size overrides add an additional smaller size at the smallest breakpoint. They're disabled because probably unnecessary to ensure good mobile experience.
    '4xl': {
      fontSize: ['5xl', '6xl', '7xl'],
      fontWeight: '700',
    },
    '3xl': {
      fontSize: ['4xl', '5xl', '6xl'],
      fontWeight: '700',
    },
    '2xl': {
      fontSize: ['3xl', '4xl', '5xl'],
      fontWeight: '700',
    },
    xl: {
      fontSize: ['2xl', '3xl', '4xl'],
      fontWeight: '700',
    },
    lg: {
      fontSize: ['xl', '2xl', '3xl'],
      fontWeight: '500',
    },
    md: {
      fontSize: 'lg',
      fontWeight: '500',
    },
    sm: {
      fontSize: 'sm',
      fontWeight: '500',
    },
  },
  variants: {
    section: {
      color: 'chakra-subtle-text',
      textTransform: 'uppercase',
      fontSize: 'sm',
    },
    eyebrow: {
      textTransform: 'uppercase',
      letterSpacing: '0.0175em',
      fontWeight: '600',
    },
  },
});
