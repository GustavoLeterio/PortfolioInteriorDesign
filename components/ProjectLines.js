import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import photo from '../public/01.png'

const ProjectLines = () => {
    var Replier = () => {
        return (
            < div className={styles.imageBox} >
                <Image src={photo} width={400} height={200} layout="responsive" lazy placeholder="blur" />
                <div className={styles.linkContent}>
                    <span className={styles.name}>Escritório Bonito</span>
                    <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
                </div>
            </div >)
    }

    return (
        <div className={styles.categoryWrapper}>
            <h4 className={styles.subTitle}>Escritório</h4>
            <div className={styles.lineWrapper}>
                <a className={styles.leftArrow}>&#10094;</a>
                <div className={styles.line}>
                    <Replier />
                </div>
                <a className={styles.rightArrow}>&#10095;</a>
            </div>
        </div>
    );
}

export default ProjectLines;