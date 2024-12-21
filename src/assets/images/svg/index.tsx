import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import * as React from 'react';
import {svgName} from './svgName';
import Logo from './Logo.svg'
import Back from './Back.svg'
import HeartFilled from './Heart_filled.svg'
import HeartOutline from './Heart_outline.svg'
import HomeFilled from './Home_filled.svg'
import HomeOutline from './Home_outline.svg'
import HomeFilledBlack from './HomeFilledBlack.svg'
import HeartFilledBlack from './HeartFilledBlack.svg'
import Search from './Search.svg'

interface IconProps {
  name: keyof typeof svgName;
  color?: ColorValue;
  width?: number;
  height?: number;
  fill?: ColorValue;
  stroke?: ColorValue;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
interface IObjectKeys {
  [key: string]: any;
}

const Icon = (props: IconProps) => {
  const icons: IObjectKeys = {
    [svgName.logo]: Logo,
    [svgName.back]: Back,
    [svgName.heartFilled]: HeartFilled,
    [svgName.heartOutline]: HeartOutline,
    [svgName.homeOutline]: HomeOutline,
    [svgName.homeFilled]: HomeFilled,
    [svgName.heartFilledBlack]: HeartFilledBlack,
    [svgName.homeFilledBlack]: HomeFilledBlack,
    [svgName.search]: Search,
  };
  const IconToRender = icons[props?.name] || Logo;
  return <IconToRender {...props} />;
};

export default Icon;