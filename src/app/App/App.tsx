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
              info: "Some long description text 1",
              author: "Jack",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "John",
                  content: "text",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Jin",
                      message: "Comment",
                      date: new Date("2023-11-4"),
                    },
                  ],
                },
                {
                  id: 2,
                  author: "Artur",
                  message: "Comment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Comment",
                      date: new Date("2023-11-4"),
                    },
                 
                  ],
                },
                {
                  id: 2,
                  author: "Artur",
                  message: "Comment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Artur",
                      message: "Comment",
                      date: new Date("2023-11-4"),
                    },
                   
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Task title 2",
              info: "Some long description text 2",
              author: "Aram",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Jack",
                  message: "Comment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Aram",
                      message: "Comment",
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
          author: "Hrach",
          date: new Date("2022-09-16"),
          tasks: [
            {
              id: 1,
              title: "Task title 1",
              info: "Some long description text",
              author: "Aram",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "JOhn",
                  message: "Comment",
                  date: new Date("2023-11-4"),
                  reply: [
                    {
                      id: 1,
                      author: "Jack",
                      message: "Comment",
                      date: new Date("2023-11-4"),
                    },
                   
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Task title 2",
              info: "Some long description text",
              author: "Saqo",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Ani",
                  message: "Comment",
                  date: new Date("2023-11-4"),
                  reply: [
                 
                    {
                      id: 2,
                      author: "Pogos",
                      message: "Comment",
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
          author: "Jack",
          date: new Date("2023-11-2"),
          tasks: [
            {
              id: 1,
              title: "Task title 1",
              info: "Some long description text 3",
              author: "Artur",
              date: new Date("2023-11-4"),
              comments: [
                {
                  id: 1,
                  author: "Artur",
                  message: "Comment",
                  date: new Date("2023-11-4"),
                  reply: [
                  
                    {
                      id: 2,
                      author: "Pogos",
                      message: "Comment",
                      date: new Date("2023-11-4"),
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Task name 2",
              info: "Info",
              author: "Artur",
              date: new Date("12-11-2023"),
              comments: [
                {
                  id: 1,
                  author: "John",
                  message: "Comment",
                  date: new Date("12-11-2023"),
                  reply: [
                    {
                      id: 1,
                      author: "Hrach",
                      message: "Comment",
                      date: new Date("12-11-2023"),
                    },
                    {
                      id: 2,
                      author: "Jack",
                      message: "Comment",
                      date: new Date("12-11-2023"),
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