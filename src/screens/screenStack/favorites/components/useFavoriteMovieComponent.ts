import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { callMovieDataById } from '~/utils/api';
import { useNavigation } from '@react-navigation/native';
import { screenStackNavigationParams } from '~/navigation/params/screenStackNavigationParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const useFavoriteMovieComponent = (id:number) => {
    const navigation = useNavigation<NativeStackNavigationProp<screenStackNavigationParams>>()
    const [movieData,setMovieData] = useState<Movie>()
    const fetchMovieDataById = async () => {
        const params: CallApiParams = {
              method: 'get',
              subUri: '',
              query:String(id),
            };
        
            try {
              const response: Movie = await callMovieDataById(params);
              setMovieData(response);
            } catch (error) {
              console.error(error, 'error in api');
            }
    }
    useEffect(()=>{
        fetchMovieDataById();
    },[])
  return {
    movieData,
    navigation
  }
}

export default useFavoriteMovieComponent