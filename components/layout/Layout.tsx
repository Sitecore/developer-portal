// Global
import Head from 'next/head';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import Hero from '@/components/heros/Hero';

type LayoutProps = {
  pageInfo: PageInfo;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ pageInfo, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{pageInfo.title}</title>
        <link
          rel="icon"
          href="https://sitecorecdn.azureedge.net/-/media/sitecoresite/images/global/logo/favicon.png"
        />

        <link rel="icon" href={`/favicon.png`} />
        {/* Preload our two most heavily used webfonts, reduce chance of FOUT */}
        <link
          rel="preload"
          href={`/fonts/AvenirNext-Regular--latin.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`/fonts/AvenirNext-Bold--latin.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/*
          Necessary Meta tags, including Social tags.
          It's OK if they're empty, same as not printing them.
        */}
        <meta property="description" content={pageInfo.description} />
        <meta property="og:site_name" content="Sitecore Development Portal" />
        <meta property="og:title" content={pageInfo.title} />
        <meta property="og:description" content={pageInfo.title} />
        {/* {publicUrl && pageInfo.heroImage (
          <meta property="og:image" content={`${publicUrl}${pageInfo.heroImage}`} />
          <meta property="og:url" content={`${publicUrl}${pagePath}`} />
          <meta name="twitter:card" content="summary_large_image" />
        )} */}
      </Head>
      <main className={classnames('mb-16')}>
        {/* Temporary "Under Constructions Banner" */}
        <div
          className={classnames(
            'bg-gray-lightest',
            'border-b',
            'border-gray-light',
            'text-center',
            'p-2',
            'font-bold'
          )}
        >
          🚧&nbsp;&nbsp; Under Construction &nbsp;&nbsp;🚧
        </div>
        <Hero
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.heroImage}
        />
        {children}
      </main>
    </div>
  );
};

export default Layout;
