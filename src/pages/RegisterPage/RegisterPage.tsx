import React from "react";
import styles from "./RegisterPage.module.css"
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
    return (
        <div className={styles.RegisterPage}>
             <div className={styles.Register}>
                <h2>Registration</h2>
            <input type="text" placeholder="Enter Email" name="email" />
            <input type="password" placeholder="Enter Password" name="psw" />
            <input type="password" placeholder="Repeat Password" name="psw-repeat"   />
            <button className={styles.loginbtn}>
           <Link  className={styles.link}to="/Login">Sign Up</Link>
           </button>
        </div>
        </div>
       
    )
}
export default RegisterPage