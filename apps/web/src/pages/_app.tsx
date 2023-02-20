import Head from 'next/head';
import React from 'react';
import Nav from 'ui/layouts/components/header/Nav';
import { mainNavigation, sitecoreQuickLinks } from '../../data/navigation';
import '../styles/global.css';
//${AvenirNextR.variable} ${AvenirNextLTPro.variable}
export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </Head>

      <div className={`theme-light text-theme-text bg-theme-bg dark:theme-dark font-sans`}>
        <Nav navigationData={mainNavigation} sitecoreQuickLinks={sitecoreQuickLinks}></Nav>
        <Component {...pageProps} />
      </div>
    </React.StrictMode>
  );
}
