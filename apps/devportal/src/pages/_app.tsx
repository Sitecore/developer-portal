import { ChakraProvider } from '@chakra-ui/react';
import { IsSearchEnabled, SEARCH_CONFIG } from '@lib/search';
import { scdpTheme } from '@lib/theme/theme';
import { PageController, WidgetsProvider, trackEntityPageViewEvent } from '@sitecore-search/react';
import { Footer } from '@src/components/navigation/Footer';
import Navbar from '@src/components/navigation/NavBar';
import SearchInputSwitcher from '@src/components/sitecore-search/SearchInputSwitcher';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import TagManager from 'react-gtm-module';
import TopBarProgress from 'react-topbar-progress-indicator';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';

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

  const contentInnerRef = useRef(null);
  let conversionTriggered = false;
  const onScroll = useCallback(() => {
    if (contentInnerRef.current) {
      const { clientHeight, offsetTop } = contentInnerRef.current;
      const contentAllViewed = window.scrollY + window.innerHeight >= offsetTop + clientHeight;
      const params = new URLSearchParams(window.location.search);
      const fromSearch = params.get('fromSearch');
      if (contentAllViewed && fromSearch && !conversionTriggered) {
        conversionTriggered = true;
        trackEntityPageViewEvent('content', {
          items: [
            {
              id: process.env.NEXT_PUBLIC_SEARCH_DOMAIN_ID_PREFIX + document.location.pathname.replace(/[/:.]/g, '_').replace(/_+$/, ''),
            },
          ],
          actionSubtype: 'conversion',
        });
      }
    }
  }, []);

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

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
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
        <div ref={contentInnerRef}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ChakraProvider>
    </SearchWrapper>
  );
}

export default MyApp;
