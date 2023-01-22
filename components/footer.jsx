import styles from "./footer.module.css";
import Link from "next/link";
import Image from 'next/image'


const Footer  = () => {
    return (
        <div className={styles.container}>
                <div className={styles.divisions}>
                    <h1 className={styles.contxt}>Contact Us</h1>
                    <div className={styles.acc}>
                        <div className={styles.groups}>
                            <Image src="/gmail_logo.png" width={'39'} height={'30'} alt="Gmail Logo" className={styles.gmail_logo} /> 
                            <h1 className={styles.details}>SHCollege@gmail.com</h1>
                        </div>
                        <div className={styles.groups}>
                         <Image src="/phone_logo.png" width={'26'} height={'26'} alt="Phone Logo" className={styles.phone_logo} /> 
                            <h1 className={styles.details}>+63 995 545 0986</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.divisions}>
                    <h1 className={styles.contxt}>Socials</h1>
                    <div className={styles.acc}>
                        <div className={styles.groups}>
                            <Image src="/twitter_logo.png" width={'24'} height={'25'} alt="Twiiter Logo" className={styles.twitter_logo} />  
                            <h1 className={styles.details}>@SH_College</h1>
                        </div>
                        <div className={styles.groups}>
                            <Image src="/insta_logo.png" width={'23'} height={'23'} alt="Insta Logo" className={styles.insta_logo} /> 
                            <h1 className={styles.details}>@SH_College</h1>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Footer;