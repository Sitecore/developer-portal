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
      primary: {
        /* spin from tailwind violet */
        50: '#f3f3ff',
        100: '#e9e9fe',
        200: '#b6b5fd',
        300: '#918bfa',
        400: '#6c5cf6',
        500: '#5548d9',
        600: '#6c5cf6',
        700: '#3d21b6',
        800: '#341d95',
        900: '#341d95',
      },
      blackAlpha: {
        50: 'rgba(0,0,0,0.03)',
        100: 'rgba(0,0,0,0.07)',
        200: 'rgba(0,0,0,0.10)',
        300: 'rgba(0,0,0,0.17)',
        400: 'rgba(0,0,0,0.36)',
        500: 'rgba(0,0,0,0.36)',
        600: 'rgba(0,0,0,0.68)',
        700: 'rgba(0,0,0,0.75)',
        800: 'rgba(0,0,0,0.85)' /* Normal text */,
        900: 'rgba(0,0,0,0.96)',
      },
      whiteAlpha: {
        50: 'rgba(255,255,255,0.03)',
        100: 'rgba(255,255,255,0.07)',
        200: 'rgba(255,255,255,0.10)',
        300: 'rgba(255,255,255,0.17)',
        400: 'rgba(255,255,255,0.36)',
        500: 'rgba(255,255,255,0.55)',
        600: 'rgba(255,255,255,0.68)',
        700: 'rgba(255,255,255,0.75)',
        800: 'rgba(255,255,255,0.85)',
        900: 'rgba(255,255,255,0.96)',
      },
      gray: {
        50: '##f8f8f8	',
        100: '#ededed	',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        // 900: '#171717',
        /*950*/ 900: '#0a0a0a',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fca5a5',
        300: '#f87171',
        400: '#ef4444',
        500: '#dc2626',
        600: '#b91c1c',
        700: '#991b1b',
        800: '#7f1d1d',
        900: '#450a0a',
      },
      /*amber*/ orange: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fcd34d',
        300: '#fbbf24',
        400: '#f59e0b',
        500: '#d97706',
        600: '#b45309',
        700: '#92300e',
        800: '#78350f',
        900: '#451a03',
      },
      yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fde047',
        300: '#facc15',
        400: '#eab308',
        500: '#ca8a04',
        600: '#a16207',
        700: '#854d0e',
        800: '#713f12',
        900: '#421506',
      },
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#86efac',
        300: '#4ade80',
        400: '#22c55e',
        500: '#16a34a',
        600: '#15803d',
        700: '#166534',
        800: '#14532d',
        900: '#052e16',
      },
      teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#5eead4',
        300: '#2dd4bf',
        400: '#14b8a6',
        // 500: tinycolor('0d9488').mix('0f766e').toHexString(), /*darkened for a11y*/
        500: '#0d9488',
        600: '#0f766e',
        700: '#115e59',
        800: '#134e4a',
        900: '#042f2e',
      },
      cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#67e8f9',
        300: '#22d3ee',
        400: '#06b6d4',
        500: '#0891b2',
        600: '#0e7490',
        700: '#155e75',
        800: '#164e63',
        900: '#083344',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        // 150: '#bfdbfe',
        200: '#93c5fd',
        300: '#60a5fa',
        400: '#3b82f6',
        500: '#2563eb',
        600: '#1d4ed8',
        700: '#1e40af',
        800: '#1e3a8a',
        900: '#172554',
      },
      purple: {
        /* spin from tailwind violet */
        50: '#f3f3ff	',
        100: '#e9e9fe',
        200: '#b6b5fd',
        300: '#918bfa',
        400: '#6c5cf6',
        500: '#5548d9',
        600: '#4a28d9',
        700: '#3d21b6',
        800: '#341d95',
        900: '#1d1065',
      },
      /*fuchsia*/ pink: {
        50: '#fdf4ff',
        100: '#fae8ff',
        // 150: '#f5d0fe',
        200: '#f0abfc',
        300: '#e879f9',
        400: '#d946ef',
        500: '#c026d3',
        600: '#a21caf',
        700: '#86198f',
        800: '#701a75',
        900: '#4a044e',
      },
      white: '#ffffff',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontFamily: {
      //sans: ['var(--font-avenirnext-r)', ...defaultTheme.fontFamily.sans],
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI', 'Symbol'],
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
      base: '1rem',
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
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    minHeight: {
      420: '420px',
      320: '320px',
      220: '220px',
      120: '120px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/heros/hero-plus-pattern.png')",
        'wide-hero-dark': "url('/images/heros/hero-wide-dark.webp')",
        'wide-hero-light': "url('/images/heros/hero-wide-light.webp')",
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
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
        light: {
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
              // color: theme('colors.theme-text'),
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
              color: 'inherit',
            },
            tbody: {
              tr: {
                th: {
                  p: {
                    marginTop: '0.25em',
                    marginBottom: '0.25em',
                  },
                },
              },
              td: {
                p: {
                  marginTop: '0.25em',
                  marginBottom: '0.25em',
                },
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
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
