import { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import Profile from "../../Assets/Profile.png";
import ProfilePic from "../../Components/ProfilePic";
import Tag from "../../Components/Tag";
const appWidth = Dimensions.get("screen").width;
export const UserDetailScreen = ({ navigator }) => {
  const { user, updateUser } = useContext(AppAuthContext);
  useEffect(() => {
    updateUser();
  }, []);
  return (
    <View>
      {user ? (
        <View>
          <View
            style={[styles.userTopDetailsConrainer, styles.profileContainer]}
          >
            <ProfilePic source={Profile} />
            <Text style={styles.profileText}>{user.UserName}</Text>
            <Text>{user.Email}</Text>
          </View>
          <View style={styles.tagCloud}>
            <Tag text={user.location.formattedAddress} />
            <Tag text={user.location.formattedAddress} />
            <Tag text={user.location.formattedAddress} />
          </View>
        </View>
      ) : (
        <View></View>
      )}

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
    height: "70%",
    backgroundColor: "#9F73AB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  userTopDetailsConrainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "2%",
  },
  tagCloud: {
    flexDirection: "row",
  },
});
export default UserDetailScreen;
