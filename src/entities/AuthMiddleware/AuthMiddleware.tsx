import { getAuth, onAuthStateChanged } from "firebase/auth"
import { Outlet, useNavigate } from "react-router"
import React,{FC,useState,useEffect} from "react"
import { Link } from "react-router-dom"
import Header from "features/features-A/components/Header"




const AuthMiddleware:React.FC=()=>{
    const auth=getAuth()
    const navigate=useNavigate()
    const [user,setUser]=useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(!user){
                return navigate("/")
            }else{
              return 
            }
        })
    },[])
    return(
        <>
       <Header/>
        
        <Outlet/>
        </>
    )
}

export default AuthMiddleware