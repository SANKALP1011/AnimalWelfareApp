import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NgoHome from "../../Screens/Ngo/NgoHome.screen";

const NgoAuthStack = createNativeStackNavigator();

const NgoAuthScreen = () => {
  return (
    <NgoAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NgoAuthStack.Screen name="NgoHome" component={NgoHome} />
    </NgoAuthStack.Navigator>
  );
};

export default NgoAuthScreen;
