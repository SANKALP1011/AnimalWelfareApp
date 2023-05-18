import { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Pressable } from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import Profile from "../../Assets/Profile.png";
import ProfilePic from "../../Components/ProfilePic";
import { BigCard } from "../../Components/BigCard";
import { FontAwesome5, Foundation, FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const appWidth = Dimensions.get("screen").width;
export const UserDetailScreen = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
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
              {user.animalReported.length ? (
                <Text style={styles.iconText}>
                  {user.animalReported.length}
                </Text>
              ) : (
                <Text>0</Text>
              )}
            </View>
            <View style={[styles.partionChildContainer]}>
              <FontAwesome5 name="user-check" size={30} color="#3A1078" />
              <Text style={styles.iconText}>User</Text>
            </View>
            <View style={[styles.partionChildContainer, styles.lastChild]}>
              <Foundation name="sheriff-badge" size={30} color="#3A1078" />
              <Text style={styles.iconText}>0</Text>
            </View>
          </View>
          <View style={styles.detailsBox}>
            <View style={styles.detailsContainer}>
              <FontAwesome name="phone" size={40} color="black" />
              {user.Number ? (
                <Text style={styles.detailsText}>{user.Number}</Text>
              ) : (
                <Text style={styles.detailsText}>No Number is there...</Text>
              )}
            </View>
            <View style={styles.detailsContainer}>
              <MaterialIcons name="pets" size={40} color="black" />
              {user.PetDetails && user.PetDetails.Petname ? (
                <Text style={styles.detailsText}>
                  {user.PetDetails.Petname}
                </Text>
              ) : (
                <Text style={styles.detailsText}>No pet exists</Text>
              )}
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("UserHome");
              }}
            >
              <Text style={styles.text}>Home</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>...loadig</Text>
        </View>
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
  iconText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  detailsBox: {
    backgroundColor: "#9F73AB",
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 80,
    marginTop: 50,
  },
  detailsText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "black",
    borderRadius: 15,
    marginLeft: 140,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default UserDetailScreen;
