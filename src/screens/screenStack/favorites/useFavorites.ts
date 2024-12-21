import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '~/customHooks/redux/redux'

const useFavorites = () => {
    const favorites = useAppSelector(state=>state?.favoriteSlice?.favorites)
  return {
    favorites
  }
}

export default useFavorites