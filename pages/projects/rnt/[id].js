import Slider from 'react-slick';
import Image from 'next/image';
import styles from '/styles/project.module.css';
import { useEffect } from 'react';
import About from '/components/About'
const datas = [
    {
        id: 1,
        name: "Banheiro",
        images: [
            {
                id: 1,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/BANHEIRO/3_oyr2yf.jpg",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/BANHEIRO/1_krwgqv.jpg",
            },
            {
                id: 3,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023152/public/RENDERS/PROJETO%20RNT/BANHEIRO/2_suj7ts.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "Cozinha",
        images: [
            {
                id: 1,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/COZINHA/2_aenaut.jpg",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023150/public/RENDERS/PROJETO%20RNT/COZINHA/1_qxse5k.jpg",
            },
            {
                id: 3,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023150/public/RENDERS/PROJETO%20RNT/COZINHA/3_oeugpm.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "Suite",
        images: [
            {
                id: 1,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023156/public/RENDERS/PROJETO%20RNT/SOCIAL/2_x8xx2e.jpg",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023157/public/RENDERS/PROJETO%20RNT/SOCIAL/3_zwgkv9.jpg"
            },
            {
                id: 3,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023156/public/RENDERS/PROJETO%20RNT/SOCIAL/4_xvnimz.jpg"
            },
            {
                id: 4,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023155/public/RENDERS/PROJETO%20RNT/SOCIAL/5_y4oogl.jpg"
            },
            {
                id: 5,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/SOCIAL/6_eungfd.jpg"
            },
            {
                id: 6,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023156/public/RENDERS/PROJETO%20RNT/SOCIAL/7_ksaxyv.jpg"
            },
            {
                id: 7,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023156/public/RENDERS/PROJETO%20RNT/SOCIAL/8_dzhswe.jpg"
            },
            {
                id: 8,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023156/public/RENDERS/PROJETO%20RNT/SOCIAL/9_xpsv61.jpg"
            },
            {
                id: 9,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/SOCIAL/10_u7ihb6.jpg"
            },
        ]
    },
    {
        id: 4,
        name: "Sala de Estar",
        images: [
            {
                id: 1,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023152/public/RENDERS/PROJETO%20RNT/SUITE/1_t5hcjz.jpg",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20RNT/SUITE/2_ptu7qt.jpg",
            },
            {
                id: 3,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20RNT/SUITE/3_lhykfq.jpg"
            },
            {
                id: 4,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023152/public/RENDERS/PROJETO%20RNT/SUITE/4_n5vvew.jpg",
            },
            {
                id: 5,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20RNT/SUITE/5_su9dod.jpg",
            },
            {
                id: 6,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20RNT/SUITE/6_ndhw1d.jpg"
            },
            {
                id: 7,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023154/public/RENDERS/PROJETO%20RNT/SUITE/7_oluoil.jpg",
            },
            {
                id: 8,
                image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023154/public/RENDERS/PROJETO%20RNT/SUITE/8_pxhjoj.jpg",
            }
        ]
    }];

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
            <Slider className={styles.slider} {...settings} >
                {datas.map((mod) => Object.values(mod.images).map((images) =>
                    <div className={styles.imageContent} key={images.id}>
                        <div className={styles.imageBox} >
                            <Image src={images.image} quality={100} width={1920} height={1080} lazy={false} />
                        </div>
                    </div>
                ))}
            </Slider>
            <About />
        </div>
    )
}