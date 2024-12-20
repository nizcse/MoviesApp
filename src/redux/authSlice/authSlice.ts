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

    }
})

export default authSlice.reducer