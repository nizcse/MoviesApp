import { useNavigation } from "@react-navigation/core"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useState } from "react"
import colors from "~/constants/colors"
import { authNavigationParams } from "~/navigation/params/authNavigationParams"
import { authNavigationRouteNames } from "~/navigation/routeName/authNavigationRouteName"

const useWelcome = () => {
    const [name, setName] = useState<string>('')
    const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const [placeholder,setPlaceholder] = useState('Your Name')
    const [placeholderColor,setPlaceholderColor] = useState(colors.inputGray)
    const navigation = useNavigation<NativeStackNavigationProp<authNavigationParams>>()
    const handlePress = () => {
        if(name===''||!nameRegex.test(name)) {
            setName('')
            setPlaceholder('Pease Enter Valid Name')
            setPlaceholderColor(colors.error)
        }
        else {
        navigation.navigate(authNavigationRouteNames.SELECT_GENRE,{name})
        }
    }
  return {
    name,
    setName,
    handlePress,
    placeholder,
    setPlaceholder,
    placeholderColor,
    setPlaceholderColor
  }
}

export default useWelcome