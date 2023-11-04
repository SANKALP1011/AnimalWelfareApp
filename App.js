import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { AuthProvider, AppAuthContext } from "./src/Context/user.authContext";
import loadFonts from "./src/Fonts/FontLoader";
import AuthenticatedScreen from "./src/ScreenStack/UserStack/AuthenticatedScreen.stack";
import UnAuthenticatedScreen from "./src/ScreenStack/UserStack/UnAuthenticatedScreen.stack";
import {
  DoctorAuthProvider,
  DoctorAuthContext,
} from "./src/Context/doctor.authContext";
import { NGOAuthProvider, NGOAuthContext } from "./src/Context/ngo.authContext";
import DoctorUnAuthScreen from "./src/ScreenStack/DoctorStack/DoctorUnAuthScreen.stack";
import DoctorAuthScreen from "./src/ScreenStack/DoctorStack/DoctorAuthScreen.stack";
import NgoUnAuthScreen from "./src/ScreenStack/NgoStack/NgoUnAuthScreen.stack";
import NgoAuthScreen from "./src/ScreenStack/NgoStack/NgoAuthScreen.stack";
import OnboardingStack from "./src/ScreenStack/OnBoardingStack/OnboardingStack.stack";

export default function App() {
  return (
    <AuthProvider>
      <DoctorAuthProvider>
        <NGOAuthProvider>
          <AppWrapper />
        </NGOAuthProvider>
      </DoctorAuthProvider>
    </AuthProvider>
  );
}

function AppWrapper() {
  const { user } = useContext(AppAuthContext);
  const { doctor } = useContext(DoctorAuthContext);
  const { ngo } = useContext(NGOAuthContext);
  const [loadFont, setFontLoader] = useState(false);
  useEffect(() => {
    const fontLoader = async () => {
      await loadFonts();
      setFontLoader(true);
    };
    fontLoader();
    console.log(ngo);
  }, []);
  if (!loadFont) {
    return (
      <View>
        <Text>Loading the fonts</Text>
      </View>
    );
  }
  return (
    // <NavigationContainer>
    //   {user === null ? <UnAuthenticatedScreen /> : <AuthenticatedScreen />}
    // </NavigationContainer>
    // <NavigationContainer>
    //   {doctor === null ? <DoctorUnAuthScreen /> : <DoctorAuthScreen />}
    // </NavigationContainer>
    <NavigationContainer>
      {ngo === null ? <UnAuthenticatedScreen /> : <AuthenticatedScreen />}
    </NavigationContainer>
    // <NavigationContainer>
    //   <OnboardingStack />
    // </NavigationContainer>
  );
}
