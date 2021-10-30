import Slider from 'react-slick';
import Image from 'next/image';
import styles from '/styles/project.module.css';
import { useEffect } from 'react';

const datas = [
    {
        id: 1,
        name: "Banheiro",
        images: [
            {
                id: 1,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023149/public/RENDERS/PROJETO%20PTG/LAVABO/01_ejitfs.jpg",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023149/public/RENDERS/PROJETO%20PTG/LAVABO/02_crocem.jpg",
            },
            {
                id: 3,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023155/public/RENDERS/PROJETO%20PTG/LAVABO/03_wkyj2t.jpg"
            },
            {
                id: 4,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20PTG/LAVABO/04_rq4bbc.jpg",
            },
            {
                id: 5,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023149/public/RENDERS/PROJETO%20PTG/LAVABO/05_wulwud.jpg",
            },
            {
                id: 6,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023150/public/RENDERS/PROJETO%20PTG/LAVABO/06_wxem5o.jpg"
            },
            {
                id: 7,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023158/public/RENDERS/PROJETO%20PTG/LAVABO/07_ocgsw0.jpg"
            },
        ]
    }
];

export const getStaticPaths = async () => {
    const paths = datas.map(mod => {
        return { params: { id: mod.id.toString() } }
    });
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = datas.filter((mod) => mod.id.toString() === id)
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
                breakpoint: 1050,
                settings: {
                }
            },
            {
                breakpoint: 768,
                settings: {
                }
            }
        ]
    };

    return (

        <div className={styles.projectPage} id="page">
            <div className={styles.pageContent}>
                <Slider className={styles.slider} {...settings}>
                    {datas.map((mod) => Object.values(mod.images).map((images) =>
                        <div className={styles.imageBox} key={images.id}>
                            <Image src={images.image} quality={100} width={1920} height={1080} lazy={false} />
                        </div>
                    ))}
                </Slider>
                <h1 style={{ fontSize: "10vw" }}>
                </h1>
            </div>
        </div>
    )
}