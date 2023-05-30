import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "font-name-bold-Type": require("../Assets/Fonts/Inconsolata/static/Inconsolata_Condensed-Black.ttf"),
    "font-name-light-Type": require("../Assets/Fonts/Inconsolata/static/Inconsolata_Condensed-Light.ttf"),
    "font-name-extraLight-Type": require("../Assets/Fonts/Inconsolata/static/Inconsolata_Expanded-ExtraLight.ttf"),
    "font-name=firaBold-Type": require("../Assets/Fonts/Fira_Sans/FiraSans-ExtraBold.ttf"),
  });
};
export default loadFonts;
