import React, { useRef } from 'react';
import Slider from 'react-slick';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ContactPage from '../components/Contact'

export const getStaticProps = async () => {
  const res = await fetch("https://my-json-server.typicode.com/Leterinho/PortfolioInteriorDesign/db");
  const datas = await res.json();
  return {
    props: { datas }
  }
}

export default function Home({ datas }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  function lineOrganizer(data, category) {
    return (
      <div className={styles.categoryWrapper} >
        <h4 className={styles.subTitle}>{category}</h4>
        <Slider {...settings}>
          {data.map((mod) => (
            <>{
              <>
                <div className={styles.imageBox} id="image" key={mod.id}>
                  <Image src={mod.image} blurDataURL={mod.image} width={400} height={200} layout="responsive" placeholder="blur" />
                  <div className={styles.linkContent}>
                    <span className={styles.name}>{mod.name}</span>
                    <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
                  </div>
                </div>
              </>
            }</>
          ))}
        </Slider>
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
      <ContactPage />
    </>
  )
}
