import Head from 'next/head'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Galery from '../components/Galery'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio Julia Costa</title>
        <meta name="description" content="Julia Costa Designer de Interiores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingPage />
      <About />
      <Galery />
    </div>
  )
}
