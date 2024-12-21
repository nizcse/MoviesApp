import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from '~/components/customText/CustomText';
import { svgName } from '~/assets/images/svg/svgName';
import Icon from '~/assets/images/svg';
import useSelectGenre from './useSelectGenre';
import CustomButton from '~/components/customButton/CustomButton';
import { globalStyles } from '~/constants/globalStyles.style';
import DeviceDimensions from '~/constants/device';

const SelectGenre = () => {
  const { genreArray, selectedGenre, setSelecetedGenre, handleSubmit } = useSelectGenre();
  
  return (
    <View style={styles.container}>
      <Icon name={svgName.logo} width={40} height={45} style={styles.logo} />
      <View style={styles.headerContainer}>
        <CustomText fontWeight="700" fontSize={24} fontFamily="inter" style={styles.headerText}>
          {"Select Your Favorite \n Genres"}
        </CustomText>
      </View>
      <FlatList
        data={genreArray}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        style={styles.flatList}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => {
          const isSelected = selectedGenre.includes(item);
          return (
            <CustomButton
              onPress={() => {
                if (!isSelected) {
                  setSelecetedGenre((prev) => [...prev, item]);
                } else {
                  setSelecetedGenre((prev) => [
                    ...prev.filter((_, index) => index !== prev.indexOf(item)),
                  ]);
                }
              }}
              withBorder={!isSelected}
              style={styles.genreButton}
              key={index}
              title={item}
              textProps={{ fontSize: 14 }}
            />
          );
        }}
      />
      <CustomButton
        onPress={handleSubmit}
        title={selectedGenre.length === 0 ? "Skip" : "Next"}
        style={styles.submitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    top: '10%',
  },
  headerContainer: {
    marginTop: '50%',
    gap: '10%',
  },
  headerText: {
    lineHeight: 29,
  },
  listContainer: {
    gap: 10,
    padding: 10,
    marginTop: 35,
  },
  flatList: {
    width: '80%',
    alignSelf: 'center',
  },
  columnWrapper: {
    width: '38%',
    flex: 1,
  },
  genreButton: {
    height: 40,
    width: null,
    paddingHorizontal: 0,
    marginHorizontal: 3,
  },
  submitButton: {
    height: 45,
    marginBottom: '10%',
  },
});

export default SelectGenre;
