import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { AuthProvider, AppAuthContext } from "./src/Context/AuthProvider";
import loadFonts from "./src/Fonts/FontLoader";
import AuthenticatedScreen from "./src/ScreenStack/UserStack/AuthenticatedScreen.stack";
import UnAuthenticatedScreen from "./src/ScreenStack/UserStack/UnAuthenticatedScreen.stack";
import {
  DoctorAuthProvider,
  DoctorAuthContext,
} from "./src/Context/doctor.authContext";
import DoctorUnAuthScreen from "./src/ScreenStack/DoctorStack/DoctorUnAuthScreen.stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <DoctorAuthProvider>
        <AppWrapper />
      </DoctorAuthProvider>
    </AuthProvider>
  );
}

function AppWrapper() {
  const { user } = useContext(AppAuthContext);
  const { doctor } = useContext(DoctorAuthContext);
  const [loadFont, setFontLoader] = useState(false);
  useEffect(() => {
    const fontLoader = async () => {
      await loadFonts();
      setFontLoader(true);
    };
    fontLoader();
  }, []);
  if (!loadFont) {
    return (
      <View>
        <Text>Loading the fonts</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {doctor === null ? <DoctorUnAuthScreen /> : <AuthenticatedScreen />}
    </NavigationContainer>
  );
}
