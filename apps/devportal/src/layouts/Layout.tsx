// Global
import { Alert, AlertDescription, AlertIcon, Box, BoxProps, VisuallyHidden } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type LayoutProps = BoxProps & {
  title: string;
  description?: string;
  openGraphImage?: string;
  preview?: boolean;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ title, description = '', openGraphImage, preview, children, ...rest }: LayoutProps): JSX.Element => {
  const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split(/[?#]/)[0];

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={`/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5548d9" />

        <meta name="msapplication-TileColor" content="#5548d9"></meta>
        <meta name="theme-color" content="#5548d9"></meta>
        <meta name="description" content={description} />

        <meta property="og:site_name" content="Sitecore Developer Portal" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${publicUrl}${path}`} />
        <meta property="og:image" content={openGraphImage ? `${publicUrl}${openGraphImage}` : `${publicUrl}/api/og?title=${title}&subtitle=${description}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Box as="main" style={{ paddingTop: 122, minHeight: 'calc(100vh - 236px)' }} {...rest}>
        <VisuallyHidden>
          <a href="#main-content">Skip to main content</a>
        </VisuallyHidden>
        {/* a11y announcement for route changes. */}
        <VisuallyHidden aria-live="polite" aria-atomic="true">{`The ${title} page has loaded.`}</VisuallyHidden>
        {preview && (
          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>Preview mode enabled</AlertDescription>
          </Alert>
        )}
        {children}
      </Box>
    </>
  );
};

export default Layout;
