import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import photo from '../public/01.png'


const Galery = (props) => {
    return (
        <div className={styles.galeryPage}>
            <h1 className={styles.title}>Projetos</h1>
            <div className={styles.galery}>
                <div className={styles.categoryWrapper}>
                    <h4 className={styles.subTitle}>Escritório</h4>
                    <div className={styles.lineWrapper}>
                        <a className={styles.leftArrow}>&#10094;</a>
                        <div className={styles.line}>
                            {props.datas.map((data) => (
                                <div className={styles.imageBox}>
                                    <Image src={photo} width={400} height={200} layout="responsive" lazy="true" placeholder="blur" />
                                    <div className={styles.linkContent}>
                                        <span className={styles.name} key={data.id}>{data.name}</span>
                                        <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className={styles.rightArrow}>&#10095;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery;