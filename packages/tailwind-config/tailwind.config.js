const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    `../../packages/ui/**/*.{js,ts,jsx,tsx}`,
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'size-hero-pattern': '33.125rem', // 530px, matching SC.com
      ...defaultTheme.backgroundSize,
    },
    colors: {
      'theme-text': 'var(--theme-text)',
      'theme-text-alt': 'var(--theme-text-alt)',
      'theme-link-hover': 'var(--theme-link-hover)',
      'theme-bg': 'var(--theme-bg)',
      'theme-bg-alt': 'var(--theme-bg-alt)',
      'theme-outline': 'var(--theme-outline)',
      'theme-border': 'var(--theme-border)',
      'theme-border-alt': 'var(--theme-border-alt)',
      // Primary brand colors
      black: '#000000',
      charcoal: {
        light: '#AAACAC',
        DEFAULT: '#545959',
        dark: '#212621',
      },
      red: {
        lightest: '#fee1e1',
        lighter: '#FEB2B2',
        light: '#FC8181',
        DEFAULT: '#E53E3E',
        dark: '#9B2C2C',
        darker: '#822727',
        darkest: '#63171B',
      },
      teal: {
        light: '#81CCCD',
        lighter: '#4fd1c7',
        DEFAULT: '#02999A',
        dark: '#285d61',
        darker: '#234d52',
        darkest: '#1d3f44',
      },
      violet: {
        lightest: '#f6f6ff',
        lighter: '#e5e2ff',
        light: '#9a90fe',
        DEFAULT: '#5548d9',
        dark: '#3b2caa',
        darker: '#302686',
        darkest: '#201d67',
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
      sans: ['var(--font-avenirnext-r)', ...defaultTheme.fontFamily.sans],
      ltpro: ['var(--font-avenirnext-ltpro)', ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      // 12px
      '2xs': '0.75rem',
      // 14px
      xs: '0.875rem',
      // 16px
      sm: '0.95rem',
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
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    minHeight: {
      320: '320px',
      220: '120px',
      120: '120px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/heros/hero-plus-pattern.png')",
        'wide-hero-dark': "url('/images/heros/hero-wide-dark.png')",
        'wide-hero-light': "url('/images/heros/hero-wide-light.png')",
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
        DEFAULT: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        md: '0 0 12px 0 rgba(0, 0, 0, 0.1)',
        lg: '0 15px 15px 0 rgba(0, 0, 0, 0.1)',
        dark: '0 2px 4px 0 rgba(0, 0, 0, 0.8)',
        ['lg-dark']: '0 15px 15px 0 rgba(0, 0, 0, 0.8)',
        ['md-dark']: '0 0 12px 0 rgba(0, 0, 0, 0.8)',
        ['theme']: 'var(--theme-shadow)',
        ['theme-md']: 'var(--theme-shadow-md)',
        ['theme-lg']: 'var(--theme-shadow-lg)',
      },
      lineHeight: {
        tight: '1.15',
      },
      screens: {
        'lg-mw': {
          max: '1023px',
        },
      },
      spacing: {
        em: '1em',
        '1.625em': '1.625em',
        inherit: 'inherit',
        gutter: '1rem',
        'gutter-md': '2rem',
        'gutter-lg': '4rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ['ol > li:before']: {
              color: 'var(--theme-text)',
            },
            //color: theme('colors.theme-text'),
            p: {
              fontSize: '0.95rem', // key can be in camelCase...
            },
            a: {
              color: 'inherit',
            },
            ['a.text-white']: {
              color: '#ffffff',
              textDecoration: 'none',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
            },
            code: {
              //color: theme('colors.theme-text'),
              backgroundColor: 'rgba(128, 128, 128, 0.15)',
              padding: '0.125em',
              fontWeight: 400,
            },
            pre: {
              backgroundColor: 'transparent',
              border: '1px solid var(--theme-border-alt)',
              padding: 0,
            },
            thead: {
              // This nastiness is required because Tailwind Typography stinks.
              // OR because it's being trumped in the cascade by the prose
              // classes even though tbody td is not. Makes no sense.
              tr: {
                th: {
                  ['padding-left']: '1.25em',
                  ['padding-right']: '1.25em',
                },
              },
              color: 'inherit',
            },
            tbody: {
              td: {
                padding: '1.25em',
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      translate: ['focus', 'group-hover', 'group-focus'],
      backgroundImage: ['dark'],
      display: ['responsive', 'dark'],
      visibility: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
