import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/Screens/Authentication/User/SignUpScreen";
import LogInScreen from "./src/Screens/Authentication/User/LogInScreen";
import UserHomeScreen from "./src/Screens/User/UserHomeScreen";
import InjuredAnimal from "./src/Screens/Animal/UserSide/InjuredAnimal.screen";
import UserDetailScreen from "./src/Screens/User/UserDetailScreen";
import { useContext, useEffect } from "react";
import { AuthProvider, AppAuthContext } from "./src/Context/AuthProvider";
import NearbyAnimals from "./src/Screens/Animal/UserSide/NearbyAnimals";
import PetDetails from "./src/Screens/Animal/UserSide/PetDetails";
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
