import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { bottomTabNavigationRouteNames } from './routeName/bottomTabNavigationRouteNames'
import { bottomTabNavigationParams } from './params/bottomTabNavigationParams'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/screenStack/home/Home'
import Favorites from '../screens/screenStack/favorites/Favorites'
const Tab = createBottomTabNavigator<bottomTabNavigationParams>()
const {Navigator,Screen} = Tab
const BottomTabNavigation = () => {
  return (
    <Navigator initialRouteName={bottomTabNavigationRouteNames.HOME} screenOptions={{headerShown:false}}>
        <Screen name={bottomTabNavigationRouteNames.HOME} component={Home} />
        <Screen name={bottomTabNavigationRouteNames.FAVORITES} component={Favorites} />
    </Navigator>
  )
}

export default BottomTabNavigation