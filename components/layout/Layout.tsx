import Head from 'next/head';
import type { PageInfo } from '@/interfaces/page-info';
type LayoutProps = {
  pageInfo: PageInfo;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ pageInfo, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        <link
          rel="icon"
          href="https://sitecorecdn.azureedge.net/-/media/sitecoresite/images/global/logo/favicon.png"
        />
      </Head>
      <main>
        <h1>{pageInfo.title}</h1>
        <p>{pageInfo.description}</p>
        {children}
      </main>
    </div>
  );
};

export default Layout;
