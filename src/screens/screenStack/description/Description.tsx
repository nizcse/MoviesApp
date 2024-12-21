import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import useDescription from './useDescription';
import ImageComponent from '~/components/imageComponent/ImageComponent';
import { globalStyles } from '~/constants/globalStyles.style';
import DeviceDimensions from '~/constants/device';
import CustomText from '~/components/customText/CustomText';
import colors from '~/constants/colors';
import CustomButton from '~/components/customButton/CustomButton';

const Description = () => {
  const { params, handlePress, favorites } = useDescription();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ImageComponent
        source={params?.poster ? { uri: params.poster } : undefined}
        style={[
          globalStyles.borderWithRadius,
          styles.image,
        ]}
      />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>
          {params?.title}
        </CustomText>
        <CustomText style={styles.plot}>
          {params?.plot}
        </CustomText>
        <View style={styles.infoRow}>
          <CustomText style={styles.label}>Year of Release:</CustomText>
          <CustomText style={styles.infoText}>{`${params?.year}`}</CustomText>
        </View>
        <View style={styles.infoRow}>
          <CustomText style={styles.label}>Genre:</CustomText>
          <CustomText style={styles.infoText}>{`${params?.genre.map(genre => `${genre}`)}`}</CustomText>
        </View>
      </View>
      <CustomButton
        onPress={handlePress}
        title={!favorites.includes(params?.id as number) ? "Mark as Favorite" : "Mark as Unfavorite"}
        style={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
  },
  image: {
    height: DeviceDimensions.height * 0.45,
    aspectRatio: 0.65,
    borderWidth: 0,
    marginTop: 25,
  },
  detailsContainer: {
    width: '90%',
    marginTop: 30,
  },
  title: {
    width: '65%',
    lineHeight: 30,
    fontSize: 24,
    fontWeight: '700',
    color: colors.blackText,
    textAlign: 'left',
  },
  plot: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: colors.descGray,
    marginVertical: 10,
  },
  infoRow: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DeviceDimensions.width * 0.9,
  },
  label: {
    fontSize: 12,
    textAlign: 'left',
    color: colors.ratingGray,
  },
  infoText: {
    fontSize: 12,
    color: colors.blackText,
  },
  button: {
    height: 45,
    marginVertical: '10%',
    width: '100%',
  },
});

export default Description;
