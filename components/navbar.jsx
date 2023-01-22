import styles from "./navbar.module.css";
import Link from "next/link";
import Image from 'next/image'

export default function Navbar() {
  return (

    <div className={styles.container}>
            {/* <div className={styles.navbar_toggle} id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div> */}
            <Image src="/nav_backgroud.png" width={'1926'} height={'54'} alt="Navbar Background" className={styles.navbar_background} /> 

            <ul className={styles.navbar_menu}>
                <div className={styles.logo}>
                    <Image src="/logo.png" width={'55'} height={'44'} alt="Navbar Logo" className={styles.navbar_logo} /> 
                    <div className={styles.title}>
                        <Link href="/" className={styles.navbar_title}>Sacred Heart College</Link>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link href="/" className={styles.navbar_links}>Discovery</Link>
                    <Link href="./registration" className={styles.navbar_links}>Register</Link>
                </div>
            </ul>
        </div>
  );
}