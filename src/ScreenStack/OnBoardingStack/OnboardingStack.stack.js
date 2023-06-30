import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intial from "../../Screens/Onboarding/Intial.screen";

const Onboarding = createNativeStackNavigator();

export const OnboardingStack = () => {
  return (
    <Onboarding.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Onboarding.Screen name="Intial" component={Intial} />
    </Onboarding.Navigator>
  );
};

export default OnboardingStack;
