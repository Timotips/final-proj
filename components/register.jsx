import styles from "./register.module.css";
import Link from "next/link";
import Image from 'next/image'


const Register  = () => {
    return (
        <div className={styles.container}>

            <div className={styles.background}>
                <Image src="/register_background.png" width={'1920'} height={'990'} alt="School Building" className={styles.title_background} /> 
                <Image src="/room.jpg" width={'1920'} height={'990'} alt="Logo" className={styles.second_background} /> 
            </div>

            <div className={styles.background_overlay}></div>

            <div className={styles.title}>
                <div className={styles.first_division}>
                    <Image src="/logo.png" width={'567'} height={'458'} alt="Navbar Logo" className={styles.title_logo} /> 
                </div>
                <div className={styles.second_division}>
                    <h1 className={styles.name}>Sacred Heart College</h1>
                </div>
            </div>
            

            <div className={styles.reg_container}>
                <div className={styles.frst_division}>
                    <h1 className={styles.info}>Registration Form:</h1>
                    <div className={styles.req_line}>
                        <div className={styles.box}>
                            <p className={styles.question}>Firstname:</p>
                            <input className={styles.first_name} type="text" name="input_box" />
                        </div>
                        <div className={styles.box}>
                            <p className={styles.question}>Lastname:</p>
                            <input className={styles.last_name} type="text" name="input_box" />
                        </div>
                    </div>

                    <div className={styles.req_line}>
                        <div className={styles.box}>
                            <p className={styles.question}>Email:</p>
                            <input className={styles.email} type="text" name="input_box" />
                        </div>
                        <div className={styles.box}>
                        <p className={styles.question}>Mobile:</p>
                            <input className={styles.mobile} type="text" name="input_box" />
                        </div>
                    </div>

                    <div className={styles.req_line}>
                        <div className={styles.box}>
                            <p className={styles.question}>Address:</p>
                            <input className={styles.address} type="text" name="input_box" />        
                        </div>
                        <div className={styles.box}>
                        <p className={styles.question}>Old Student?:</p>
                            <div className={styles.radio_box}>
                                <div className={styles.radio_container}>
                                    <input className={styles.returnee} type="radio" name="question" />
                                    <p>Yes</p>
                                </div>
                                <div className={styles.radio_container}>
                                    <input className={styles.returnee} type="radio" name="question" />
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ques_line}>
                        <p className={styles.last_question}>Why do you want to study here?:</p>
                        <input className={styles.input} type="text" name="input_box" />
                    </div>
                </div>

                <div className={styles.scnd_division}>
                    <Link href="/" className={styles.submit_btn}>Enter</Link>        
                </div>
                
            </div>
        </div>
    )
}
export default Register;