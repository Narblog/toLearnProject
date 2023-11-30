import {FC} from "react"
import {  FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styles from "./SignInWithGoogle.module.css"
import { useAppDispatch } from "hooks/useAppDispatch";
import { loginWithGoogle } from "entities/firebase/Auth/loginWithGoogle";
const SignInWithGoogle: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
  
    const signIn = async () => {
      await dispatch(loginWithGoogle())
      navigate("/user")
    }
    return(
        <button onClick={signIn} className={styles.signin}>
        <FaGoogle />
    </button>
    )
}
export default SignInWithGoogle