import '../styles/globals.css'
import linkStyes from '../styles/links.css'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
