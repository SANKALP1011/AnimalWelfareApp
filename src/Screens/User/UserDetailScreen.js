import { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import Profile from "../../Assets/Profile.png";
import ProfilePic from "../../Components/ProfilePic";
import { BigCard } from "../../Components/BigCard";
import { FontAwesome5, Foundation } from "@expo/vector-icons";

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
          <View style={styles.UserPartionContainer}>
            <View style={[styles.partionChildContainer, styles.firstChild]}>
              <FontAwesome5 name="dog" size={30} color="#3A1078" />
            </View>
            <View style={[styles.partionChildContainer]}>
              <FontAwesome5 name="user-check" size={30} color="#3A1078" />
            </View>
            <View style={[styles.partionChildContainer, styles.lastChild]}>
              <Foundation name="sheriff-badge" size={30} color="#3A1078" />
            </View>
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
    height: 350,
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
  UserPartionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  partionChildContainer: {
    flex: 1,
    height: 50,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  firstChild: {
    borderRightWidth: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  lastChild: {
    borderLeftWidth: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
export default UserDetailScreen;
