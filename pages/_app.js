import { AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Julia Costa Portfolio</title>
        <meta name="description" content="Julia Costa Interior Designer" />
        <meta name="keywords" content="Julia Costa, Interior Designer, Portfolio" />
        <meta property="og:image" />
        <link rel="icon" href="https://img.icons8.com/office/16/000000/design.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Contact />
    </>
  )
}

export default MyApp
