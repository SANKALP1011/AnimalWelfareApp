import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorHome from "../../Screens/Doctor/DoctorHome.screen";

const DoctorAuthStack = createNativeStackNavigator();
const DoctorAuthScreen = () => {
  return (
    <DoctorAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DoctorAuthStack.Screen name="DoctorHomeScreen" component={DoctorHome} />
    </DoctorAuthStack.Navigator>
  );
};

export default DoctorAuthScreen;
