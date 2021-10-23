import { React, useEffect } from 'react';
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

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.rightArrow} onClick={onClick} >{props.content}</div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.leftArrow} onClick={onClick} >{props.content}</div>
  );
}

export default function Home({ datas }) {
  function lineOrganizer(data, category) {

    function settingCustomizer(itemQuantity, firstCondition, secondCondition) {
      return Object.keys(data).length > itemQuantity ? firstCondition : secondCondition;
    }

    let settings = {
      draggable: false,
      dots: false,
      speed: 300,
      infinite: false,
      slidesToScroll: settingCustomizer(4, 2, 0),
      slidesToShow: settingCustomizer(4, 3, 1),
      variableWidth: true,
      prevArrow: settingCustomizer(4, <SamplePrevArrow content="&#10094;" />, <SamplePrevArrow content="&nbsp;" />),
      nextArrow: settingCustomizer(4, <SampleNextArrow content="&#10095;" />, <SampleNextArrow content="&nbsp;" />),
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            draggable: true,
            slidesToScroll: 1,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true
          }
        }
      ]
    };
    return (
      <div className={styles.categoryWrapper} >
        <h4 className={styles.subTitle}>{category}</h4>
        <Slider className={styles.line} {...settings}>
          {data.map((mod) => (
            <>{
              <div className={styles.itemContent}>
                <div className={styles.imageBox} key={mod.id}>
                  <Image src={mod.image} width={400} height={200} layout="responsive" />
                  <div className={styles.linkContent}>
                    <span className={styles.name}>{mod.name}</span>
                    <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
                  </div>
                </div>
              </div>
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
        <meta property="og:image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingPage />
      <About />
      <div className={styles.galeryPage}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.galery}>
          {lineOrganizer(datas.RNT, "Projeto RNT")}
          {lineOrganizer(datas.ECRT, "Projeto ECRT")}
          {lineOrganizer(datas.ESP, "Projeto ESP")}
          {lineOrganizer(datas.FLD, "Projeto FLD")}
          {lineOrganizer(datas.ISAB, "Projeto ISAB")}
          {lineOrganizer(datas.OFT, "Projeto OFT")}
          {lineOrganizer(datas.PTG, "Projeto PTG")}
        </div>
      </div>
      <ContactPage />
    </>
  )
}