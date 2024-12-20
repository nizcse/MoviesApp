import { useFonts } from "expo-font";

export const useCustomFonts = (fontMap: FontMap) => {
    const [loaded, error] = useFonts(fontMap);
  
    if (error) {
      console.error('Font loading error: ', error);
    }
  
    return loaded;
  };