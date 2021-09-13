// Global
import Head from 'next/head';
import { classnames } from '@/tailwindcss-classnames';
// Components
import Container from '@/components/helper/Container';
import { MarkdownMeta } from '../../interfaces/markdownAsset';

type LayoutProps = {
  pageInfo: MarkdownMeta;
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ pageInfo, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{pageInfo.prettyName}</title>
        <meta name="description" content={pageInfo.description} />
        <link
          rel="icon"
          href="https://sitecorecdn.azureedge.net/-/media/sitecoresite/images/global/logo/favicon.png"
        />
      </Head>
      <main className={classnames('my-8')}>
        <Container>
          <h1>{pageInfo.prettyName}</h1>
          <p>{pageInfo.description}</p>
        </Container>
        {children}
      </main>
    </div>
  );
};

export default Layout;
