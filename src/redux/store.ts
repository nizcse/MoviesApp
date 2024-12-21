import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authUserSlice from './authSlice/authSlice'
import favoriteMovieSlice from './favoritesSlice/favouritesSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
const persistConfig = {
    key : "movieApp",
    storage : AsyncStorage
}
const rootReducer = combineReducers({
    authSlice:authUserSlice,
    favoriteSlice:favoriteMovieSlice
})

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig,rootReducer)
 
const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})


export type AppDispatch = typeof store.dispatch;

export default store