import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "font-name": require("../assets/fonts/font-file.ttf"),
  });
};
export default loadFonts;
