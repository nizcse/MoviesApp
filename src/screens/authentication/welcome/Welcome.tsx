import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '~/components/customButton/CustomButton'
import ImageComponent from '~/components/imageComponent/ImageComponent'
import Icon from '~/assets/images/svg'
import { svgName } from '~/assets/images/svg/svgName'

const Welcome = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 30, fontFamily: "lexenda-deca" }}>Welcome</Text>
      <ImageComponent style={{ height: 200, aspectRatio: 1 }} source={''} />
      <Icon name={svgName.logo} width={50} />
      <CustomButton textProps={{}} style={{ width: 100, height: 50 }} title='I am new' />
    </View>
  )
}

export default Welcome