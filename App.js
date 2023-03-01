import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/Screens/Authentication/User/SignUpScreen";
import LogInScreen from "./src/Screens/Authentication/User/LogInScreen";
import UserHomeScreen from "./src/Screens/User/UserHomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  const checkAuth = async () => {
    const data = await AsyncStorage.getItem("user");
    const parsedData = JSON.parse(data);
    setUser(parsedData);
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    // <UserHomeScreen />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user === null ? (
          <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        ) : (
          <Stack.Screen name="LogIn" component={LogInScreen}></Stack.Screen>
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
