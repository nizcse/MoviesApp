import { StyleSheet, ViewStyle } from "react-native";
import colors from "./colors";

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  borderWithRadius: {
    borderRadius: 10,
    borderColor: colors.borderColor,
    borderWidth: 2,
  },
});

// Dynamic styles as reusable functions with corrected typing
export const dynamicStyles = {
  buttonStyle: ({ pressed }: { pressed: boolean }): ViewStyle => ({
    opacity: pressed ? 0.7 : 1,
    transform: [{ scale: pressed ? 0.98 : 1 }],
    alignSelf: "center",
  }),
};
