import { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
const appWidth = Dimensions.get("screen").width;
export const UserDetailScreen = ({ navigator }) => {
  const { user, updateUser } = useContext(AppAuthContext);
  useEffect(() => {
    updateUser();
  }, []);
  return (
    <View>
      <View style={styles.profileContainer}>
        {user ? (
          <View>
            <Text>{user.UserName}</Text>
            <Text>{user.Email}</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        <Text>This is details text</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#BCCEF8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
export default UserDetailScreen;
