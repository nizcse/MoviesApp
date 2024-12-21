import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { screenStackNavigationParams } from '~/navigation/params/screenStackNavigationParams'

const useHomeMovieComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<screenStackNavigationParams>>()

  return {
    navigation
  }
}

export default useHomeMovieComponent