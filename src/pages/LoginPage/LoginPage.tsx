
import styles from './LoginPage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { FC } from 'react'
import { auth } from '../../firebase'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FaGoogle, FaGithub } from "react-icons/fa6";


const LoginPage: FC = () => {
    const navigate = useNavigate()
    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider)
                .then(result => {
                    navigate("/User")
                });
        } catch (error) {
            console.log(error);
        }
    }
    const signInGit = async () => {
        const provider = new GithubAuthProvider();
        try {
            await signInWithPopup(auth, provider)
                .then(result => {
                    navigate("/User")
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.login}>
            <div className={styles.loginpage}>
                <h2>Sign Up</h2>
                <div className={styles.forma}>
                    <input className={styles.input} type="email" id="username" placeholder="Username or Email" />
                    <input className={styles.input} type="password" id="password" placeholder="Password" />
                </div>
                <div className={styles.signinbox}>
                    <button className={styles.loginbtn}>
                        <Link className={styles.link} to="/User">Sign Up</Link>
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
export default LoginPage