import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import styles from "./RegisterPage.module.css"
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { RegisterProps } from "features/features-A/components/Header/ui/Header.interface";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"



const RegisterPage: React.FC<RegisterProps | any> = (props) => {
    const { signIn, signInGit } = props
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

    /* const [user, setUser] = useState({ login: "", email: "", password: "" })
     const [error,setError]=useState("Error")
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
 
 
            const SignUp = (e: React.SyntheticEvent) => {
          e.preventDefault()
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log(userCredential)
              navigate('/Login');
            })
          .catch((error)=>{
              console.log(error)
              setError(error)
          })
        };
    
   */
    return (
        <div className={styles.RegisterPage}>
            <div className={styles.Register}>
                <form onSubmit={handleSignUp}>
                    <h2>Registration</h2>
                    <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className={styles.Registration}>
                        <button type="submit" className={styles.loginbtn}>
                            <Link className={styles.link} onClick={handleSignUp} to="/Login">Sign Up</Link>
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
                </form>
            </div>
        </div>
    )
}
export default RegisterPage