import '../styles/globals.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="inner">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
