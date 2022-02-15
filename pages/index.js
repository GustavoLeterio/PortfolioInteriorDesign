import { React, useEffect } from 'react';
import Slider from 'react-slick';
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

    function settingCustomizer(firstCondition, secondCondition, minLength) {
      return Object.keys(data).length > minLength ? firstCondition : secondCondition;
    }

    let settings = {
      draggable: false,
      dots: false,
      speed: 300,
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: settingCustomizer(3, false,3),
      variableWidth: true,
      prevArrow: settingCustomizer(<SampleArrow content="&#10094;" />, <SampleArrow content="&nbsp;" />, 3),
      nextArrow: settingCustomizer(<SampleArrow content="&#10095;" />, false, 3),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            draggable: true,
            slidesToShow: settingCustomizer(2, false, 2),
            focusOnSelect: true,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
          breakpoint: 440,
          settings: {
            draggable: true,
            slidesToShow: settingCustomizer(1, false, 2),
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
                    <Link href={'projects/' + path + '/' + mod.id + '#page'} ><a className={styles.link} >See More!</a></Link>
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
      <div style={{ position: "relative", top: "-3vh" }} id="home" />
      <LandingPage />
      <div style={{ position: "relative", top: "-3vh" }} id="about" />
      <TextAndImage image="https://res.cloudinary.com/djf0isef7/image/upload/v1643762313/public/aboutImage_gmwz5m.jpg" width={1195} height={865} layout="responsive" ssArrangement={{ float: "right" }} />
      <div style={{ position: "relative", top: "-3vh" }} id="projects" />
      <div className={styles.galeryPage}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.galery}>
          {lineOrganizer(datas.rnt, "rnt", "Project RNT")}
          {lineOrganizer(datas.ecrt, "ecrt", "Project ECRT")}
          {lineOrganizer(datas.esp, "esp", "Project ESP")}
          {/*lineOrganizer(datas.fld, "fld", "Project FLD")*/}
          {lineOrganizer(datas.glv, "glv", "Project GLV")}
          {lineOrganizer(datas.isab, "isab", "Project ISAB")}
          {lineOrganizer(datas.mrn, "mrn", "Project MRN")}
          {lineOrganizer(datas.oft, "oft", "Project OFT")}
          {lineOrganizer(datas.vna, "vna", "Project VNA")}
        </div>
      </div>
      <div id="contact" />
    </>
  )
}