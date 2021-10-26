import React, { useEffect, useState } from 'react'
import styles from '../styles/LandingPage.module.css'
import Image from 'next/image'

export default function LandingPage() {
    const [fadeWrapperTitleProp, setFadeWrapperTitleProp] = useState({
        fade: styles.wrapperFadeTitle
    });
    useEffect(() => {
        setInterval(() => {
            if (fadeWrapperTitleProp.fade === styles.wrapperFadeTitle) {
                setFadeWrapperTitleProp({ fade: styles.wrapperTitle })
            }
        }, 250);
    });
    return (
        <div className={styles.landingPage} id="top">
            <div className={styles.backgroundImage}><Image src="https://res.cloudinary.com/djf0isef7/image/upload/v1635286075/public/landPageBackground_cmzyrc.jpg" layout="fill" objectFit="cover" /></div>
            <div className={fadeWrapperTitleProp.fade}>
                <h1 className={styles.title}>
                    Design de Interiores
                </h1>
                <h2 className={styles.subtitle}>
                    Julia Costa
                </h2>
            </div>
        </div>
    );
}