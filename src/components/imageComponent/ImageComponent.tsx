import React, { useState } from 'react';
import { StyleProp, ViewStyle, ActivityIndicator, StyleSheet } from 'react-native';
import { Image, ImageContentFit, ImageProps, ImageStyle } from 'expo-image';
import colors from '~/constants/colors';

export interface TAvatar extends Omit<ImageProps, 'source'| 'resizeMode'> {
  source?: string | { uri: string };
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageContentFit | undefined;
}

const ImageComponent = ({
  source,
  style,
  resizeMode = 'cover',
  ...props
}: TAvatar) => {
  const [isLoadingImage, setLoadingImageState] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const onLoadingStart = () => setLoadingImageState(true);
  const onLoadingEnd = () => setLoadingImageState(false);
  const onError = () => setIsError(true);

  return (
    <>
      {isLoadingImage && (
        <ActivityIndicator
          size="small"
          color={colors.gray}
          style={styles.loader}
        />
      )}
      <Image
        {...props}
        source={
          isError || !source
            ? require('../../assets/images/png/Logo.png') // Local placeholder image
            : typeof source === 'string'
            ? { uri: source }
            : source
        }
        placeholder={require('../../assets/images/png/Logo.png')} // Placeholder while loading
        contentFit={resizeMode} // Resizing mode for expo-image
        style={[
          style,
        ]}
        onLoadStart={onLoadingStart}
        onLoadEnd={onLoadingEnd}
        onError={onError}
      />
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default ImageComponent;
