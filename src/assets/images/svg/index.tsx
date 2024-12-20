import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import * as React from 'react';
import {svgName} from './svgName';
import Logo from './Logo.svg'

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
  };
  const IconToRender = icons[props?.name] || Logo;
  return <IconToRender {...props} />;
};

export default Icon;