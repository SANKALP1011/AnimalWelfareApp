import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorHome from "../../Screens/Doctor/DoctorHome.screen";
import ProvideHelp from "../../Screens/Animal/DoctorSide/ProvideHelp.screen";
import PetPatient from "../../Screens/Animal/DoctorSide/PetPatient.screen";
import StrayVacc from "../../Screens/Animal/DoctorSide/StrayVacc.screen";
import DoctorDetailScreen from "../../Screens/Doctor/DoctorDetails.screen";
const DoctorAuthStack = createNativeStackNavigator();
const DoctorAuthScreen = () => {
  return (
    <DoctorAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DoctorAuthStack.Screen name="DoctorHomeScreen" component={DoctorHome} />
      <DoctorAuthStack.Screen name="ProvideHelp" component={ProvideHelp} />
      <DoctorAuthStack.Screen name="PetPatient" component={PetPatient} />
      <DoctorAuthStack.Screen name="StrayVacc" component={StrayVacc} />
      <DoctorAuthStack.Screen
        name="DoctorDetailScreen"
        component={DoctorDetailScreen}
      />
    </DoctorAuthStack.Navigator>
  );
};

export default DoctorAuthScreen;
