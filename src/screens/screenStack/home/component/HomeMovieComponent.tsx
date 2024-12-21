import { Pressable } from 'react-native';
import React from 'react';
import CustomText from '~/components/customText/CustomText';
import DeviceDimensions from '~/constants/device';
import { dynamicStyles, globalStyles } from '~/constants/globalStyles.style';
import ImageComponent from '~/components/imageComponent/ImageComponent';
import colors from '~/constants/colors';
import useHomeMovieComponent from './useHomeMovieComponent';
import { screenStackNavigationRouteNames } from '~/navigation/routeName/screenStackNavigationRouteName';

const HomeMovieComponent = (movie: Movie) => {
  const { navigation } = useHomeMovieComponent();
  return (
    <Pressable
      onPress={() => navigation.navigate(screenStackNavigationRouteNames.DESCRIPTION, movie)}
      style={({ pressed }) => [
        dynamicStyles.buttonStyle({ pressed }),
        globalStyles.borderWithRadius,
        { width: '47%' },
      ]}
    >
      <ImageComponent
        source={{ uri: movie.poster }}
        style={[
          globalStyles.borderWithRadius,
          { height: DeviceDimensions.height * 0.3, borderWidth: 0, margin: 7.5 },
        ]}
      />
      <CustomText
        numberOfLines={1}
        fontSize={16}
        lineHeight={20}
        fontWeight="400"
        textAlign="left"
        style={{ margin: 5 }}
      >
        {movie.title}
      </CustomText>
      <CustomText
        color={colors.ratingGray}
        fontSize={12}
        lineHeight={15}
        fontWeight="400"
        textAlign="left"
        style={{ margin: 5, marginBottom: 10 }}
      >
        {"Rating:" + movie.rating}
      </CustomText>
    </Pressable>
  );
};

export default HomeMovieComponent;
