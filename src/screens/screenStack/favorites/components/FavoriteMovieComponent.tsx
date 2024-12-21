import { View, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '~/constants/globalStyles.style';
import ImageComponent from '~/components/imageComponent/ImageComponent';
import useFavoriteMovieComponent from './useFavoriteMovieComponent';
import CustomText from '~/components/customText/CustomText';
import colors from '~/constants/colors';
import CustomButton from '~/components/customButton/CustomButton';
import { screenStackNavigationRouteNames } from '~/navigation/routeName/screenStackNavigationRouteName';

const FavoriteMovieComponent = ({ id }: { id: number }) => {
  const { movieData, navigation } = useFavoriteMovieComponent(id);

  return (
    <View style={[globalStyles.borderWithRadius, styles.container]}>
      <ImageComponent
        source={movieData?.poster ? { uri: movieData.poster } : undefined}
        style={[globalStyles.borderWithRadius, styles.image]}
      />
      <View style={styles.infoContainer}>
        <View>
          <CustomText
            lineHeight={20}
            fontSize={16}
            fontWeight="700"
            fontFamily="inter"
            color={colors.blackText}
            textAlign="left"
            style={styles.title}
          >
            {movieData?.title}
          </CustomText>
          <CustomText
            numberOfLines={4}
            fontSize={12}
            lineHeight={15}
            textAlign="left"
            color={colors.ratingGray}
            style={styles.text}
          >
            {`${movieData?.genre.map((genre) => `${genre}`)} | ${movieData?.year}`}
          </CustomText>
          <CustomText
            numberOfLines={4}
            fontSize={12}
            lineHeight={15}
            textAlign="left"
            color={colors.ratingGray}
            style={styles.text}
          >
            {movieData?.plot}
          </CustomText>
        </View>
        <CustomButton
          onPress={() =>
            navigation.navigate(screenStackNavigationRouteNames.DESCRIPTION, movieData as Movie)
          }
          style={styles.button}
          title="View Details"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  image: {
    width: '30%',
    aspectRatio: 0.65,
    borderWidth: 0,
    margin: 7.5,
  },
  infoContainer: {
    width: '60%',
    margin: 5,
    justifyContent: 'space-between',
  },
  title: {
    width: '65%',
  },
  text: {
    marginVertical: 0,
  },
  button: {
    alignSelf: 'flex-end',
    marginBottom: 5,
    padding: 5,
    paddingVertical: 2,
  },
});

export default FavoriteMovieComponent;
