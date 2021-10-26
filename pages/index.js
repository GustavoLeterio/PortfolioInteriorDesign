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
  const datas = {
    rnt: [
      {
        id: 1,
        name: "Banheiro",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/BANHEIRO/3_oyr2yf.jpg",
        link: "#"
      },
      {
        id: 2,
        name: "Cozinha",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/COZINHA/2_aenaut.jpg",
        link: "#"
      },
      {
        id: 3,
        name: "Suite",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20RNT/SUITE/6_ndhw1d.jpg",
        link: "#"
      },
      {
        id: 4,
        name: "Sala de Estar",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023155/public/RENDERS/PROJETO%20RNT/SOCIAL/1_jbbal8.jpg",
        link: "#"
      }
    ],
    ecrt: [
      {
        id: 1,
        name: "Sala de Estar",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023146/public/RENDERS/PROJETO%20ECRT/SALA%20DE%20ESTAR/1_tzxee0.jpg",
        link: "#"
      }
    ],
    esp: [
      {
        id: 1,
        name: "Escritório",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023146/public/RENDERS/PROJETO%20ESP/ESCRIT%C3%93RIO/2_j4elve.jpg",
        link: "#"
      }
    ],
    fld: [
      {
        id: 1,
        name: "Fraldário",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023159/public/RENDERS/PROJETO%20FLD/FRALDARIO/1_baj194.png",
        link: "#"
      }
    ],
    isab: [
      {
        id: 1,
        name: "Lavanderia",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023149/public/RENDERS/PROJETO%20ISAB/LAVANDERIA/2_vnhc1y.jpg",
        link: "#"
      }
    ],
    oft: [
      {
        id: 1,
        name: "Clínica",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1634427119/03_fx3hs8.jpg",
        link: "#"
      }
    ],
    ptg: [
      {
        id: 1,
        name: "Lavabo",
        image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023155/public/RENDERS/PROJETO%20PTG/LAVABO/03_wkyj2t.jpg",
        link: "#"
      }
    ]
  }
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
          breakpoint: 1050,
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
                    <Link href={mod.link}><a className={styles.link}>Veja Mais!</a></Link>
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