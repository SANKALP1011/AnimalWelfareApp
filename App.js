import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/Screens/Authentication/User/SignUpScreen";
import LogInScreen from "./src/Screens/Authentication/User/LogInScreen";
import UserHomeScreen from "./src/Screens/User/UserHomeScreen";
import InjuredAnimal from "./src/Screens/Animal/UserSide/InjuredAnimal.screen";
import UserDetailScreen from "./src/Screens/User/UserDetailScreen";
import { useContext, useEffect, useState } from "react";
import { AuthProvider, AppAuthContext } from "./src/Context/AuthProvider";
import NearbyAnimals from "./src/Screens/Animal/UserSide/NearbyAnimals";
import PetDetails from "./src/Screens/Animal/UserSide/PetDetails";
import AddPet from "./src/Screens/Animal/UserSide/AddPet.screen";
import loadFonts from "./src/Fonts/FontLoader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

function AppWrapper() {
  const { user } = useContext(AppAuthContext);
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user === null ? (
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        ) : (
          <>
            <Stack.Screen name="UserHome" component={UserHomeScreen} />
            <Stack.Screen name="InjuredAnimal" component={InjuredAnimal} />
            <Stack.Screen name="UserDetails" component={UserDetailScreen} />
            <Stack.Screen name="NearByAnimals" component={NearbyAnimals} />
            <Stack.Screen name="PetDetails" component={PetDetails} />
            <Stack.Screen name="AddPet" component={AddPet} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
