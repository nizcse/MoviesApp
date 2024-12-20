import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { screenStackNavigationParams } from './params/screenStackNavigationParams'
import { screenStackNavigationRouteNames } from './routeName/screenStackNavigationRouteName'
import Description from '../screens/screenStack/description/Description'
import BottomTabNavigation from './BottomTabNavigation'
const Stack = createNativeStackNavigator<screenStackNavigationParams>()
const {Navigator,Screen} = Stack
const ScreenStackNavigation = () => {
  return (
    <Navigator initialRouteName={screenStackNavigationRouteNames.BOTTOM_TAB} screenOptions={{headerShown:false}}>
        <Screen name={screenStackNavigationRouteNames.BOTTOM_TAB} component={BottomTabNavigation} />
        <Screen name={screenStackNavigationRouteNames.DESCRIPTION} component={Description} />
    </Navigator>
  )
}

export default ScreenStackNavigation