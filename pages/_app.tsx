import '@/styles/global.css';
import Nav from '@/components/site/Nav/Nav';
import Footer from '../components/footer';
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
