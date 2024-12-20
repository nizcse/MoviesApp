import { View, StyleSheet, ViewStyle, StyleProp, TextStyle, FlexAlignType, Pressable } from 'react-native'
import React from 'react'
import CustomText from '../customText/CustomText';
import { fonts } from '~/constants/fonts';
import colors from '~/constants/colors';

const CustomButton = ({children,title,onPress,style,textProps,withBorder=false,alignSelf="center"}:{children?:React.JSX.Element;title:string;onPress?:()=>void;style?:ViewStyle;textProps?:{children?:string,fontFamily?:keyof typeof fonts,fontSize?:number,style?:StyleProp<TextStyle>,numberOfLines?:number,textAlign?:"auto"|"left"|"right"|"center"|"justify"|undefined,fontWeight?:"400"|"500"|"600"|"700"},withBorder?:boolean;alignSelf?:"auto" | FlexAlignType | undefined}) => {
    const {buttonStyle,primaryStyle,borderStyle}:{buttonStyle:ViewStyle,primaryStyle:ViewStyle,borderStyle:ViewStyle} = StyleSheet.create({
        buttonStyle:{
            alignItems:'center',
            justifyContent:"center",
            borderRadius:10,
        },
        primaryStyle:{
            backgroundColor:colors.button,
        },
        borderStyle:{
            backgroundColor:colors.white,
            borderWidth:1,
            borderColor:colors.borderColor
        }
    })
  return (
    <Pressable style={({pressed})=>[{opacity:pressed?0.7:1,transform:[{scale:pressed?0.98:1}]},{alignSelf}]} onPress={onPress&& onPress}>
        {!withBorder?
        <View style={[primaryStyle,buttonStyle,style]}>
        <CustomText fontSize={14}  {...textProps}>
            {title}
        </CustomText>
        </View>
        :
        <View style={[borderStyle,buttonStyle,style]}>
        <CustomText fontSize={14} color={colors.blackText}  {...textProps}>
            {title}
        </CustomText>
        </View>
}
    </Pressable>
  )
}

export default CustomButton