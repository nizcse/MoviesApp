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
        setFavorite:(state,action)=>{
            state.favorites.push(action.payload);
        },
        setUnfavorite:(state,action)=>{
            state.favorites.splice(state.favorites.indexOf(action.payload),1)
        }
    }
})

export default favoritesListSlice.reducer

export const {setFavorite,setUnfavorite} = favoritesListSlice.actions;