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
          {datas.map((data) => (
            <div className={styles.categoryWrapper}>
              <h4 className={styles.subTitle}>{data.categoryName}</h4>
              <div className={styles.lineWrapper} key={data.categoryName}>
                <a className={styles.leftArrow}>&#10094;</a>
                <div className={styles.line} >
                  <div className={styles.imageBox} >
                    <Image src={data.image} blurDataURL={data.image} width={400} height={200} layout="responsive" lazy="true" placeholder="blur" />
                    <div className={styles.linkContent}>
                      <span className={styles.name}>{data.name}</span>
                      <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
                    </div>
                  </div>

                </div>
                <a className={styles.rightArrow}>&#10095;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
