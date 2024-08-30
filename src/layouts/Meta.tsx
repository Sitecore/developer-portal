import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface MetaProps {
  title: string;
  description: string;
  openGraphImageUrl?: string;
}

const MetaTags: React.FC<MetaProps> = ({ title, description, openGraphImageUrl }) => {
  const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split(/[?#]/)[0];

  const ogImageUrl = openGraphImageUrl ? `${publicUrl}${openGraphImageUrl}` : `${publicUrl}/api/og?title=${title}&subtitle=${description}`;

  return (
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
      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Sitecore Developer Portal" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${publicUrl}${path}`} />
      <meta property="og:image" content={ogImageUrl} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="developers.sitecore.com" />
      <meta property="twitter:url" content={`${publicUrl}${path}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
};

export default MetaTags;
