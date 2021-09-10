/**
 * Any modifications to this file will require a regeneration of types
 * for use with 'tailwind-classnames'
 *
 * npm run generate-css-types
 *
 */

module.exports = {
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Primary brand colors
      black: '#000000',
      charcoal: '#232323',
      red: '#fe2911',
      teal: '#1ca6a3',
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
    extend: {
      lineHeight: {
        tight: '1.15',
      },
    },
  },
  variants: {
    extend: {
      // We will inevitably need to extend some variants here.
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
