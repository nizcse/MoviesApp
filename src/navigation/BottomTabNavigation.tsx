import { View, StyleSheet } from 'react-native';
import React from 'react';
import { BottomTabHeaderProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bottomTabNavigationRouteNames } from './routeName/bottomTabNavigationRouteNames';
import { bottomTabNavigationParams } from './params/bottomTabNavigationParams';
import Home from '../screens/screenStack/home/Home';
import Favorites from '../screens/screenStack/favorites/Favorites';
import Icon from '~/assets/images/svg';
import colors from '~/constants/colors';
import CustomText from '~/components/customText/CustomText';

const Tab = createBottomTabNavigator<bottomTabNavigationParams>();
const { Navigator, Screen } = Tab;

const BottomTabNavigation = () => {
  const header = (props:BottomTabHeaderProps) => {
    const { name } = props.route;
    return (
      <View style={styles.headerContainer}>
        <Icon name={name === 'home' ? 'homeOutline' : 'heartOutline'} />
        <CustomText style={styles.headerText}>
          {name === 'home' ? '  My Movies' : '  Favorite Movies'}
        </CustomText>
      </View>
    );
  };

  return (
    <Navigator
      initialRouteName={bottomTabNavigationRouteNames.HOME}
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: colors.blackText,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Screen
        options={{
          tabBarIcon: (props) => (
            <Icon name={props.focused ? 'homeFilled' : 'homeFilledBlack'} />
          ),
          header: (props) => header(props),
        }}
        name={bottomTabNavigationRouteNames.HOME}
        component={Home}
      />
      <Screen
        options={{
          tabBarIcon: (props) => (
            <Icon name={props.focused ? 'heartFilled' : 'heartFilledBlack'} />
          ),
          header: (props) => header(props),
        }}
        name={bottomTabNavigationRouteNames.FAVORITES}
        component={Favorites}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: colors.borderColor,
  },
  headerText: {
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'inter',
  },
  tabBar: {
    paddingTop: 10,
    height: 60,
  },
});

export default BottomTabNavigation;
