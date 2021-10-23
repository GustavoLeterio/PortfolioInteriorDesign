import styles from '../styles/about.module.css'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.wrapperText}>
                <h1 className={styles.title}>
                    Sobre
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
            <div className={styles.imageWrapper}><Image src="https://res.cloudinary.com/djf0isef7/image/upload/v1635020544/public/aboutImage_dgza1m.png" width={849} height={999} layout="responsive" /></div>
        </div>
    );
}

export default AboutPage;