// Global
import Head from 'next/head';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import Hero from '@/components/heros/Hero';
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
      <main className={classnames('mb-8')}>
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
        <div className={classnames('px-gutter-all')}>
          <Container>{children}</Container>
        </div>
      </main>
    </div>
  );
};

export default Layout;
