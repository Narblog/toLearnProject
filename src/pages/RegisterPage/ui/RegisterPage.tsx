import React, { useState } from "react";
import styles from "./RegisterPage.module.css"
import { Link, useNavigate } from "react-router-dom";
import { RegisterProps } from "features/features-A/components/Header/ui/Header.interface";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import SignInWithGithub from 'features/SignInWithGitHub';
import SignInWithGoogle from "features/SignInWithGoogle"



const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const auth = getAuth()
    const [error, setError] = useState<string>();
    const navigate = useNavigate()


    async function handleSignUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
     const [user, setUser] = useState({ login: "", email: "", password: "" })

 
     const handleSubmit=(e: React.SyntheticEvent) =>{
         e.preventDefault()   
         createUserWithEmailAndPassword(auth,user.login,user.password)
         .then(data=>{
             console.log("succes",data.user.uid)
             navigate("/")
         })
         .catch((error)=>{
            alert(error.message)
             setError(error)
         })
     }
    return (
        <div className={styles.RegisterPage}>
            <div className={styles.Register}>
                <form onSubmit={handleSignUp}>
                    <h2>Registration</h2>
                    <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Repeat Password" name="psw-repeat"   />
                    <div className={styles.Registration}>
                        <button type="submit" className={styles.loginbtn}>
                            <Link className={styles.link} onClick={handleSubmit} to="/Login">Sign Up</Link>
                        </button>
                        <div className={styles.fasign}>
                        <SignInWithGoogle/>
                       <SignInWithGithub/>
                        </div>
                        <span className={styles.haveAnAcc}>You have an account? <Link to='/login'><span>Sign In</span></Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage