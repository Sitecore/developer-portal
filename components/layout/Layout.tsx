// Global
import Head from 'next/head';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import Container from '@/components/helper/Container';

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
      <main className={classnames('my-8')}>
        <Container>
          <h1>{pageInfo.title}</h1>
          <p>{pageInfo.description}</p>
        </Container>
        {children}
      </main>
    </div>
  );
};

export default Layout;
