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
import { getUserDetails, getPetDetails } from "../../../Service/User.service";
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
import Report from "../../../Assets/Report.png";
import Health3d from "../../../Assets/Health3d.png";

export const PetDetails = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
  const [loader, showLoader] = useState(false);
  const [selectedText, setSelectedText] = useState(false);
  const [showPetData, setShowPetData] = useState(false);
  const [petDetails, setPetDetails] = useState([]);
  const [error, setError] = useState("");

  const getPetData = async () => {
    try {
      showLoader(true);
      const response = await getPetDetails(user._id);
      setPetDetails(response);
      console.log(response);
      showLoader(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleSelectedText = () => {
    setSelectedText(!selectedText);
    setShowPetData(!showPetData);
  };
  useEffect(() => {
    getPetData();
  }, []);
  return (
    <View style={styles.container}>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : petDetails[0]?.length != 0 ? (
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
            {petDetails.map((value, index) => (
              <Pressable
                key={index}
                onPress={handleSelectedText}
                style={styles.petDataNameConatiner}
              >
                <Text
                  style={[
                    styles.petNameText,
                    selectedText && styles.selectedTextStyle,
                  ]}
                >
                  {value.Petname}
                </Text>
                <Text style={styles.petNameText}>Johnny</Text>
              </Pressable>
            ))}
          </View>
          {showPetData && (
            <View>
              {petDetails.map((petDetail, index) => (
                <View key={index} style={styles.petDataCard}>
                  <Image source={Pet3d} style={styles.petCardImage} />
                  <View style={styles.petCardTextData}>
                    <Text style={styles.petText}>
                      Breed: {petDetail.PetBreed}
                    </Text>
                    <Text style={styles.petText}>Age: {petDetail.Age}</Text>
                    {petDetail.Petdoctor === "" ? (
                      <Text style={styles.petText}>Doctor: No</Text>
                    ) : (
                      <Text> {petDetail.Petdoctor}</Text>
                    )}
                    {petDetail.isPetSick ? (
                      <View style={styles.sickContainer}>
                        <Text>Sick:</Text>
                        <AntDesign name="closecircle" size={24} color="red" />
                      </View>
                    ) : (
                      <View style={styles.sickContainer}>
                        <Text style={styles.petText}>Sick:</Text>
                        <AntDesign
                          name="closecircle"
                          size={20}
                          color="#02383C"
                          style={styles.iconContainer}
                        />
                      </View>
                    )}
                  </View>
                </View>
              ))}
              <View style={styles.horizontalCardContainer}>
                <MiniCard
                  text={"Chose Doctor"}
                  image={Report}
                  navigation={navigation}
                  location="InjuredAnimal"
                  color="#F1D4E5"
                />
                <MiniCard
                  text={"Update Health"}
                  image={Health3d}
                  navigation={navigation}
                  location="InjuredAnimal"
                  color="#ECF8F9"
                />
              </View>
              <View style={styles.addButtonContainePet}>
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
    marginTop: 30,
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
    marginTop: 35,
  },
  petText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  horizontalCardContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  addButtonContainePet: {
    justifyContent: "center",
    alignItems: "center",
  },
  sickContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: 25,
  },
});

export default PetDetails;

// get the user
//check if pets
// if no pets , then show the diffrrent ui with no pets ansd all
// no pets , buttok would rdeirecty to the pet ad page
//esle show the same page
// if pets , show the pet details
