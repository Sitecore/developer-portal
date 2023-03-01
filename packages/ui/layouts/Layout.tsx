// Global
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
// Interfaces
// Lib
import htmlConfig from '../common/html-constants';
const { idMainContent } = htmlConfig;
// Components

// Suppress warnings when using useLayoutEffect.
// The usecase here has nothign to do with SSR and there is no "mismatch" since we're
// handling user agent focus only.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type LayoutProps = {
  title: string;
  description?: string;
  openGraphImage?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ title, description = '', openGraphImage, children }: LayoutProps): JSX.Element => {
  const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split(/[?#]/)[0];
  const mainContentRef = useRef<HTMLAnchorElement>(null);

  // Set focus on the contain <main> element on route changes.
  useIsomorphicLayoutEffect(() => {
    let isMounted = false;

    router.events.on('routeChangeComplete', () => {
      if (!isMounted) {
        mainContentRef?.current?.focus();
      }
    });

    return () => {
      isMounted = true;
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={`${publicUrl}/favicon.png`} />
        {/*
          Necessary Meta tags, including Social tags.
          It's OK if they're empty, same as not printing them.
        */}
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Sitecore Developer Portal" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${publicUrl}${path}`} />
        <meta property="og:image" content={`${publicUrl}${openGraphImage ? openGraphImage : '/images/social/social-card-default.jpeg'}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="scroll-to-offset mb-16 min-h-[calc(100vh-344px)]">
        {/* Anchor element at top of page to focus on route change. */}
        <a id={idMainContent} ref={mainContentRef} className="sr-only" href="#" tabIndex={-1}>
          {title}
        </a>
        {/* a11y announcement for route changes. */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">{`The ${title} page has loaded.`}</div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
