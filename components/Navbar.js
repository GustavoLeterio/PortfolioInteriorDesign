import styles from '../styles/Navbar.module.css'
import SVG from '../public/home.js'
import LinkNext from 'next/link'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter();
    function linkHandler(path, text) {
        return router.asPath.toString() == "/" ? <Link to={path} className={styles.link}>{text}</Link> : <LinkNext href="/" ><a className={styles.link}>{text}</a></LinkNext>;
    }
    return (
        <nav className={styles.Navbar}>
            <div className={styles.home}>
                <Link to="home" >
                    <LinkNext href="/">
                        <a href="">
                            <SVG />
                        </a>
                    </LinkNext>
                </Link>
            </div>
            <div className={styles.links}>
                {linkHandler("about", "Sobre")}
                {linkHandler("projects", "Projetos")}
                {linkHandler("contact", "Contato")}
            </div>
        </nav>
    );
}

export default Navbar;