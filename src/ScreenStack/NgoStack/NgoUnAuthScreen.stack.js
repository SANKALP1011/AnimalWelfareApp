import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NgoSignUp from "../../Screens/Authentication/Ngo/NgoSignUp.screen";

const NgoUnAuthStack = createNativeStackNavigator();

const NgoUnAuthScreen = () => {
  return (
    <NgoUnAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NgoUnAuthStack.Screen name="NgoSignUp" component={NgoSignUp} />
    </NgoUnAuthStack.Navigator>
  );
};

export default NgoUnAuthScreen;
