import localFont from '@next/font/local';

export const AvenirNextLTPro = localFont({
  variable: '--font-avenirnext-ltpro',
  fallback: ['Arial', 'Sans-Serif'],
  src: [
    {
      path: './src/Linotype-AvenirNextLTPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './src/Linotype-AvenirNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './src/Linotype-AvenirNextLTPro-Demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './src/Linotype-AvenirNextLTPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
