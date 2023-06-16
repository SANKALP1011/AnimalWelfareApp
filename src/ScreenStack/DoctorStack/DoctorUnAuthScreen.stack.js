import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorSignUp from "../../Screens/Authentication/Doctor/DoctorSignUp.screen";
import DoctorLogIn from "../../Screens/Authentication/Doctor/DoctorLogIn.screen";

const DoctorNotLoggedInStack = createNativeStackNavigator();

const DoctorUnAuthScreen = () => {
  return (
    <DoctorNotLoggedInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DoctorNotLoggedInStack.Screen
        name="DoctorSignUp"
        component={DoctorSignUp}
      />
      <DoctorNotLoggedInStack.Screen
        name="DoctorLogIn"
        component={DoctorLogIn}
      />
    </DoctorNotLoggedInStack.Navigator>
  );
};

export default DoctorUnAuthScreen;
