/* eslint-disable react/no-unknown-property */
// Global
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
// Components
import Footer from '@/src/layouts/components/footer/Footer';
import Nav from '@/src/layouts/components/head/Nav';
// Local
import '@/src/styles/global.css';
import React from 'react';
// Fonts
import { AvenirNextLTPro } from '../common/fonts/avenirNextLTPro';
import { AvenirNextR } from '../common/fonts/avenirNextR';

function SCDPApp({ Component, pageProps }: AppProps) {
  // useEffect for basic page views tracking via router/gtag.
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.GTM_ID as string,
      auth: process.env.GTM_AUTH as string,
      preview: process.env.GTM_ENVIRONMENT as string,
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <React.StrictMode>
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </Head>
      <div
        className={`${AvenirNextR.variable} ${AvenirNextLTPro.variable} font-sans theme-light text-theme-text bg-theme-bg dark:theme-dark`}
      >
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default SCDPApp;
