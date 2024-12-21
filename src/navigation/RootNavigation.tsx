import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { rootNavigationParams } from './params/rootNavigationParams'
import { rootNavigationRouteNames } from './routeName/rootNavigationRouteNames'
import AuthNavigation from './AuthNavigation'
import ScreenStackNavigation from './ScreenStackNavigation'
import { useAppSelector } from '~/customHooks/redux/redux'
const Stack = createNativeStackNavigator<rootNavigationParams>()
const {Navigator,Group,Screen} = Stack

const RootNavigation = () => {
  const {name} = useAppSelector(state=>state.authSlice.user)
  return (
    <NavigationContainer>
        <Navigator initialRouteName={name===""?rootNavigationRouteNames.AUTH:rootNavigationRouteNames.SCREEN_STACK}>
          {
            name===""
            ?
            <Group screenOptions={{ headerShown: false }} >
                <Screen name={rootNavigationRouteNames.AUTH} component={AuthNavigation}/>
            </Group>
            :
            <Group screenOptions={{ headerShown: false }}>
                <Screen name={rootNavigationRouteNames.SCREEN_STACK} component={ScreenStackNavigation} />
            </Group>
          }
        </Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation