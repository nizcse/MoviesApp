import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '~/components/customButton/CustomButton';
import Icon from '~/assets/images/svg';
import { svgName } from '~/assets/images/svg/svgName';
import CustomText from '~/components/customText/CustomText';
import colors from '~/constants/colors';
import { globalStyles } from '~/constants/globalStyles.style';
import useWelcome from './useWelcome';

const Welcome = () => {
  const {
    name,
    setName,
    handlePress,
    placeholder,
    placeholderColor,
    setPlaceholder,
    setPlaceholderColor,
  } = useWelcome();

  return (
    <View style={styles.container}>
      <Icon name={svgName.logo} width={40} height={45} style={styles.logo} />
      <View style={styles.welcomeTextContainer}>
        <CustomText fontWeight="700" fontSize={24} fontFamily="inter">
          Welcome to My Movies
        </CustomText>
        <CustomText fontSize={16} color={colors.textGray}>
          Let's get to know you!
        </CustomText>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={[
            globalStyles.borderWithRadius,
            styles.textInput,
          ]}
        />
        <CustomButton
          onPress={handlePress}
          width="90%"
          textProps={{}}
          style={styles.button}
          title="Next"
        />
      </View>
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
  welcomeTextContainer: {
    marginTop: '50%',
    gap: '10%',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
    gap: '10%',
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    paddingStart: 20,
    fontFamily: 'lexenda_deca',
  },
  button: {
    width: '100%',
    height: 45,
  },
});

export default Welcome;
