import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import sitecoreTheme from '@sitecore/blok-theme';

import { AppProps } from 'next/app';
import { Footer } from '../components/navigation/Footer';
import Navbar from '../components/navigation/NavBar';
import NavBarSearch from '../components/navigation/NavBarSearch';
import { proseBaseStyle } from '../lib/markdown/proseTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme(sitecoreTheme, withProse({ baseStyle: proseBaseStyle }));

  return (
    <ChakraProvider theme={theme}>
      <Navbar>
        {/* Search menu */}
        <NavBarSearch />
      </Navbar>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
