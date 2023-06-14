import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../Screens/Authentication/User/SignUpScreen";
import LogInScreen from "../Screens/Authentication/User/LogInScreen";

const NotLoggedInStack = createNativeStackNavigator();

export const UnAuthenticatedScreen = () => {
  return (
    <NotLoggedInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NotLoggedInStack.Screen name="SignUp" component={SignUpScreen} />
      <NotLoggedInStack.Screen name="LogIn" component={LogInScreen} />
    </NotLoggedInStack.Navigator>
  );
};

export default UnAuthenticatedScreen;
