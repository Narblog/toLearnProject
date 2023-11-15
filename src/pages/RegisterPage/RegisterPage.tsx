import React, { useState } from "react";
import styles from "./RegisterPage.module.css"
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { RegisterProps } from "features/features-A/components/Header/Header.interface";


const RegisterPage: React.FC<RegisterProps> = (props) => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const { signIn, signInGit } = props
   
    
    /********************* ************************ 
    const handleSubmit= async event=>{
    event.preventDefault()
        await addDoc(employeelist,user)
        setUser({
            name:"",
            email:"",
            password:""
        })
    }

           
    /********************* ************************  */
    return (
        <div className={styles.RegisterPage}>

            <div className={styles.Register}>
                <h2>Registration</h2>
                <input type="text" placeholder=" Enter Username" name="name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
                <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                <input type="password" placeholder="Enter Password" name="psw" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                <input type="password" placeholder="Repeat Password" name="psw-repeat" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                <div className={styles.Registration}>
                    <button className={styles.loginbtn}>
                        <Link className={styles.link} to="/Login">Sign Up</Link>
                    </button>
                    <div className={styles.fasign}>
                        <button onClick={signIn} className={styles.signin}>
                            <FaGoogle />
                        </button>
                        <button onClick={signInGit} className={styles.signingit}>
                            <FaGithub />
                        </button>
                    </div>
                </div>


            </div>

        </div>





    )
}
export default RegisterPage