import Head from "next/head";
import { useRouter } from "next/router";
import type React from "react";

interface MetaProps {
  title: string;
  baseTitle?: string;
  section?: string;
  pageTitle?: string;
  description: string;
  twitterDescription?: string;
  openGraphImageUrl?: string;
  /** Absolute canonical URL (e.g. from blog frontmatter). Overrides og:url / twitter:url. */
  canonicalUrl?: string;
}

const MetaTags: React.FC<MetaProps> = ({
  title,
  description,
  section,
  baseTitle = "Sitecore Developer Portal",
  openGraphImageUrl,
  canonicalUrl,
}) => {
  const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_PUBLIC_URL
    : "";
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split(/[?#]/)[0];
  const pageUrl = canonicalUrl ?? `${publicUrl}${path}`;

  const ogImageUrl = openGraphImageUrl
    ? `${publicUrl}${openGraphImageUrl}`
    : `${publicUrl}/api/og?title=${section ? section : title}&subtitle=${description}`;

  if (section) {
    title = `${title} | ${section} | ${baseTitle}`;
  } else {
    title = title ? `${title} | ${baseTitle}` : baseTitle;
  }

  return (
    <Head>
      <title>{title}</title>
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <link
        rel="icon"
        type="image/svg+xml"
        href="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-sitecore"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/favicon-sitecore?t=favicon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/favicon-sitecore?t=favicon128"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/favicon-sitecore?t=favicon180"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/favicon-sitecore?t=favicon192"
      />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6e3fff	" />
      <meta
        name="google-site-verification"
        content="nHBgSoKM9MmOHojAXclT8fAzd7-teu8hNEjgp-Cyrxw"
      />
      <meta name="msapplication-TileColor" content="#6e3fff	"></meta>
      <meta name="theme-color" content="#6e3fff	"></meta>
      <meta name="description" content={description} />
      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Sitecore Developer Portal" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImageUrl} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="developers.sitecore.com" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
};

export default MetaTags;
