import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { authNavigationParams } from './params/authNavigationParams'
import { authNavigationRouteNames } from './routeName/authNavigationRouteName'
import Welcome from '../screens/authentication/welcome/Welcome'
import SelectGenre from '../screens/authentication/selectGenre/SelectGenre'
const Stack = createNativeStackNavigator<authNavigationParams>()
const {Navigator,Screen} = Stack
const AuthNavigation = () => {
  return (
    <Navigator initialRouteName={authNavigationRouteNames.WELCOME} screenOptions={{headerShown:false}}>
        <Screen name={authNavigationRouteNames.WELCOME} component={Welcome} />
        <Screen name={authNavigationRouteNames.SELECT_GENRE} component={SelectGenre} />
    </Navigator>
  )
}

export default AuthNavigation