import '../styles/globals.css'
import linkStyes from '../styles/links.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import SearchBox from '../components/searchBox'

function MyApp({ Component, pageProps }) {
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
