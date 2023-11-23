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


const App:React.FC=()=>{
    const items = [
        {
          id: 1,
          mainTitle: "Title 1",
          author: "John",
          date: new Date("2023-11-4"),
          tasks: [
            {
              id: 1,
              title: "Task title 1",
              description: "Some long description text 1",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Some reply coment",
                      date: new Date("2023-11-4"),
                    },
                  ],
                },
                {
                  id: 2,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Some reply coment",
                      date: new Date("2023-11-4"),
                    },
                 
                  ],
                },
                {
                  id: 2,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Some reply coment",
                      date: new Date("2023-11-4"),
                    },
                   
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Task title 2",
              description: "Some long description text 2",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Some reply coment",
                      date: new Date("2023-11-4"),
                    },
                  
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          mainTitle: "Title 2",
          author: "Gektor",
          date: new Date("2023-10-4"),
          tasks: [
            {
              id: 1,
              title: "Task title 1",
              description: "Some long description text",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Some reply coment",
                      date: new Date("2023-11-4"),
                    },
                   
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Task title 2",
              description: "Some long description text",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                 
                    {
                      id: 2,
                      author: "Pogos",
                      message: "Some second reply coment",
                      date: new Date("2023-11-4"),
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          mainTitle: "Title 3",
          author: "Pogos",
          date: new Date("2023-11-2"),
          tasks: [
            {
              id: 1,
              title: "Task title 1",
              description: "Some long description text 3",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                  
                    {
                      id: 2,
                      author: "Pogos",
                      message: "Some second reply coment",
                      date: new Date("2023-11-4"),
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Task title 2",
              description: "Some long description text 4",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Some coment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Some reply coment",
                      date: new Date("2023-11-4"),
                    },
                    {
                      id: 2,
                      author: "Pogos",
                      message: "Some second reply coment",
                      date: new Date("2023-11-4"),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
    return(
        <BrowserRouter>
        <div className={`app`}>
         <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/User" element={<UserPage/>}/>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/Table" element={<TablePage items={items} />} />
                <Route path="/Register" element={<RegisterPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Boards" element={<BoardsPage/>}/>
            </Routes>
            </Suspense>
        </div>
        
        </BrowserRouter>
       
    )
}
export default App