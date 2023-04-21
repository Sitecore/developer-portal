import localFont from 'next/font/local';

export const AvenirNextR = localFont({
  variable: '--font-avenirnext-r',
  fallback: ['Arial', 'Sans-Serif'],
  src: [
    {
      path: './src/AvenirNextW05-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './src/AvenirNextW05-ThinItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './src/AvenirNextW05-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './src/AvenirNextW05-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './src/AvenirNextW05-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './src/AvenirNextW05-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './src/AvenirNextW05-Demi.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './src/AvenirNextW05-DemiItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './src/AvenirNextW05-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './src/AvenirNextW05-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});
