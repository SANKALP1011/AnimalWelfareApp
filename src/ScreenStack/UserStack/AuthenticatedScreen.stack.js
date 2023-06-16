import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "../../Screens/User/UserHomeScreen";
import InjuredAnimal from "../../Screens/Animal/UserSide/InjuredAnimal.screen";
import UserDetailScreen from "../../Screens/User/UserDetailScreen";
import NearbyAnimals from "../../Screens/Animal/UserSide/NearbyAnimals";
import PetDetails from "../../Screens/Animal/UserSide/PetDetails";
import AddPet from "../../Screens/Animal/UserSide/AddPet.screen";
import DoctorList from "../../Screens/Animal/UserSide/DoctorList.screen";
import NgoList from "../../Screens/Animal/UserSide/NgoList.screen";
import AdoptionList from "../../Screens/Animal/UserSide/AdoptionList.screen";

const LoggedInStack = createNativeStackNavigator();

export const AuthenticatedScreen = () => {
  return (
    <LoggedInStack.Navigator
      initialRouteName="UserHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoggedInStack.Screen name="UserHome" component={UserHomeScreen} />
      <LoggedInStack.Screen name="InjuredAnimal" component={InjuredAnimal} />
      <LoggedInStack.Screen name="UserDetails" component={UserDetailScreen} />
      <LoggedInStack.Screen name="NearByAnimals" component={NearbyAnimals} />
      <LoggedInStack.Screen name="PetDetails" component={PetDetails} />
      <LoggedInStack.Screen name="AddPet" component={AddPet} />
      <LoggedInStack.Screen name="DoctorList" component={DoctorList} />
      <LoggedInStack.Screen name="NgoList" component={NgoList} />
      <LoggedInStack.Screen name="AdoptionList" component={AdoptionList} />
    </LoggedInStack.Navigator>
  );
};

export default AuthenticatedScreen;
