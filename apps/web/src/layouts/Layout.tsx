// Global
import { Box, BoxProps, VisuallyHidden } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { PageInfo } from '../lib/interfaces/page-info';

type LayoutProps = BoxProps & {
  pageInfo: PageInfo;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ pageInfo, children, ...rest }: LayoutProps): JSX.Element => {
  const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split(/[?#]/)[0];

  return (
    <>
      <Head>
        <title>{pageInfo.title}</title>
        <link rel="icon" href={`/favicon.png`} />
        {/*
          Necessary Meta tags, including Social tags.
          It's OK if they're empty, same as not printing them.
        */}
        <meta name="description" content={pageInfo.description} />
        <meta property="og:site_name" content="Sitecore Developer Portal" />
        <meta property="og:title" content={pageInfo.title} />
        <meta property="og:description" content={pageInfo.description} />
        <meta property="og:url" content={`${publicUrl}${path}`} />
        <meta property="og:image" content={pageInfo.openGraphImage ? `${publicUrl}${pageInfo.openGraphImage}` : `${publicUrl}/api/og?title=${pageInfo.title}&subtitle=${pageInfo.description}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href="/images/heros/hero-wide-light.webp" as="image" />
        <link rel="preload" href="/images/heros/hero-wide-dark.webp" as="image" />
      </Head>

      <Box as="main" style={{ marginTop: '128px', minHeight: 'calc(100vh - 236px)' }} {...rest}>
        {/* a11y announcement for route changes. */}
        <VisuallyHidden aria-live="polite" aria-atomic="true">{`The ${pageInfo.title} page has loaded.`}</VisuallyHidden>
        {children}
      </Box>
    </>
  );
};

export default Layout;
