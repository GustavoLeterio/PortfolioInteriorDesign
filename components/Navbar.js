import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import React, { useEffect, useState } from 'react'
import SVG from '../public/home.js'

const Navbar = () => {
    const [fadeNavbarProp, setNavbarProp] = useState({
        fade: styles.fadeNavbar
    });
    useEffect(() => {
        if (fadeNavbarProp.fade === styles.fadeNavbar) {
            setNavbarProp({ fade: styles.navbar })
        }
    });
    return (
        <nav className={fadeNavbarProp.fade}>
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