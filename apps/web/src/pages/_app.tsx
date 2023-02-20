import Head from 'next/head';
import React from 'react';
import { AvenirNextLTPro } from 'ui/common/fonts/avenirNextLTPro';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';
import Footer from 'ui/layouts/components/footer/Footer';
import Nav from 'ui/layouts/components/header/Nav';
import { mainNavigation, sitecoreQuickLinks } from '../../data/navigation';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </Head>

      <div
        className={`${AvenirNextR.variable} ${AvenirNextLTPro.variable} theme-light text-theme-text bg-theme-bg dark:theme-dark font-sans`}
      >
        <Nav navigationData={mainNavigation} sitecoreQuickLinks={sitecoreQuickLinks}></Nav>

        <Component {...pageProps} />
        <Footer />
      </div>
    </React.StrictMode>
  );
}
