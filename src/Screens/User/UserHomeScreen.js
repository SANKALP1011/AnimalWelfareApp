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
      <ScrollView>
        <View style={styles.cardContainer}>
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
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.bottamCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottamCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <Text>Add Pet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.lastCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <View>
              <Text>Donate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lastCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          >
            <Text>Add Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.userDetailsContainer}>
        {user ? (
          <View>
            <Text>{user.UserName}</Text>
            <Text>{user.Email}</Text>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
  },
  homeCardContainer: {
    width: 180,
    height: 150,
    marginTop: "20%",
    marginLeft: "2%",
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
  bottamCardContainer: {
    width: 180,
    height: 150,
    marginTop: "8%",
    marginLeft: "2%",
    backgroundColor: "#FFFF00",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  lastCardContainer: {
    width: 180,
    height: 150,
    marginTop: "8%",
    marginLeft: "2%",
    backgroundColor: "#E90064",
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
    height: 300,
    marginTop: "1%",
    marginBottom: "15%",
    marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: "#C1EFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  img: {
    width: 10,
    height: 10,
  },
});
export default UserHomeScreen;
