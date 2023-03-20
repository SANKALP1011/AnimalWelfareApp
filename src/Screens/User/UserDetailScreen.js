import { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import Profile from "../../Assets/Profile.png";
import ProfilePic from "../../Components/ProfilePic";
const appWidth = Dimensions.get("screen").width;
export const UserDetailScreen = ({ navigator }) => {
  //kjhkhkhjkhkjhjkhkjhkjhkjhk
  const { user, updateUser } = useContext(AppAuthContext);
  useEffect(() => {
    updateUser();
  }, []);
  return (
    <View>
      <View style={styles.profileContainer}>
        {user ? (
          <View style={styles.userTopDetailsConrainer}>
            <ProfilePic source={Profile} />
            <Text style={styles.profileText}>{user.UserName}</Text>
            <Text>{user.Email}</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View></View>
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
    backgroundColor: "#9F73AB",
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
  userTopDetailsConrainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  profileText: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "2%",
  },
});
export default UserDetailScreen;
