import React from "react"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import HomePage from "pages/HomePage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import TablePage from "pages/TablePage"
import UserPage from "pages/UserPage"
import "./styles/index.scss"

const App:React.FC=()=>{
    return(
        <BrowserRouter>
         <div>
            <Routes>
                <Route path="/User" element={<UserPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Table" element={<TablePage/>}/>
                <Route path="/Register" element={<RegisterPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
            </Routes>
        </div>
        
        </BrowserRouter>
       
    )
}
export default App