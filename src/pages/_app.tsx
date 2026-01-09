import { IsSearchEnabled, SEARCH_CONFIG } from '@lib/search';
import { PageController, trackEntityPageViewEvent, WidgetsProvider } from '@sitecore-search/react';
import { Footer } from '@src/components/navigation/Footer';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import TagManager from 'react-gtm-module';
import TopBarProgress from 'react-topbar-progress-indicator';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { EngageTrackerProvider } from '../components/integrations';
import TopNav from '../components/navigation/topNav';
import { PreviewProvider } from '../context/PreviewContext';
import './globals.css';

const SearchWrapper = ({ children }: any) => (IsSearchEnabled() ? <WidgetsProvider {...SEARCH_CONFIG}>{children}</WidgetsProvider> : children);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [progress, setProgress] = useState(false);
  const [hostname, setHostname] = useState('');

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    setHostname(window.location.host);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <SearchWrapper>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>
          <EngageTrackerProvider>
            <PreviewProvider hostname={hostname}>
              {progress && <TopBarProgress />}
              <TopNav searchEnabled={IsSearchEnabled()} />
              {/* <Navbar searchEnabled={IsSearchEnabled()} /> */}
              <div ref={contentInnerRef}>
                <Component {...pageProps} />
              </div>
              <Footer />
            </PreviewProvider>
          </EngageTrackerProvider>
        </SessionProvider>
      </ThemeProvider>
    </SearchWrapper>
  );
}

export default MyApp;
