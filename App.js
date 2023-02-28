import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/Screens/Authentication/SignUpScreen";
import LogInScreen from "./src/Screens/Authentication/LogInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const checkS = async () => {
    const user = await AsyncStorage.getItem("user");
    const u = JSON.parse(user);
    console.log(u.UserName);
    if (user) {
      console.log("logged in");
    } else {
      console.log("loggeed out");
    }
  };
  useEffect(() => {
    checkS();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LogIn" component={LogInScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
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
