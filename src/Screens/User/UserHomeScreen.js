import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import Dog from "../../Assets/Dog.png";

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
              {user.hasReportedAnimal ? (
                <View>
                  <Text> ✅ </Text>
                </View>
              ) : (
                <View>
                  <Text>Animal Reported : ❌</Text>
                </View>
              )}
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
            style={styles.homeCardContainer}
            onPress={() => {
              navigation.navigate("InjuredAnimal");
            }}
          >
            <View>
              <Text>Report an injured animal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Nearby Animal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <Text>Add Pet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <Text>Add Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView style={{ flex: 0, height: "50" }}>
        <View
          style={[styles.verticalScrolView, { backgroundColor: "#FFA3FD" }]}
        >
          <Text>This is demo</Text>
        </View>
        <View
          style={[styles.verticalScrolView, { backgroundColor: "#DFFFD8" }]}
        >
          <Text>This is demo</Text>
        </View>
        <View
          style={[styles.verticalScrolView, { backgroundColor: "#FFB84C" }]}
        >
          <Text>This is demo</Text>
        </View>
        <View style={[styles.verticalScrolView, { backgroundColor: "black" }]}>
          <Text>This is demo</Text>
        </View>
        <View style={styles.verticalScrolView}>
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
  // homeCardContainer: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "#f0f0f0",
  //   margin: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
    backgroundColor: "#865DFF",
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
    width: 350,
    height: 150,
    marginTop: "20%",
    marginLeft: "5%",
    marginRight: "4%",
    backgroundColor: "#E3DFFD",
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
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  verticalScrolView: {
    marginTop: "7%",
    height: "50%",
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
    flexDirection: "row",
  },
});
export default UserHomeScreen;

{
  /* <View style={styles.container}>
  <ScrollView style={{ flex: 1 }}>
    <View style={styles.horizontalScrollBox}>
      <TouchableOpacity
        style={styles.homeCardContainer}
        onPress={() => {
          navigation.navigate("InjuredAnimal");
        }}
      >
        <View>
          <Text>Report an injured animal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeCardContainer}
        onPress={() => {
          console.log("card clicked");
        }}
      >
        <View>
          <Text>Nearby Animal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeCardContainer}
        onPress={() => {
          console.log("card clicked");
        }}
      >
        <View>
          <Text>Donate</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeCardContainer}
        onPress={() => {
          console.log("card clicked");
        }}
      >
        <Text>Add Pet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeCardContainer}
        onPress={() => {
          console.log("card clicked");
        }}
      >
        <View>
          <Text>Donate</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeCardContainer}
        onPress={() => {
          console.log("card clicked");
        }}
      >
        <Text>Add Pet</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  <ScrollView style={{ flex: 0, width: 200 }}>
    <View style={styles.horizontalScrollBox}>
      <Text>This is demo</Text>
    </View>
    <View style={styles.horizontalScrollBox}>
      <Text>This is demo</Text>
    </View>
    <View style={styles.horizontalScrollBox}>
      <Text>This is demo</Text>
    </View>
    <View style={styles.horizontalScrollBox}>
      <Text>This is demo</Text>
    </View>
    <View style={styles.horizontalScrollBox}>
      <Text>This is demo</Text>
    </View>
  </ScrollView>
</View>

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
  },
  horizontalScrollBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeCardContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#f0f0f0",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
}; */
}
