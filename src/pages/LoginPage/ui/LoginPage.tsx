
import styles from './LoginPage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { FC, useState } from 'react'
import { auth } from '../../../firebase'

import { FaGoogle, FaGithub } from "react-icons/fa6";
import { database } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignInWithGithub from 'features/SignInWithGitHub';
import SignInWithGoogle from "features/SignInWithGoogle"


const LoginPage: FC = () => {
    const [user,setUser]=useState({login:"",password:""})
   const [login,setLogin]=useState("") 
   const [password,setPassword]=useState("")
    const [error,setError]=useState("Error")
    const navigate = useNavigate()

    const handleSubmit=(e: React.SyntheticEvent)=>{
        e.preventDefault()
       createUserWithEmailAndPassword(auth,user.login,user.password).then(data=>{
        localStorage.setItem("token",user.login)
        localStorage.setItem("user",JSON.stringify(user))
       navigate("/User")
       })
       .catch(err=>setError(err.message))
    }
   
  
    return (
        <div className={styles.login}>
            
            <div className={styles.loginpage}>
                <h2>Sign Up</h2>
                <div className={styles.forma}>
                    <input className={styles.input} type="email" value={login} onChange={(e)=>setLogin(e.target.value)} id="username" placeholder="Username or Email" />
                    <input className={styles.input} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Password" />
                </div>
                <div className={styles.signinbox}>
                    <button className={styles.loginbtn}>
                        <Link className={styles.link} onClick={handleSubmit} to="/User">Sign Up</Link>
                    </button>
                    <div className={styles.fasign}>
                    <SignInWithGoogle/>
                       <SignInWithGithub/>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default LoginPage