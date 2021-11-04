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
    const datas = props.paragraphs
    const size = useWindowSize();
    return (
        <div className={styles.aboutPage}>
            {(size.width > 1024) && (props.imageSide == "left") ? <div className={styles.imageWrapper} style={props.cssArrangement}><Image src={props.image} quality={100} width={props.width} height={props.height} layout="responsive" /></div> : ''}
            <div className={styles.wrapperText}>
                <h1 className={styles.title}>
                    {
                        (datas !== undefined) ?
                            props.title 
                            :
                            "About"
                    }

                </h1>
                {
                    (datas !== undefined) ?
                        datas.map((data) => data.map((mod) =>
                            <div key={mod.id}>
                                <p className={styles.text}>
                                    {mod.text}
                                </p>
                            </div>
                        ))
                        :
                        (
                            <>
                                <p className={styles.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum erat id nunc bibendum dapibus. Donec nec lacus ut lectus mattis sodales. Etiam pellentesque ex mi, et cursus turpis pharetra eu. Donec porta dictum sapien a sagittis. Quisque nulla nisi, fermentum in tortor et, efficitur maximus erat. Donec elit leo, malesuada ut ipsum vel, pulvinar mollis purus. Nulla facilisi. Integer posuere iaculis mauris, nec faucibus nisl facilisis a. Quisque ullamcorper velit eget bibendum auctor. Ut hendrerit egestas lobortis. Maecenas ligula odio, interdum eget metus at, pellentesque laoreet nunc.
                                </p>
                            </>
                        )
                }
            </div>
            {(props.imageSide == "right") || (size.width <= 1024) && (props.imageSide == "left") ? <div className={styles.imageWrapper} style={props.cssArrangement}><Image src={props.image} quality={100} width={props.width} height={props.height} layout="responsive" /></div> : ''}
        </div >
    );
}

export default TextAndImage;