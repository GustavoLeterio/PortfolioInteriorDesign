import Head from 'next/head'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import styles from '../styles/galery.module.css'


export default function Home({ datas }) {

  return (
    <>
      <Head>
        <title>Portfólio Julia Costa</title>
        <meta name="description" content="Julia Costa Designer de Interiores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingPage />
      <About />
      <div className={styles.galeryPage}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.galery}>
          <div className={styles.categoryWrapper} >
            <h4 className={styles.subTitle}>a</h4>
            <div className={styles.lineWrapper}>
              <a className={styles.leftArrow}>&#10094;</a>
              <div className={styles.line} >
              </div>
              <a className={styles.rightArrow}>&#10095;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
