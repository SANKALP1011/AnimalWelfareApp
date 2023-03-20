import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/Screens/Authentication/User/SignUpScreen";
import LogInScreen from "./src/Screens/Authentication/User/LogInScreen";
import UserHomeScreen from "./src/Screens/User/UserHomeScreen";
import InjuredAnimal from "./src/Screens/Animal/InjuredAnimal.screen";
import UserDetailScreen from "./src/Screens/User/UserDetailScreen";
import { useContext, useEffect, useState } from "react";
import { AuthProvider, AppAuthContext } from "./src/Context/AuthProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}
function AppWrapper() {
  const { user, updateUser } = useContext(AppAuthContext);

  useEffect(() => {
    updateUser();
    console.log(user);
  }, []);

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
