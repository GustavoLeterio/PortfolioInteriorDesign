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
  const res = await fetch("http://localhost:3000/api/db");
  const datas = await res.json();
  return {
    props: { datas }
  }
}

function SampleArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.rightArrow} onClick={onClick} >{props.content}</div>
  );
}


export default function Home({ datas }) {
  function lineOrganizer(data, category) {

    function settingCustomizer(condition) {
      return Object.keys(data).length > 3 ? condition : <SampleArrow content="&nbsp;" />;
    }

    let settings = {
      arrow: true,
      draggable: false,
      dots: false,
      speed: 300,
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: settingCustomizer(3),
      variableWidth: true,
      prevArrow: settingCustomizer(<SampleArrow content="&#10094;" />),
      nextArrow: settingCustomizer(<SampleArrow content="&#10095;" />),
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            draggable: true,
            slidesToScroll: 1,
            slidesToShow: settingCustomizer(2)
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
          {lineOrganizer(datas.rnt, "Projeto RNT")}
          {lineOrganizer(datas.ecrt, "Projeto ECRT")}
          {lineOrganizer(datas.esp, "Projeto ESP")}
          {lineOrganizer(datas.fld, "Projeto FLD")}
          {lineOrganizer(datas.isab, "Projeto ISAB")}
          {lineOrganizer(datas.oft, "Projeto OFT")}
          {lineOrganizer(datas.ptg, "Projeto PTG")}
        </div>
      </div>
      <ContactPage />
    </>
  )
}