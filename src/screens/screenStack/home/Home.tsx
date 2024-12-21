import { View, TextInput, StyleSheet, FlatList, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import React from 'react';
import { globalStyles } from '~/constants/globalStyles.style';
import colors from '~/constants/colors';
import Icon from '~/assets/images/svg';
import useHome from './useHome';
import CustomText from '~/components/customText/CustomText';
import HomeMovieComponent from './component/HomeMovieComponent';
import ImageComponent from '~/components/imageComponent/ImageComponent';

const Home = () => {
  const { moviesArray, searchQuery, setSearchQuery, loading } = useHome();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={colors.inputGray}
              style={styles.input}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <Icon name="search" height={14} color={colors.searchGray} style={styles.icon} />
          </View>
        }
        data={moviesArray}
        numColumns={2}
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyContainer}>
              <ImageComponent style={styles.emptyImage} />
              <CustomText style={styles.emptyText}>No movies found</CustomText>
            </View>
          ) : (
            <View style={styles.loaderContainer}>
              <ActivityIndicator />
            </View>
          )
        }
        style={styles.list}
        contentContainerStyle={styles.listContentContainer}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <HomeMovieComponent key={item.id} {...item} />}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 5,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.inputGray,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    paddingStart: 20,
    borderRadius: 50,
    fontFamily: 'lexenda_deca',
  },
  icon: {
    padding: 10,
    marginTop: 5,
  },
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
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    alignSelf: 'center',
  },
  listContentContainer: {
    paddingBottom: 20,
    gap: 15,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  columnWrapper: {
    width: '100%',
    gap: 15,
  },
});

export default Home;
