import { PayloadAction,  createSlice } from "@reduxjs/toolkit";
import {User} from "../store.interfaces"

interface State{
  photoURL: any;
  loading: boolean,
  error: string | null,
  profile: User | null,
}

const initialState: State= {
  loading: false,
  error: null,
  profile: null,
  photoURL:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>)=>{
      state.profile = action.payload;
  },
  },
  extraReducers: {
   
  },
});

export default userSlice.reducer;

export const {setUser} = userSlice.actions;