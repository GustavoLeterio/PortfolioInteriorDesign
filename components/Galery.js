import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import photo from '../public/01.png'

const Galery = () => {
    return (
        <div className={styles.galeryPage}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>Projetos</h1>
                <div className={styles.galery}>
                    <div className={styles.lineWrapper}>
                        <h4 className={styles.subTitle}>Escritório</h4>
                        <div className={styles.line}>
                            <div className={styles.imageBox}>
                                <Image src={photo} width={400} height={200} layout="responsive" lazy placeholder="blur" />
                                <div className={styles.linkContent}>
                                    <span className={styles.name}>Escritório Bonito</span>
                                    <Link href="#" ><a className={styles.link}>Veja Mais!</a></Link>
                                </div>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={photo} width={400} height={200} layout="responsive" lazy placeholder="blur" />
                                <div className={styles.linkContent}>
                                    <span className={styles.name}>Escritório Bonito</span>
                                    <Link href="#" ><a className={styles.link}>Veja Mais!</a></Link>
                                </div>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={photo} width={400} height={200} layout="responsive" lazy placeholder="blur" />
                                <div className={styles.linkContent}>
                                    <span className={styles.name}>Escritório Bonito</span>
                                    <Link href="#" ><a className={styles.link}>Veja Mais!</a></Link>
                                </div>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={photo} width={400} height={200} layout="responsive" lazy placeholder="blur" />
                                <div className={styles.linkContent}>
                                    <span className={styles.name}>Escritório Bonito</span>
                                    <Link href="#" ><a className={styles.link}>Veja Mais!</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery;