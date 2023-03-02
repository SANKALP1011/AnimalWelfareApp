import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";

export const UserHomeScreen = () => {
  const data = useContext(AppAuthContext);

  // const getUser = () => {
  //   const data = AsyncStorage.getItem("user");
  //   const parseData = JSON.parse(data);
  //   setUser(parseData);
  // };
  useEffect(() => {
    console.log(data.UserName);
    console.log(data._id);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            style={styles.homeCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          ></TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.bottamCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.bottamCardContainer}
            onPress={() => {
              console.log("card clicked");
            }}
          ></TouchableOpacity>
        </View>
      </ScrollView>

      <View>
        <View style={styles.userDetailsContainer}>
          <Text>{data.UserName}</Text>
          <Text>{data._id}</Text>
          <Text>{data.location.formattedAddress}</Text>
          <Text>{data.Email}</Text>
        </View>
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
});
export default UserHomeScreen;
