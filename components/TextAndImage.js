import styles from '../styles/textAndImage.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

const TextAndImage = (props) => {
    const datas = props.paragraphs;
    const size = useWindowSize();
    return (
        <div className={styles.aboutPage}>
            <div className={styles.wrapperText}>
                <h1 className={styles.title}>
                    {(datas !== undefined) ? props.title : "About"}
                </h1>
                {
                    (datas !== undefined) ?
                        datas.map((data) => data.map((mod) =>
                            <section key={mod.id}>
                                <p className={styles.text}>
                                    {mod.text}
                                </p>
                            </section>
                        ))
                        :
                        (
                            <section>
                                <p className={styles.text}>
                                    Performing in the Building area for over two years as I graduated as a Building Technician, I have accumulated extensive knowledge in the field of Engineering and Architecture. I attended meetings and briefings to understand the requirements and standardization of customers and deliver the best result in compliance with the legislation and technical standards. I can easily communicate, adapt, and motivate, also I am constantly learning and updating while developing interior design and detailing projects, being a key part in the creative process of development and conception of architectural projects.
                                </p>
                                <p className={styles.text}>
                                    Performing in the Building area for over two years as I graduated as a Building Technician, I have accumulated extensive knowledge in the field of Engineering and Architecture. I attended meetings and briefings to understand the requirements and standardization of customers and deliver the best result in compliance with the legislation and technical standards. I can easily communicate, adapt, and motivate, also I am constantly learning and updating while developing interior design and detailing projects, being a key part in the creative process of development and conception of architectural projects.
                                </p>
                                <p className={styles.text}>
                                    I dispose of some projects designed and dimensioned by me during my performance in a team of engineers and architects of a renowned office of commercial and residential projects and renovations. These projects are the outcome of dedication in the studies of professional formation and specializations as a Technologist in Interior Design along my journey.
                                </p>
                            </section>
                        )
                }
            </div>
            <div className={styles.imageWrapper} style={props.cssArrangement}><Image src={props.image} quality={100} width={props.width} height={props.height} layout="responsive" /></div>
        </div >
    );
}

export default TextAndImage;