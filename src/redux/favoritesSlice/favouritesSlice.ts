import { createSlice } from "@reduxjs/toolkit";

export type Favorite = number

export type FavouriteListState = {
    favorites:Favorite[];
    loading:boolean;
    error:boolean;
}

const initialState : FavouriteListState = {
    favorites:[],
    loading:false,
    error:false,
}

const favoritesListSlice = createSlice({
    name:'favoritsSlice',
    initialState:initialState,
    reducers:{

    }
})

export default favoritesListSlice.reducer