import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import SVG from '../public/home.js'

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.home}>
                <Link href="" >
                    <a>
                        <SVG />
                    </a>
                </Link>
            </div>
            <div className={styles.links}>
                <Link href="#" ><a className={styles.link}>Sobre</a></Link>
                <Link href="#" ><a className={styles.link}>Projetos</a></Link>
                <Link href="#" ><a className={styles.link}>Contato</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;