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
  Image,
} from "react-native";
import { AppAuthContext } from "../../Context/AuthProvider";
import MiniCard from "../../Components/Minicard";
import { BigCard } from "../../Components/BigCard";
import Report3d from "../../Assets/Report3d.png";
import Nearby3d from "../../Assets/Nearby3d.png";
import Bone3d from "../../Assets/Bone3d.png";
import Money3d from "../../Assets/Money3d.png";
import Adopt3d from "../../Assets/Adopt3d.png";

const appWidth = Dimensions.get("screen").width;
export const UserHomeScreen = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);

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
      <ScrollView horizontal={true}>
        <View style={styles.horizontalScrollBox}>
          <MiniCard
            text={"Report an injured animal"}
            image={Report3d}
            navigation={navigation}
            location="InjuredAnimal"
            color={"#DAE5D0"}
          />
          <MiniCard
            text={"Location Nearby Animal"}
            image={Nearby3d}
            navigation={navigation}
            location="NearByAnimals"
            color="#97DEFF"
          />

          <MiniCard
            text={"Check your Pet Details"}
            image={Bone3d}
            navigation={navigation}
            location="PetDetails"
            color="#655DBB"
          />
          <MiniCard
            text={"Donate to your choice of  ngo"}
            image={Money3d}
            navigation={navigation}
            location="NgoList"
            color="#D5B4B4"
          />
          <MiniCard
            text={"Adopt Animals rescued by Ngo"}
            image={Adopt3d}
            navigation={navigation}
            location="AdoptionList"
            color="#CDE990"
          />
          {/* <MiniCard
            text={"Donate to ngo"}
            image={Money}
            navigation={navigation}
            location="InjuredAnimal"
            color="#D5B4B4"
          />
          <MiniCard
            text={"Adopt Animal"}
            image={Pet}
            navigation={navigation}
            location="InjuredAnimal"
            color="#E5D1FA"
          />
          <MiniCard
            text={"Adopted Animal Details"}
            image={Adopt}
            navigation={navigation}
            location="InjuredAnimal"
            color="#CDE990"
          /> */}
        </View>
      </ScrollView>

      <View style={styles.graphContainer}>
        <Text></Text>
      </View>
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
    marginTop: 30,
  },
  cardContainer: {
    flexDirection: "row",
  },
  horizontalScrollView: {
    marginTop: "7%",
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
    marginBottom: "10%",
    marginLeft: "3%",
  },
  profileSubText: {
    marginTop: "2%",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "font-name=firaBold-Type",
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
    fontFamily: "font-name=firaBold-Type",
  },
  imageContainer: {
    width: 120,
    height: 60,
    marginTop: "20%",
    marginLeft: "30%",
  },
  cardText: {
    fontWeight: "bold",
    fontSize: "17px",
    marginTop: "5%",
    marginLeft: "6%",
  },
  graphContainer: {
    width: "90%",
    height: 300,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    backgroundColor: "#5F264A",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UserHomeScreen;
