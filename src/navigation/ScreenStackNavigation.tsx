import { View, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { screenStackNavigationParams } from './params/screenStackNavigationParams';
import { screenStackNavigationRouteNames } from './routeName/screenStackNavigationRouteName';
import Description from '../screens/screenStack/description/Description';
import BottomTabNavigation from './BottomTabNavigation';
import Icon from '~/assets/images/svg';
import CustomText from '~/components/customText/CustomText';
import colors from '~/constants/colors';

const Stack = createNativeStackNavigator<screenStackNavigationParams>();
const { Navigator, Screen } = Stack;

const ScreenStackNavigation = () => {
  const header = (props: NativeStackHeaderProps) => {
    return (
      <View style={styles.headerContainer}>
        <Icon
          name={'back'}
          style={styles.backIcon}
          onPress={() => props.navigation.pop()}
        />
        <View style={styles.headerTitleContainer}>
          <Icon name={'homeOutline'} />
          <CustomText fontWeight="500" fontSize={20} fontFamily={"inter"}>
            {"  My Movies"}
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <Navigator initialRouteName={screenStackNavigationRouteNames.BOTTOM_TAB}>
      <Screen
        name={screenStackNavigationRouteNames.BOTTOM_TAB}
        options={{ headerShown: false }}
        component={BottomTabNavigation}
      />
      <Screen
        name={screenStackNavigationRouteNames.DESCRIPTION}
        options={{ headerShown: true, header: (props) => header(props) }}
        component={Description}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: colors.borderColor,
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  headerTitleContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default ScreenStackNavigation;
