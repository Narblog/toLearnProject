
import styles from './LoginPage.module.css'
import { Link,  useNavigate } from "react-router-dom";
import { FC } from 'react'
import { auth } from '../../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa6";


const LoginPage:FC=()=>{
    const navigate=useNavigate()
    const signIn = async () => {
        const provider = new GoogleAuthProvider();
    
        try {
          await signInWithPopup(auth, provider)
          .then(r=>{
            navigate("/User")
          });
        } catch (error) {
          console.log(error);
        }
      }
    return(
        <div className={styles.login}>
     <div  className={styles.loginpage}>
            <h2>Sign Up</h2>
            <div className={styles.forma}>          
                <input className={styles.input} type="email" id="username" placeholder="Username or Email"/>
                <input className={styles.input} type="password" id="password" placeholder="Password"/>          
            </div>
            <div className={styles.signinbox}>
            <button className={styles.loginbtn}>
           <Link  className={styles.link}to="/User">Login</Link>
           </button>

           <button onClick={signIn} className={styles.signin}>
           <FaGoogle/>
    </button>
            </div>
          
            </div>
        
        </div>
    )
}
export default LoginPage