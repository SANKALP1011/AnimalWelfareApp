import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/Screens/Authentication/User/SignUpScreen";
import LogInScreen from "./src/Screens/Authentication/User/LogInScreen";
import UserHomeScreen from "./src/Screens/User/UserHomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { AuthProvider, AppAuthContext } from "./src/Context/AuthProvider";

const Stack = createNativeStackNavigator();
export default function App() {
  const user = useContext(AppAuthContext);
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user === null ? (
            <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
          ) : (
            <Stack.Screen
              name="UserHome"
              component={UserHomeScreen}
            ></Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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
