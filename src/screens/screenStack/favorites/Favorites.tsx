import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import useFavorites from './useFavorites';
import FavoriteMovieComponent from './components/FavoriteMovieComponent';
import ImageComponent from '~/components/imageComponent/ImageComponent';
import CustomText from '~/components/customText/CustomText';
import colors from '~/constants/colors';

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <FlatList
      data={favorites ?? []}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <ImageComponent style={styles.emptyImage} />
          <CustomText style={styles.emptyText}>No Favourite movies</CustomText>
        </View>
      }
      renderItem={({ item }) => <FavoriteMovieComponent id={item} />}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyImage: {
    height: 150,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    color: colors.blackText,
    lineHeight: 20,
  },
});

export default Favorites;
