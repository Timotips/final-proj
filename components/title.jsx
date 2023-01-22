import styles from "./title.module.css";
import Link from "next/link";
import Image from 'next/image'


const Title  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src="/title_background.png" width={'1920'} height={'1023'} alt="School Building" className={styles.title_background} /> 
                <div className={styles.background_overlay}></div>
            </div>
            <div className={styles.title}>
                <div className={styles.first_division}>
                    <Image src="/logo.png" width={'567'} height={'458'} alt="Navbar Logo" className={styles.title_logo} /> 
                </div>
                <div className={styles.second_division}>
                    <div className={styles.details}>
                        <h1 className={styles.name}>Sacred Heart College</h1>
                    </div>
                    <div className={styles.button}>
                        <Link href="/" className={styles.register_btn}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Title;