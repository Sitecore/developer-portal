/* eslint-disable react/no-unknown-property */
// Global
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
// Data
import { mainNavigation, sitecoreQuickLinks } from '@/data/data-navigation';
// Components
import Footer from 'ui/layouts/components/footer/Footer';
import Nav from 'ui/layouts/components/header/Nav';
// Local
import '@/src/styles/global.css';
import React from 'react';
// Fonts
import { Environment, PageController, WidgetsProvider, trackEntityPageViewEvent } from '@sitecore-search/react';
import { ThemeProvider } from 'next-themes';
import { AvenirNextLTPro } from 'ui/common/fonts/avenirNextLTPro';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';
import PreviewNotification from '../components/common/PreviewNotification';
import SearchInputSwitcher from '../components/integrations/sitecore-search/SearchInputSwitcher';
const SEARCH_CONFIG = {
  env: process.env.NEXT_PUBLIC_SEARCH_APP_ENV as Environment,
  customerKey: process.env.NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY,
  apiKey: process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY,
  useToken: true,
};

function SCDPApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPreview: boolean = router.isPreview;

  // useEffect for basic page views tracking via router/gtag.
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GTM_ID as string,
      auth: process.env.NEXT_PUBLIC_GTM_AUTH as string,
      preview: process.env.NEXT_PUBLIC_GTM_ENVIRONMENT as string,
    };
    TagManager.initialize(tagManagerArgs);
    PageController.getContext().setLocaleLanguage('en');
    PageController.getContext().setLocale({ country: 'us', language: 'en' });
    trackEntityPageViewEvent("content", [{ id: process.env.NEXT_PUBLIC_SEARCH_DOMAIN_ID_PREFIX + document.location.pathname.replace(/[/:.]/g, '_').replace(/_+$/,'') }]);
  });

  return (
    <WidgetsProvider {...SEARCH_CONFIG}>
      <ThemeProvider storageKey="SDPDarkMode" attribute="class">
        <React.StrictMode>
          <Head>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
          </Head>

          <PreviewNotification enabled={isPreview} page={router.asPath} />

          <div className={`${AvenirNextR.variable} ${AvenirNextLTPro.variable} dark:theme-dark theme-light text-theme-text bg-theme-bg  font-sans`}>
            <Nav navigationData={mainNavigation} sitecoreQuickLinks={sitecoreQuickLinks}>
              <SearchInputSwitcher />
            </Nav>
            <Component {...pageProps} />
            <Footer />
          </div>
        </React.StrictMode>
      </ThemeProvider>
    </WidgetsProvider>
  );
}

export default SCDPApp;
