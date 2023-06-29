import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NgoHome from "../../Screens/Ngo/NgoHome.screen";
import AddStray from "../../Screens/Animal/NgoSide/AddStray.screen";
import StrayStatus from "../../Screens/Animal/NgoSide/StrayStatus.screen";
import AddAdoption from "../../Screens/Animal/NgoSide/AddAdoption.screen";
import NgoDetails from "../../Screens/Ngo/NgoDetails.screen";

const NgoAuthStack = createNativeStackNavigator();

const NgoAuthScreen = () => {
  return (
    <NgoAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NgoAuthStack.Screen name="NgoHome" component={NgoHome} />
      <NgoAuthStack.Screen name="AddStray" component={AddStray} />
      <NgoAuthStack.Screen name="StrayStatus" component={StrayStatus} />
      <NgoAuthStack.Screen name="AddAdoption" component={AddAdoption} />
      <NgoAuthStack.Screen name="NgoDetails" component={NgoDetails} />
    </NgoAuthStack.Navigator>
  );
};

export default NgoAuthScreen;
