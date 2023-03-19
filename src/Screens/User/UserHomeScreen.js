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
import Dog from "../../Assets/Dog.png";
import Money from "../../Assets/Money.png";
import Cat from "../../Assets/Cat.png";
import Pet from "../../Assets/Dog2.png";
import Vet from "../../Assets/Vet.png";
import Adopt from "../../Assets/adopt.png";
import MiniCard from "../../Components/Minicard";

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
          <MiniCard
            text={"Report an injured animal"}
            image={Dog}
            navigation={navigation}
            location="InjuredAnimal"
            color={"#DAE5D0"}
          />
          <MiniCard
            text={"Donate to ngo"}
            image={Money}
            navigation={navigation}
            location="InjuredAnimal"
            color="#D5B4B4"
          />
          <MiniCard
            text={"Nearby Animal"}
            image={Cat}
            navigation={navigation}
            location="InjuredAnimal"
            color="#97DEFF"
          />
          <MiniCard
            text={"Pet Details"}
            image={Pet}
            navigation={navigation}
            location="InjuredAnimal"
            color="#655DBB"
          />
          <MiniCard
            text={"Chose Pet doctor"}
            image={Vet}
            navigation={navigation}
            location="InjuredAnimal"
            color="#E90064"
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
          />
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
});
export default UserHomeScreen;
