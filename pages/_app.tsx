// Global
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { resetId } from 'react-id-generator';
// Local
import * as gtag from '../scripts/gtag';
import '@/styles/global.css';
// Components
import Nav from '@/components/site/Nav/Nav';
import Footer from '@/components/site/Footer/Footer';

function SCDPApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Reset id counter during SSR
  resetId();

  // useEffect for basic page views tracking via router/gtag.
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="theme-light text-theme-text bg-theme-bg dark:theme-dark">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default SCDPApp;
