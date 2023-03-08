import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import Dog from "../../Assets/Dog.png";
const appWidth = Dimensions.get("screen").width;
export const UserHomeScreen = ({ navigation }) => {
  const { user, updateUser } = useContext(AppAuthContext);

  useEffect(() => {
    updateUser();
    console.log(user);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        {user ? (
          <View>
            <View style={styles.userProfile}>
              <Text style={styles.textStyle}>
                Welcome back, {user.UserName}
              </Text>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate("UserDetails");
                }}
              >
                <Text style={styles.text}>Details</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View>
            <ActivityIndicator
              size="large"
              animating={true}
            ></ActivityIndicator>
          </View>
        )}
      </View>
      <ScrollView style={{ flex: 1 }} horizontal={true}>
        <View style={styles.horizontalScrollBox}>
          <TouchableOpacity
            style={[styles.homeCardContainer, { backgroundColor: "#FFEFEF" }]}
            onPress={() => {
              navigation.navigate("InjuredAnimal");
            }}
          >
            <View>
              <Text>Report an injured animal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.homeCardContainer, { backgroundColor: "#DAE5D0" }]}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Nearby Animal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.homeCardContainer, { backgroundColor: "#FFCEFE" }]}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.homeCardContainer, { backgroundColor: "#B8E8FC" }]}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <Text>Add Pet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.homeCardContainer, { backgroundColor: "#D2DAFF" }]}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.homeCardContainer, { backgroundColor: "#FEFBE7" }]}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <Text>Add Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView style={{ width: "100%", flexGrow: 1 }}>
        <View
          style={[styles.verticalScrolView, { backgroundColor: "#EDDBC7" }]}
        >
          <Text>This is demo</Text>
        </View>
        <View
          style={[styles.verticalScrolView, { backgroundColor: "#F8EAD8" }]}
        >
          <Text>This is demo</Text>
        </View>
        <View
          style={[styles.verticalScrolView, { backgroundColor: "#F9F5E7" }]}
        >
          <Text>This is demo</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  horizontalScrollBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
  },
  horizontalScrollView: {
    marginTop: "7%",
  },
  homeCardContainer: {
    width: 180,
    height: 150,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  userDetailsContainer: {
    width: appWidth - 40,
    height: 150,
    marginTop: "20%",
    marginHorizontal: "5%",
    backgroundColor: "#BCCEF8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  userProfile: {
    marginTop: "4%",
    marginBottom: "10%%",
    marginLeft: "3%",
  },
  profileSubText: {
    marginTop: "2%",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  verticalScrolView: {
    height: "60%",
    marginBottom: "10%",
    width: "90%",
    marginLeft: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
    flexDirection: "column",
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "black",
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default UserHomeScreen;
