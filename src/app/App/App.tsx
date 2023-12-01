import React, {lazy,Suspense}from "react"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import "../styles/index.scss"
import Loading from "entities/Loading"
const HomePage = lazy(() => import('pages/HomePage'))
const LoginPage = lazy(() => import('pages/LoginPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage'))
const UserPage = lazy(() => import('pages/UserPage'))
const TablePage = lazy(() => import('pages/TablePage'))
const BoardsPage = lazy(() => import('pages/BoardsPage'))
const NotFound=lazy(()=>import('pages/NotFound'))
const App:React.FC=()=>{
 
 
    return(
        <BrowserRouter>
        <div className={`app`}>
         <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/User" element={<UserPage/>}/>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/Table" element={<TablePage/>} />
                <Route path="/Register" element={<RegisterPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Boards" element={<BoardsPage/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
        </div>
        
        </BrowserRouter>
       
    )
}
export default App