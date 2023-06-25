import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from "react-native";
import react, { useState, useEffect, useContext } from "react";
import {
  getStrayList,
  vaccinateStrayAnimals,
} from "../../../Service/Doctor.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import StrayFood3d from "../../../Assets/StrayFood3d.png";
import Puppy3d from "../../../Assets/Puppy3d.png";
import { AntDesign } from "@expo/vector-icons";
import { DoctorAuthContext } from "../../../Context/doctor.authContext";
import AnimatedLottieView from "lottie-react-native";
export const StrayVacc = ({ navigation }) => {
  const { doctor } = useContext(DoctorAuthContext);
  const [strayList, setStrayList] = useState([]);
  const [loader, showLoader] = useState(false);
  const [error, setError] = useState("");
  const colour = ["#FFB84C", "#FF0060"];
  const image = [StrayFood3d, Puppy3d];

  const getStrayData = async () => {
    showLoader(true);
    try {
      const response = await getStrayList();
      setStrayList(response);
      showLoader(false);
    } catch (err) {
      setError(err);
      showLoader(false);
    }
  };
  const vaccStray = async (stId) => {
    showLoader(true);
    try {
      await vaccinateStrayAnimals(doctor?._id, stId);
      console.log("updateddd");
      showLoader(false);
      Alert.alert(
        "You have successfullt vaccinated the stray animal and updated the status"
      );
    } catch (err) {
      setError(err);
      showLoader(false);
    }
  };
  useEffect(() => {
    getStrayData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headreContainer}>
        <Text style={styles.headreText}>Vaccinate Strays</Text>
      </View>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : (
        <ScrollView>
          <View style={styles.cardContainer}>
            {strayList.map((value, index) => {
              const colourPicker = colour[index % colour.length];
              const imagePicker = image[index % image.length];
              if (!value.isVaccinated) {
                return (
                  <View
                    key={index}
                    style={[
                      styles.strayCardContainer,
                      { backgroundColor: colourPicker },
                    ]}
                  >
                    <Image source={imagePicker} style={styles.strayCardImage} />
                    <View style={styles.strayTextDataContainer}>
                      <Text style={styles.strayText}>
                        Name: {value?.StrayName.toUpperCase()}
                      </Text>
                      <Text style={styles.strayText} numberOfLines={1}>
                        Type: {value?.StrType}
                      </Text>
                      {!value?.isVaccinated ? (
                        <View style={styles.sickContainer}>
                          <Text style={styles.strayText}>Vaccinated:</Text>
                          <AntDesign
                            name="closecircle"
                            size={20}
                            color="#F6F1E9"
                            style={styles.iconContainer}
                          />
                        </View>
                      ) : (
                        <Text></Text>
                      )}
                      {!value?.requiresVetCare ? (
                        <View style={styles.sickContainer}>
                          <Text style={styles.strayText}>Needs help:</Text>
                          <AntDesign
                            name="closecircle"
                            size={20}
                            color="#8DCBE6"
                            style={styles.iconContainer}
                          />
                        </View>
                      ) : (
                        <View style={styles.sickContainer}>
                          <Text style={styles.strayText}>Needs help:</Text>
                          <AntDesign
                            name="checkcircle"
                            size={20}
                            color="#16FF00"
                            style={styles.iconContainer}
                          />
                        </View>
                      )}
                      <Pressable style={styles.buttonContainetr}>
                        <Text
                          style={styles.strayText}
                          onPress={() => {
                            vaccStray(value?._id);
                          }}
                        >
                          Vacc
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                );
              }
              return null;
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreContainer: {
    marginTop: 60,
  },
  headreText: {
    fontSize: 35,
    fontFamily: "font-name=firaBold-Type",
    color: "black",
    marginLeft: 25,
  },
  cardContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  strayCardContainer: {
    width: "90%",
    height: 180,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
    flexDirection: "row",
  },
  strayCardImage: {
    marginTop: 20,
    width: 150,
    height: 120,
    marginLeft: 5,
  },
  strayTextDataContainer: {
    marginLeft: 10,
    marginTop: 25,
  },
  strayText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  doctorLocationText: {
    fontSize: 20,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
    width: 150,
  },
  buttonContainetr: {
    width: 70,
    height: 40,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  sickContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: 20,
  },
});

export default StrayVacc;
