import styles from '../styles/galery.module.css'
import Image from 'next/image'
import Link from 'next/link'
import photo from '../public/01.png'

export const getStaticProps = async () => {

    const response = await fetch('https://my-json-server.typicode.com/Leterinho/PortfolioInteriorDesign/card');
    const data = await response.json();

    return {
        props: { data }
    }
}

const ProjectLines = ({ data }) => {
    return (
        <div className={styles.categoryWrapper}>
            <h4 className={styles.subTitle}>Escritório</h4>
            <div className={styles.lineWrapper}>
                <a className={styles.leftArrow}>&#10094;</a>
                <div className={styles.line}>
                    {data.map((id, name) => (
                        <div className={styles.imageBox}>
                            <Image src={photo} width={400} height={200} layout="responsive" lazy="true" placeholder="blur" />
                            <div className={styles.linkContent}>
                                <span className={styles.name} key={id}>{name}</span>
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