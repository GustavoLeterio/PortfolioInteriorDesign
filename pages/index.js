import Head from 'next/head'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch("https://my-json-server.typicode.com/Leterinho/PortfolioInteriorDesign/db");
  const datas = await res.json();

  return {
    props: { datas }
  }
}

export default function Home({ datas }) {


  function imageOrganizer(mod) {
    return (
      <div className={styles.imageBox} key={mod.id}>
        <Image src={mod.image} blurDataURL={mod.image} width={400} height={200} layout="responsive" placeholder="blur" />
        <div className={styles.linkContent}>
          <span className={styles.name}>{mod.name}</span>
          <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
        </div>
      </div>
    )
  }

  function lineOrganizer(data, category) {
    return (
      <div className={styles.categoryWrapper} >
        <h4 className={styles.subTitle}>{category}</h4>
        <div className={styles.lineWrapper}>
          <a className={styles.leftArrow}>&#10094;</a>
          <div className={styles.line} >
            {data.map((mod) => (<>{imageOrganizer(mod)}</>))}
          </div>
          <a className={styles.rightArrow}>&#10095;</a>
        </div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Portfólio Julia Costa</title>
        <meta name="description" content="Julia Costa Designer de Interiores" />
        <meta name="keywords" content="Julia Costa, Designer de Interiores, Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingPage />
      <About />
      <div className={styles.galeryPage}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.galery}>
          {lineOrganizer(datas.office, "Escritório")}
          {lineOrganizer(datas.livingRoom, "Sala de Estar")}
        </div>
      </div>
    </>
  )
}
