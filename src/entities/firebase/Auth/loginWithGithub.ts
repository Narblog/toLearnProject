import { createAsyncThunk } from "@reduxjs/toolkit";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { User } from "../store.interfaces";


export const loginWithGithub = createAsyncThunk(
    "user/loginWithGithub",
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GithubAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const userData: User = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
            }

            return userData
        } catch (error){
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            else {
                rejectWithValue("My Error message")
            }
        }
        
    }
)