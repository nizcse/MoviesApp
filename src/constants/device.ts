import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const DeviceDimensions = {
  width,
  height,

  isPortrait: () => height >= width,

  isLandscape: () => width > height,

  scale: (size:number) => (width / 375) * size, 

  normalizeFont: (size:number) => {
    const scale = width / 375; 
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  },

  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

export default DeviceDimensions;
