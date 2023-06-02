import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { getUserDetails } from "../../../Service/User.service";
import react, { useState, useEffect, useContext } from "react";
import { AppAuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import petAnimation from "../../../Animated Assets/Pet.json";
import AnimatedAsset from "../../../Components/AnimatedAsset";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Pet3d from "../../../Assets/PET3D.png";
import MiniCard from "../../../Components/Minicard";

export const PetDetails = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [loader, showLoader] = useState(false);
  const [selectedText, setSelectedText] = useState(false);
  const [showPetData, setShowPetData] = useState(false);
  const getUpdatedUser = async () => {
    try {
      showLoader(true);
      const response = await getUserDetails(user._id);
      setUpdatedUser(response);
      showLoader(false);
    } catch (err) {
      return err;
    }
  };

  const handleSelectedText = () => {
    setSelectedText(!selectedText);
    setShowPetData(!showPetData);
  };
  useEffect(() => {
    getUpdatedUser();
  }, []);
  return (
    <View style={styles.container}>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : updatedUser?.PetDetails.length != 0 ? (
        <View>
          <View style={[styles.headerContainer]}>
            <View style={styles.animatedContainer}>
              <AnimatedAsset
                source={petAnimation}
                style={styles.animatedAsset}
              />
            </View>
          </View>
          <View style={styles.petDataContainer}>
            <Pressable
              onPress={handleSelectedText}
              style={styles.petDataNameConatiner}
            >
              <Text
                style={[
                  styles.petNameText,
                  selectedText && styles.selectedTextStyle,
                ]}
              >
                {updatedUser?.PetDetails[0].Petname}
              </Text>
              <Text style={styles.petNameText}>Johhny</Text>
            </Pressable>
          </View>
          {showPetData && (
            <View>
              <View style={styles.petDataCard}>
                <Image source={Pet3d} style={styles.petCardImage} />
                <View style={styles.petCardTextData}>
                  <Text style={styles.petText}>
                    Breed: {updatedUser?.PetDetails[0].PetBreed}
                  </Text>
                  <Text style={styles.petText}>Age: 3</Text>
                  {updatedUser?.PetDetails[0].Petdoctor === "" ? (
                    <Text style={styles.petText}>Doctor: No</Text>
                  ) : (
                    <Text> {updatedUser?.PetDetails[0].Petdoctor}</Text>
                  )}
                </View>
              </View>
              <View></View>
            </View>
          )}
        </View>
      ) : (
        <View>
          <View style={styles.headerContainer}>
            <View style={styles.animatedContainer}>
              <AnimatedAsset
                source={petAnimation}
                style={styles.animatedAsset}
              />
            </View>
            <Text style={styles.headerText}>Pet Details</Text>
          </View>
          <View style={styles.bottomContainer}>
            <AntDesign name="frowno" size={60} color="#4C0033" />
            <Text style={styles.bottomText}>
              You don't have any pet as of now
            </Text>
            <TouchableOpacity
              style={styles.addButtonContainer}
              onPress={() => {
                navigation.navigate("AddPet");
              }}
            >
              <View>
                <Ionicons name="add-circle" size={30} color="#F8E8EE" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#6d597a",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  animatedContainer: {
    position: "absolute",
    top: "30%",
    left: "37%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
    width: 300,
    height: 300,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  animatedAsset: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  headerText: {
    marginTop: "50%",
    fontSize: 30,
    fontWeight: "bold",
  },
  bottomContainer: {
    marginTop: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    marginTop: 20,
  },
  addButtonContainer: {
    width: 100,
    height: 50,
    marginTop: 50,
    backgroundColor: "#6d597a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  petDataContainer: {
    marginTop: 20,
  },
  petDataNameConatiner: {
    flexDirection: "row",
    marginLeft: 65,
  },
  petNameText: {
    fontSize: 35,
    fontFamily: "font-name=firaBold-Type",
    paddingRight: 70,
  },
  selectedTextStyle: {
    textDecorationColor: "#E57C23",
    textDecorationLine: "underline",
    color: "#9376E0",
  },
  petHeaderProp: {
    width: "100%",
    height: "50%",
    backgroundColor: "#6d597a",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },

  petDataCard: {
    backgroundColor: "#c0a6e7",
    width: "80%",
    height: 150,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginLeft: 40,
    marginTop: 30,
    flexDirection: "row",
  },
  petCardImage: {
    marginTop: 20,
    width: 150,
    height: 120,
    marginLeft: 5,
  },
  petCardTextData: {
    marginLeft: 10,
    marginTop: 40,
  },
  petText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  horizontalCardContainer: {
    width: 30,
  },
});

export default PetDetails;

// get the user
//check if pets
// if no pets , then show the diffrrent ui with no pets ansd all
// no pets , buttok would rdeirecty to the pet ad page
//esle show the same page
// if pets , show the pet details
