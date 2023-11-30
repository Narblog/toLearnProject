import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasks/taskSlice'
import commentsReducer from './comments/commentsSlice'
import userReducer from './user/userSlice'
import blogSlice from "./blogSlice";
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        comments: commentsReducer,
        user: userReducer,
        blog: blogSlice,

    }  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;