import styles from '../styles/galery.module.css'
import ProjectLines from '../components/ProjectLines'

const Galery = () => {
    return (
        <div className={styles.galeryPage}>
            <h1 className={styles.title}>Projetos</h1>
            <div className={styles.galery}>
                <ProjectLines/>
                <ProjectLines/>
            </div>
        </div>
    );
}

export default Galery;