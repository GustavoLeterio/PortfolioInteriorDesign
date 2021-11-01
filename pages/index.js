import { React } from 'react';
import Slider from 'react-slick';
import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import TextAndImage from '../components/TextAndImage'
import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { datas } from '/sliderdb'

export const getStaticProps = async () => {
  return {
    props: { datas }
  }
}

function SampleArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.arrow} onClick={onClick} >{props.content}</div>
  );
}


export default function Home({ datas }) {
  function lineOrganizer(data, path, category) {

    function settingCustomizer(firstCondition, secondCondition) {
      return Object.keys(data).length > 3 ? firstCondition : secondCondition;
    }

    let settings = {
      draggable: false,
      dots: false,
      speed: 300,
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: settingCustomizer(3, false),
      variableWidth: true,
      prevArrow: settingCustomizer(<SampleArrow content="&#10094;" />, <SampleArrow content="&nbsp;" />),
      nextArrow: settingCustomizer(<SampleArrow content="&#10095;" />, false),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            draggable: true,
            slidesToShow: settingCustomizer(2, false),
            focusOnSelect: true,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            draggable: true,
            slidesToShow: settingCustomizer(1, false),
            focusOnSelect: true,
            prevArrow: false,
            nextArrow: false,
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
                  <Image src={mod.image} blurDataURL={mod.image} placeholder="blur" width={400} height={200} layout="responsive" />
                  <div className={styles.linkContent}>
                    <span className={styles.name}>{mod.name}</span>
                    <Link href={'projects/' + path + '/' + mod.id} ><a className={styles.link} >Veja Mais!</a></Link>
                  </div>
                </div>
              </div>
            }</>
          ))}
        </Slider>
      </div >
    )
  }
  return (
    <>
      <Head>
        <title>Portfólio Julia Costa</title>
        <meta name="description" content="Julia Costa Designer de Interiores" />
        <meta name="keywords" content="Julia Costa, Designer de Interiores, Portfolio" />
        <meta property="og:image" />
      </Head>
      <div style={{ position: "relative", top: "-6vh" }} id="home" />
      <LandingPage />
      <div style={{ position: "relative", top: "-6vh" }} id="about" />
      <TextAndImage image="https://res.cloudinary.com/djf0isef7/image/upload/v1635020544/public/aboutImage_dgza1m.png" width={849} height={999} cssArrangement={{ left: 0 }} imageSide="right" />
      <div style={{ position: "relative", top: "-6vh" }} id="projects" />
      <div className={styles.galeryPage}>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.galery}>
          {lineOrganizer(datas.rnt, "rnt", "Projeto RNT")}
          {lineOrganizer(datas.ecrt, "ecrt", "Projeto ECRT")}
          {lineOrganizer(datas.esp, "esp", "Projeto ESP")}
          {lineOrganizer(datas.fld, "fld", "Projeto FLD")}
          {lineOrganizer(datas.isab, "isab", "Projeto ISAB")}
          {lineOrganizer(datas.oft, "oft", "Projeto OFT")}
          {lineOrganizer(datas.ptg, "ptg", "Projeto PTG")}
        </div>
      </div>
      <div id="contact" />
    </>
  )
}