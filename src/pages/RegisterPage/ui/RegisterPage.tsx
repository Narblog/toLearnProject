import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import styles from "./RegisterPage.module.css"
import { Link,useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { RegisterProps } from "features/features-A/components/Header/ui/Header.interface";
import { database } from '../../../firebase';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"



const RegisterPage: React.FC<RegisterProps | any > = (props) => {
    const [user, setUser] = useState({ login: "", email: "", password: "" })
    const [error,setError]=useState("Error")
    const { signIn, signInGit } = props
    const firebaseConfig = {
       
      };
      
      initializeApp(firebaseConfig)

    const auth=getAuth();
    const navigate=useNavigate()
   
    const handleSubmit=(e: React.SyntheticEvent) =>{
        e.preventDefault()
     
        createUserWithEmailAndPassword(database,user.login,user.password)
        .then(data=>{
            console.log("succes",data.user.uid)
            navigate("/")
        })
        .catch(err=>{
           setError(err.message)
        })
    }

   
  
    return (
        <div className={styles.RegisterPage}>

            <div className={styles.Register}>
                <h2>Registration</h2>
                <input type="text" placeholder=" Enter Username" name="name" value={user.login} onChange={e => setUser({ ...user, login: e.target.value })} />
                <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                <input type="password" placeholder="Enter Password" name="psw" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                <input type="password" placeholder="Repeat Password" name="psw-repeat" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                <div className={styles.Registration}>
                    <button className={styles.loginbtn}>
                        <Link className={styles.link} onClick={handleSubmit} to="/Login">Sign Up</Link>
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