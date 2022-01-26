import Slider from 'react-slick';
import Image from 'next/image';
import styles from '/styles/project.module.css';
import { useEffect, useState } from 'react';
import TextAndImage from '/components/TextAndImage'
import { datas } from '/projectsdb'

export const getStaticPaths = async () => {
    const paths = Object.values(datas.esp).map(mod => {
        return { params: { id: mod.id.toString() } }
    });
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = Object.values(datas.esp).filter((mod) => mod.id.toString() === id)
    return {
        props: {
            datas: data
        }
    }
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}

export default function Projects({ datas }) {
    const size = useWindowSize();
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
                breakpoint: 1025,
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
                        <Image src={images.image} blurDataURL={images.image} placeholder="blur" quality={100} width={1920} height={1080} />
                    </div>
                ))}
            </Slider>
            <span className={styles.advise}><br />For a better view, turn the phone over!</span>
            {datas.map((mod) => (<>
                <TextAndImage
                    image={(size.width > 1024) ? mod.descriptionImageOne : mod.descriptionImageOneMobile}
                    cssArrangement={
                        {
                            padding: (size.width > 1024) ? "5vh 0 0 0" : "2vh 0",
                            width: (size.width <= 1024) && (size.width > 768) ? "70vw" : (size.width <= 768) ? "80vw" : "",
                            margin: (size.width <= 1024) ? "0 auto" : "0",
                        }}
                    width={(size.width <= 1024) ? 1164 : 848}
                    height={885}
                    title={mod.title}
                    paragraphs={datas.map((data) => Object.values(data.paragraphs).map((mod) => mod))}
                    />
            </>))}
        </div>
    )
}