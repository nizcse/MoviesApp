import { View, Text, StatusBar } from 'react-native'
import React, { useEffect }  from 'react'
import RootNavigation from './src/navigation/RootNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { globalStyles } from './src/constants/globalStyles.style'
import * as SplashScreen from 'expo-splash-screen'
import { useCustomFonts } from '~/customHooks/useCustomFonts/useCustomFonts'
import { fontMap } from '~/constants/fonts'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import store from 'src/redux/store'
import { Provider } from 'react-redux'


SplashScreen.preventAutoHideAsync();
export const persister = persistStore(store)
const App = () => {
  const fontsLoaded = useCustomFonts(fontMap);

  useEffect(() => {
    if (fontsLoaded) {
      
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }
  
  return (
    <SafeAreaProvider style={globalStyles.flex}>
      <StatusBar />
      <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
      <RootNavigation />
      </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App