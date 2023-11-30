import {FC} from "react"
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css"
import { FaGithub } from "react-icons/fa"
import { useAppDispatch } from "hooks/useAppDispatch";
import { loginWithGithub } from "entities/firebase/Auth/loginWithGithub";

const SignInWithGithub: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
  
    const signIn = async () => {
      await dispatch(loginWithGithub())
      navigate("/user")
    }
  
    return(
        <button onClick={signIn} className={styles.signingit}>
        <FaGithub />
    </button>
    )
}
export default SignInWithGithub