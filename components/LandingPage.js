import styles from '../styles/LandingPage.module.css'
import landPageBackground from '../public/landPageBackground.jpg'
import Image from 'next/image'

const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.backgroundImage}><Image src={landPageBackground} layout="fill" objectFit="cover" objectPosition="center"/></div>
            <div className={styles.wrapperTitle}>
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

export default LandingPage;