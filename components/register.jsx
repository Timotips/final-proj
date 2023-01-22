import styles from "./register.module.css";
import Link from "next/link";
import Image from 'next/image'


const Register  = () => {
    return (
        <div className={styles.container}>

            <div className={styles.background}>
                <Image src="/register_background.png" width={'1920'} height={'990'} alt="School Building" className={styles.title_background} /> 
            </div>

            <div className={styles.reg_box}>
                <h1 className={styles.info}>Registration Form</h1>
                <div className={styles.frst_line}>
                    <div className={styles.firstname_box}>
                        <p className={styles.question}>Firstname:</p>
                        <input className={styles.first_name} type="text" name="input_box" />
                    </div>
                    <div className={styles.lastname_box}>
                        <p className={styles.question}>Lastname:</p>
                        <input className={styles.last_name} type="text" name="input_box" />
                    </div>
                </div>

                <div className={styles.scnd_line}>
                    <div className={styles.email_box}>
                        <p className={styles.question}>Email:</p>
                        <input className={styles.email} type="text" name="input_box" />
                    </div>
                    <div className={styles.mobile_box}>
                     <p className={styles.question}>Mobile:</p>
                        <input className={styles.mobile} type="text" name="input_box" />
                    </div>
                </div>

                <div className={styles.thrd_line}>
                    <div className={styles.address_box}>
                        <p className={styles.question}>Address:</p>
                        <input className={styles.address} type="text" name="input_box" />        
                    </div>
                    <div className={styles.returnee_box}>
                     <p className={styles.question}>Old Student?:</p>
                        <div className={styles.radio_box}>
                            <input className={styles.returnee} type="radio" name="question" /> Yes
                            <input className={styles.returnee} type="radio" name="question" /> No
                        </div>
                    </div>
                </div>

                <div className={styles.frth_line}>
                    <p className={styles.last_question}>Why do you want to study here?:</p>
                    <input className={styles.input} type="text" name="input_box" />
                </div>

                <div className={styles.button}>
                    <Link href="/" className={styles.enter_btn}>Enter</Link>        
                </div>
                
            </div>
        </div>
    )
}
export default Register;