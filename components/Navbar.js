import styles from '../styles/Navbar.module.css'
import Home from '../public/home.js'
import LinkNext from 'next/link'
import { Link } from 'react-scroll'
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter();
    function linkHandler(path, text) {
        return router.asPath.toString() == "#" ? <Link to={path} className={styles.link}>{text}</Link> : <LinkNext href={"/#" + path} ><a className={styles.link}>{text}</a></LinkNext>;
    }
    return (
        <nav className={styles.Navbar}>
            <div className={styles.home}>
                <Link to="home" >
                    <LinkNext href="/">
                        <a>
                            <Home alt="home"/>
                        </a>
                    </LinkNext>
                </Link>
            </div>
            <div className={styles.links}>
                {linkHandler("about", "About")}
                {linkHandler("projects", "Projects")}
                {linkHandler("contact", "Contact")}
            </div>
        </nav>
    );
}

export default Navbar;