import React from "react"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import HomePage from "pages/HomePage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import TablePage from "pages/TablePage"
import UserPage from "pages/UserPage"
import "./styles/index.scss"



const App:React.FC=()=>{
    const news=[
        {
            id: 1,
            title: 'New title 1',
            content: 'News Content 1',
        },
        {
            id: 2,
            title: 'New title 2',
            content: 'News Content 2',
        },
       
    ]
    return(
        <BrowserRouter>
         <div>
            <Routes>
                <Route path="/User" element={<UserPage/>}/>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/Table" element={<TablePage news={news}/>}/>
                <Route path="/Register" element={<RegisterPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
            </Routes>
        </div>
        
        </BrowserRouter>
       
    )
}
export default App