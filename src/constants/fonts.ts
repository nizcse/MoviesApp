export type FontMap = {
    [key: string]: string | number; // URL string or local file path (using `require`)
  };
  
  // Define your font map
  export const fontMap: FontMap = {
    'lexenda-deca': require('../assets/fonts/LexendDeca-Regular.ttf'),
    'inter': require('../assets/fonts/Inter-Regular.ttf'),
  };