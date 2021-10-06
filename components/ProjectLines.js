import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }

}

const ProjectLines = ({ ninjas }) => {
    return (
        <div className={styles.categoryWrapper}>
            <h4 className={styles.subTitle}>Escritório</h4>
            <div className={styles.lineWrapper}>
                <a className={styles.leftArrow}>&#10094;</a>
                <div className={styles.line}>
                    {ninjas.map(ninjas => (
                        <div className={styles.imageBox} key={ninjas.id}>
                            <Image src={ninjas.image} width={400} height={200} layout="responsive" lazy="true" placeholder="blur" />
                            <div className={styles.linkContent}>
                                <span className={styles.name}>{ninjas.title}</span>
                                <Link href=""><a className={styles.link}>Veja Mais!</a></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <a className={styles.rightArrow}>&#10095;</a>
            </div>
        </div>
    );
}

export default ProjectLines;