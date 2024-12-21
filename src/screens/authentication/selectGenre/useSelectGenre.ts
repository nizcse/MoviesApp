import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/core';
import { useAppDispatch } from '~/customHooks/redux/redux';
import { setGenre, setName } from '~/redux/authSlice/authSlice';

const useSelectGenre = () => {
  const {params} = useRoute();
  const dispatch = useAppDispatch()
  const genreArray:string[] = ["Action","Comedy","Drama","Horror","Romance","Sci-Fi"]
  const [selectedGenre,setSelecetedGenre] = useState<string[]>([])
  const handleSubmit = () => {
    dispatch(setName(params))
    dispatch(setGenre(genreArray))
  }
  return {
    genreArray,
    selectedGenre,
    setSelecetedGenre,
    handleSubmit
  }
}

export default useSelectGenre