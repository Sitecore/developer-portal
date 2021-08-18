import '../styles/globals.css'
import linkStyes from '../styles/links.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
