import React, { useState ,FC, useEffect} from "react";
import styles from "./RegisterPage.module.css"
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import SignInWithGithub from 'features/SignInWithGitHub';
import SignInWithGoogle from "features/SignInWithGoogle"
import { useAppDispatch } from "hooks/useAppDispatch";
import { registerWithEmail } from "entities/redux/Auth/registerWithEmail";



const RegisterPage: React.FC = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const auth = getAuth()
    const [error, setError] = useState<string>();
    const navigate = useNavigate()

    const [cpassword, setCpassword] = useState<string>("");
    const [rules, setRules] = useState<boolean>(false);
    const [errorList, setErrorList] = useState<string[]>([]);
  
    const dispatch = useAppDispatch()
  
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const onChangeCpassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCpassword(event.target.value);
    };
  
    const checkRules = () => {
      setRules((prev) => !prev);
    };
  
    useEffect(() => {}, [errorList]);
  
    const Register = async () => {
      setErrorList([]);
  
      if (password !== cpassword) {
        setErrorList((prev) => {
          if (!prev.includes("Both passwords are not same!")) {
            const newArr = [...prev];
            newArr.push("Both passwords are not same!");
            return newArr;
          }
  
          return prev;
        });
      }
      if (!rules) {
        setErrorList((prev) => {
          if (!prev.includes("Please, read rules and mark check!")) {
            const newArr = [...prev];
            newArr.push("Please, read rules and mark check!");
            return newArr;
          }
          return prev;
        });
      }
  
      if (errorList.length) {
        return;
      }
  
      await dispatch(registerWithEmail({email, password}))
      navigate("/login")

    }

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
         createUserWithEmailAndPassword(auth,user.email,user.password)
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
                    <input type="email" id="email"  placeholder="Enter Email" value={email} onChange={onChangeEmail} />
                
                    <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChangePassword}
        />
 
        <input
          type="password"
          placeholder="Repeat Password"
          id="cpassword"
          value={cpassword}
          onChange={onChangeCpassword}
        />
                    <div className={styles.Registration}>
                        <button type="submit" className={styles.loginbtn}>
                            <Link className={styles.link} onClick={Register} to="/Login">Sign Up</Link>
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