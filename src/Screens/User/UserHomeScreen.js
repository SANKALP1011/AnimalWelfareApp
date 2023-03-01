import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserHomeScreen = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const data = await AsyncStorage.getItem("user");
    console.log(data);
    const parseData = JSON.parse(data);
    setUser(parseData);
    console.log(user.UserName);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <Text>{user.UserName}</Text>
      <Text>{user._id}</Text>
      <Text>{user.location.formattedAddress}</Text>
      <Text>{user.Email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UserHomeScreen;
