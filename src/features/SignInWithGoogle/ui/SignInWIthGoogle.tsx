import {FC} from "react"
import { auth } from '../../../firebase'
import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {  FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styles from "./SignInWithGoogle.module.css"



const SignInWithGoogle:FC=()=>{
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
    return(
        <button onClick={signIn} className={styles.signin}>
        <FaGoogle />
    </button>
    )
}
export default SignInWithGoogle