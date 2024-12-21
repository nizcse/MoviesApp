import { View, Text } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { screenStackNavigationParams } from '~/navigation/params/screenStackNavigationParams';
import { useAppDispatch, useAppSelector } from '~/customHooks/redux/redux';
import { setGenre, setName } from '~/redux/authSlice/authSlice';
import { setFavorite, setUnfavorite } from '~/redux/favoritesSlice/favouritesSlice';

const useDescription = () => {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(state=>state.favoriteSlice.favorites)
      const {params} = useRoute<RouteProp<screenStackNavigationParams>>();
      const handlePress = () => {
        !favorites.includes(params?.id as number)
        ?
        dispatch(setFavorite(params?.id))
        :
        dispatch(setUnfavorite(params?.id));
      }
  return {
    params,
    handlePress,favorites
  }
}

export default useDescription