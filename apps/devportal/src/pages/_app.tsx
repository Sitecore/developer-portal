import { ChakraProvider } from '@chakra-ui/react';

import { IsSearchEnabled, SEARCH_CONFIG } from '@lib/search';
import { scdpTheme } from '@lib/theme/theme';
import { PageController, WidgetsProvider, trackEntityPageViewEvent } from '@sitecore-search/react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import TopBarProgress from 'react-topbar-progress-indicator';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';
import { Footer } from '../components/navigation/Footer';
import Navbar from '../components/navigation/NavBar';
import SearchInputSwitcher from '../components/sitecore-search/SearchInputSwitcher';

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false);

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
      <style jsx global>
        {`
          :root {
            --font-avenir: ${AvenirNextR.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={scdpTheme}>
        {progress && <TopBarProgress />}

        <Navbar>
          <SearchInputSwitcher />
        </Navbar>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SearchWrapper>
  );
}

export default MyApp;
