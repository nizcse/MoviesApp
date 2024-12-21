import { View, Text, StyleSheet, TextStyle, StyleProp } from 'react-native'
import React from 'react'
import { fontMap, fonts } from '~/constants/fonts'
import colors from '~/constants/colors'

const CustomText = ({lineHeight,children,fontFamily='lexenda_deca',fontSize=12,style={},numberOfLines,textAlign="center",fontWeight="400",color=colors.blackText}:{lineHeight?:number;children?:string,fontFamily?:keyof typeof fonts,fontSize?:number,style?:StyleProp<TextStyle>,numberOfLines?:number,textAlign?:"auto"|"left"|"right"|"center"|"justify"|undefined,fontWeight?:"400"|"500"|"600"|"700",color?:string}) => {

    const {textStyle}:{textStyle:TextStyle} = StyleSheet.create({
        textStyle:{
            fontFamily,
            fontSize,
            textAlign,
            fontWeight,
            lineHeight:lineHeight?lineHeight:undefined,
            color
        }
    })
  return (
      <Text numberOfLines={numberOfLines} style={[textStyle,style]}>{children}</Text>
  )
}

export default CustomText