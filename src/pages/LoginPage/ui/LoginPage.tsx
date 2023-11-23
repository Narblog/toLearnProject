
import styles from './LoginPage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { FC, useState } from 'react'
import {auth} from "../../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import SignInWithGithub from 'features/SignInWithGitHub';
import SignInWithGoogle from "features/SignInWithGoogle"



const LoginPage: FC = () => {
   const [email,setEmail]=useState<string>("") 
   const [password,setPassword]=useState<string>("")
    const [error,setError]=useState<string>();
    const navigate = useNavigate()

      const SignIn = (e: React.SyntheticEvent) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential)
            navigate('/user');
          })
        .catch((error)=>{
            console.log(error)
            setError(error)
        })
      };
    return (
        <div className={styles.login}>
            <div className={styles.loginpage}>
            <form onSubmit={SignIn}>
                <h2>Sign Up</h2>
              
                <div className={styles.forma}>
                    <input className={styles.input} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}id="username" placeholder="Username or Email" />
                    <input className={styles.input} type="password" value={password}     onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Password" />
                </div>
                <div className={styles.signinbox}>
                    <button className={styles.loginbtn} type="submit">
                        <Link className={styles.link} onClick={SignIn} to="/User">Sign Up</Link>
                    </button>
                    <div className={styles.fasign}>
                    <SignInWithGoogle/>
                       <SignInWithGithub/>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage