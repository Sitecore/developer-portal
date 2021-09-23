/**
 * Any modifications to this file will require a regeneration of types
 * for use with 'tailwind-classnames'
 *
 * npm run generate-css-types
 *
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'size-hero-pattern': '33.125rem', // 530px, matching SC.com
      ...defaultTheme.backgroundSize,
    },
    colors: {
      'theme-text': 'var(--theme-text)',
      'theme-text-alt': 'var(--theme-text-alt)',
      'theme-bg': 'var(--theme-bg)',
      'theme-bg-alt': 'var(--theme-bg-alt)',
      'theme-outline': 'var(--theme-outline)',
      'theme-border': 'var(--theme-border)',
      // Primary brand colors
      black: '#000000',
      charcoal: '#232323',
      red: '#fe2911',
      teal: {
        light: '#eefcfc',
        DEFAULT: '#1ca6a3',
        dark: '#0f807e',
      },
      white: '#ffffff',
      gray: {
        lightest: '#f0f0f0',
        light: '#cccccc',
        DEFAULT: '#999999',
        dark: '#707070',
        darkest: '#333333',
      },
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontFamily: {
      sans: [
        'Avenir Next',
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
    },
    fontSize: {
      // 12px
      '2xs': '0.75rem',
      // 14px
      xs: '0.875rem',
      // 16px
      sm: '1rem',
      // 18px
      base: '1.125rem',
      // 20px
      lg: '1.25rem',
      // 24px
      xl: '1.5rem',
      // 36px
      '2xl': '2.25rem',
      // 48px
      '3xl': '3rem',
      // 60px
      '4xl': '3.75rem',
    },
    fontWeight: {
      thin: 200,
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    minHeight: {
      320: '320px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/heros/hero-plus-pattern.png')",
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
        lg: '0 2px 15px 0 rgba(0, 0, 0, 0.2)',
      },
      lineHeight: {
        tight: '1.15',
      },
      screens: {
        'lg-mw': { max: '1023px' },
      },
      spacing: {
        em: '1em',
        '1.75em': '1.75em',
        inherit: 'inherit',
        gutter: '1rem',
        'gutter-md': '2rem',
        'gutter-lg': '4rem',
      },
    },
  },
  variants: {
    extend: {
      translate: ['focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
