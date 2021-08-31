import '../styles/globals.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import SearchBox from '../components/searchBox'
import { AppProps } from 'next/dist/shared/lib/router/router'


function MyApp({ Component, pageProps } : AppProps)  {
  return (
    <>
      <SearchBox />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
