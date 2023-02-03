import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Image from 'next/image'
import Axios from 'axios';


function Register() {
    let router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        Axios.post('http://localhost:3000/datainsert', {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone_number: data.phone_number,
            address: data.address,
            old_student: data.old_student,
            reason: data.reason

        })
        .then((response) => {
            console.log(response)
            alert("Your Information has been added")
        }) 
        .catch((err) => {
            console.log(err)
        })
    
    }

    
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
            

            <form className={styles.reg_container} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.frst_division}>
                    <h1 className={styles.info}>Registration Form:</h1>
                    <div className={styles.req_line}>
                        <div className={styles.box}>
                            <p className={styles.question}>Firstname:</p>
                            <input className={styles.first_name} type="text" name="first_name" {...register("first_name")} />
                        </div>
                        <div className={styles.box}>
                            <p className={styles.question}>Lastname:</p>
                            <input className={styles.last_name} type="text" name="last_name"  {...register("last_name")} />
                        </div>
                    </div>

                    <div className={styles.req_line}>
                        <div className={styles.box}>
                            <p className={styles.question}>Email:</p>
                            <input className={styles.email} type="text" name="email" {...register("email")} />
                        </div>
                        <div className={styles.box}>
                        <p className={styles.question}>Mobile:</p>
                            <input className={styles.mobile} type="text" name="phone_number"  {...register("phone_number")} />
                        </div>
                    </div>

                    <div className={styles.req_line}>
                        <div className={styles.box}>
                            <p className={styles.question}>Address:</p>
                            <input className={styles.address} type="text" name="address"  {...register("address")} />        
                        </div>
                        <div className={styles.box}>
                        <p className={styles.question}>Old Student?:</p>
                            <div className={styles.radio_box}>
                                <div className={styles.radio_container}>
                                    <input className={styles.returnee} type="radio" name="old_student" value="1" {...register("old_student")} />
                                    <p>Yes</p>
                                </div>
                                <div className={styles.radio_container}>
                                    <input className={styles.returnee} type="radio" name="old_student"  value="0" {...register("old_student")}/>
                                    <p>No</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ques_line}>
                        <p className={styles.last_question}>Why do you want to study here?:</p>
                        <textarea className={styles.input} type="text" name="reason" {...register("reason")} />
                    </div>
                </div>

                <div className={styles.scnd_division}>
                <input
                        className={styles.submit_btn}
                        type='submit'
                        value='Enter'
                        name="submitBtn" />     
                </div>
                
            </form>
        </div>
    )
}
export default Register;