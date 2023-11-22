import {FC} from "react"
import { auth } from '../../../firebase'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css"



const SignInWithGithub:FC=()=>{
    const navigate = useNavigate()
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
    };
    return(
        <button onClick={signInGit} className={styles.signingit}>
        <FaGithub />
    </button>
    )
}
export default SignInWithGithub