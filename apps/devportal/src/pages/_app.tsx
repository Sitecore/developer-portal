/* eslint-disable react/no-unknown-property */
// Global
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import { PageController, WidgetsProvider, trackEntityPageViewEvent } from '@sitecore-search/react';
import { ThemeProvider } from 'next-themes';
import TopBarProgress from 'react-topbar-progress-indicator';
import { AvenirNextLTPro } from 'ui/common/fonts/avenirNextLTPro';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';
import { IsSearchEnabled, SEARCH_CONFIG } from '../common/search';
import PreviewNotification from '../components/common/PreviewNotification';
import SearchInputSwitcher from '../components/integrations/sitecore-search/SearchInputSwitcher';

function SCDPApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false);
  const router = useRouter();
  const isPreview: boolean = router.isPreview;

  TopBarProgress.config({
    barColors: {
      '0': '#fca5a5',
      '0.5': '#b91c1c',
      '1.0': '#450a0a',
    },
    shadowBlur: 2,
  });

  Router.events.on('routeChangeStart', () => {
    setProgress(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setProgress(false);
  });

  // useEffect for basic page views tracking via router/gtag.
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GTM_ID as string,
      auth: process.env.NEXT_PUBLIC_GTM_AUTH as string,
      preview: process.env.NEXT_PUBLIC_GTM_ENVIRONMENT as string,
    };
    TagManager.initialize(tagManagerArgs);

    if (IsSearchEnabled()) {
      PageController.getContext().setLocaleLanguage('en');
      PageController.getContext().setLocale({ country: 'us', language: 'en' });
      trackEntityPageViewEvent('content', { items: [{ id: process.env.NEXT_PUBLIC_SEARCH_DOMAIN_ID_PREFIX + document.location.pathname.replace(/[/:.]/g, '_').replace(/_+$/, '') }] });
    }
  });

  const SearchWrapper = ({ children }: any) => (IsSearchEnabled() ? <WidgetsProvider {...SEARCH_CONFIG}>{children}</WidgetsProvider> : children);

  return (
    <SearchWrapper>
      <ThemeProvider storageKey="SDPDarkMode" attribute="class">
        <React.StrictMode>
          <Head>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
          </Head>
          {progress && <TopBarProgress />}
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
    </SearchWrapper>
  );
}

export default SCDPApp;
