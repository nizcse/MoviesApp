import { createSlice } from "@reduxjs/toolkit";

export type User = {
    name:string;
}

export type authState = {
    user:User;
    genres:string[];
}

const initialState : authState = {
    user:{name:''},
    genres:[],
}

const authSlice = createSlice({
    name:'authSlice',
    initialState:initialState,
    reducers:{
        setName:(state,action)=>{
            state.user=action.payload;
        },
        setGenre:(state,action)=>{
            state.genres=action.payload
        }
    }
})

export default authSlice.reducer
export const {setName,setGenre} = authSlice.actions