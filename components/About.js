import styles from '../styles/about.module.css'
import Image from 'next/image'
import aboutImage from '../public/aboutImage.png'

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.wrapperText}>
                <h1 className={styles.title}>
                    Sobre Mim
                </h1>
                <p className={styles.text}>
                    Sint ex sint commodo consectetur irure voluptate anim ut dolor non nostrud duis sunt enim. Cupidatat cupidatat
                    exercitation deserunt ipsum deserunt ex incididunt ipsum nulla laboris magna ullamco fugiat. Aute aliqua consequat commodo laboris consequat aute.
                </p>
                <p className={styles.text}>
                    Sint ex sint commodo consectetur irure voluptate anim ut dolor non nostrud duis sunt enim. Cupidatat cupidatat
                    exercitation deserunt ipsum deserunt ex incididunt ipsum nulla laboris magna ullamco fugiat. Aute aliqua consequat commodo laboris consequat aute.
                </p>
                <p className={styles.text}>
                    Sint ex sint commodo consectetur irure voluptate anim ut dolor non nostrud duis sunt enim. Cupidatat cupidatat
                    exercitation deserunt ipsum deserunt ex incididunt ipsum nulla laboris magna ullamco fugiat. Aute aliqua consequat commodo laboris consequat aute.
                </p>
            </div>
            <div className={styles.imageWrapper}><Image src={aboutImage} layout="responsive" lazy placeholder="blur" /></div>
        </div>
    );
}

export default AboutPage;