import { AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Contact />
    </>
  )
}

export default MyApp
