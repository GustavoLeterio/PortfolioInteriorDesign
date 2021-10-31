import Slider from 'react-slick';
import Image from 'next/image';
import styles from '/styles/project.module.css';
import { useEffect } from 'react';
import About from '/components/About'
import { datas } from '/projectsdb'

export const getStaticPaths = async () => {
    const paths = Object.values(datas.oft).map(mod => {
        return { params: { id: mod.id.toString() } }
    });
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = Object.values(datas.oft).filter((mod) => mod.id.toString() === id)
    return {
        props: {
            datas: data
        }
    }
}

export default function Projects({ datas }) {
    useEffect(() => {
        jumpToTop()
    })
    function disableSmoothScroll() {
        const el = document.createElement('style')
        el.textContent = '* { scroll-behavior: initial !important; }'
        document.head.appendChild(el)
        return () => el.remove()
    }

    function jumpToTop() {
        const undoScrollHack = disableSmoothScroll()
        window.scroll({ top: 0 })
        undoScrollHack()
    }
    function SampleArrow(props) {
        const { onClick } = props;
        return (
            <div className={styles.arrow} onClick={onClick} >{props.content}</div>
        );
    }
    let settings = {
        draggable: false,
        dotsClass: styles.button__bar,
        dots: true,
        speed: 500,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrow: true,
        prevArrow: <SampleArrow content="&#10094;" />,
        nextArrow: <SampleArrow content="&#10095;" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    draggable: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    draggable: true
                }
            }
        ]
    };

    return (

        <div className={styles.projectPage} id="page">
            <Slider className={styles.slider} {...settings} >
                {datas.map((mod) => Object.values(mod.images).map((images) =>
                    <div className={styles.imageBox} key={images.id}>
                        <Image src={images.image} quality={100} width={1920} height={1080} lazy={false} />
                    </div>
                ))}
            </Slider>
            <span className={styles.advise}><br />Para visualizar melhor, vire o celular!</span>
            <About />
        </div>
    )
}