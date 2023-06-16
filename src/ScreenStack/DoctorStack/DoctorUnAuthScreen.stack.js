import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorSignUp from "../../Screens/Authentication/Doctor/DoctorSignUp.screen";
import DoctorLogIn from "../../Screens/Authentication/Doctor/DoctorLogIn.screen";

const DoctorUnAuthStack = createNativeStackNavigator();

const DoctorUnAuthScreen = () => {
  return (
    <DoctorUnAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DoctorUnAuthStack.Screen name="DoctorSignUp" component={DoctorSignUp} />
      <DoctorUnAuthStack.Screen name="DoctorLogIn" component={DoctorLogIn} />
    </DoctorUnAuthStack.Navigator>
  );
};

export default DoctorUnAuthScreen;
