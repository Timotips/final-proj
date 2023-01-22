import styles from "./details.module.css";
import Link from "next/link";
import Image from 'next/image'


const Details  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src="/details_background.png" width={'1920'} height={'691'} alt="Rooms" className={styles.details_background} /> 
                <div className={styles.background_overlay}></div>
            </div>
            <div className={styles.title}>
                <div className={styles.first_division}>
                    <div className={styles.employed}>
                        <h1 className={styles.percentage}>95%</h1>
                        <p className={styles.description}>of new graduates are employed, in graduate school, or engaged in significant volunteer work</p>
                     </div>
                     <div className={styles.abroad}>
                        <h1 className={styles.percentage}>57%</h1>
                        <p className={styles.description}>of students study abroad</p>
                     </div>
                </div>
                <div className={styles.second_division}>
                    <div className={styles.courses}>
                        <h1 className={styles.number}>33</h1>
                        <p className={styles.info}>available programs</p>
                    </div>
                    <div className={styles.mission}>
                        <h1 className={styles.mission_header}>Mission</h1>
                        <p className={styles.mission_description}>We are a leader in our community, preparing future leaders for careers within health, education and scientific fields that will serve the community in which we practice. Our educators are focused on skill readiness so all students regardless of background will be able to become successful, competent and confident practitioners.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;