// Global
import { AppProps } from 'next/dist/shared/lib/router/router';
import { resetId } from 'react-id-generator';
// Local
import '@/styles/global.css';
// Components
import Nav from '@/components/site/Nav/Nav';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  // Reset id counter during SSR
  resetId();

  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
