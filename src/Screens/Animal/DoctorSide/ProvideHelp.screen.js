import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import {
  getNearbyInjuredAnimal,
  provideAnimalHelp,
} from "../../../Service/Doctor.service";
import { DoctorAuthContext } from "../../../Context/doctor.authContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Fox3d from "../../../Assets/Fox3d.png";
import NearbyDog3d from "../../../Assets/NearbyDog3d.png";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";

export const ProvideHelp = ({ navigation }) => {
  const { doctor } = useContext(DoctorAuthContext);
  const [nearbyAnimal, setNearbyAnimal] = useState([]);
  const [loader, showLoader] = useState(false);
  const [error, setError] = useState("");

  const getNearByData = async () => {
    showLoader(true);
    try {
      const respone = await getNearbyInjuredAnimal(doctor._id);
      setNearbyAnimal(respone);
      showLoader(false);
    } catch (err) {
      setError(err);
      showLoader(false);
    }
  };

  const updateRescueStatus = async (aniId) => {
    showLoader(true);
    try {
      console.log(aniId);
      const respone = await provideAnimalHelp(doctor._id, aniId);
      showLoader(false);
      Alert.alert("You have rescued the animal");
    } catch (err) {
      setError(err);
      showLoader(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getNearByData();
  }, []);

  const colour = ["#F2BE22", "#A7ECEE"];
  const image = [Fox3d, NearbyDog3d];
  return (
    <View style={styles.container}>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : (
        <View>
          <View style={styles.nearbyHeaderContainer}>
            <Text style={styles.headreText}>Rescue Animals</Text>
            <MaterialCommunityIcons
              name="dog"
              size={50}
              color="#420516"
              style={styles.headerPetIcon}
            />
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <View>
              {nearbyAnimal?.map((value, index) => {
                const colourPicker = colour[index % colour.length];
                const imagePicker = image[index % image.length];
                return (
                  <View
                    key={value?._id}
                    style={[styles.dataCard, { backgroundColor: colourPicker }]}
                  >
                    <View style={styles.picContainer}>
                      <Image style={styles.picStyle} source={imagePicker} />
                      <Text style={styles.headerCardText}>
                        {value?.AnimalType.toUpperCase()}
                      </Text>
                      <Text numberOfLines={1} style={styles.locationText}>
                        {value?.AnimalLocation.formattedAddress}
                      </Text>
                    </View>
                    <View style={styles.tablularcontainer}>
                      <View style={styles.row}>
                        <Text style={styles.header}>Condition</Text>
                        <Text style={styles.header}>Doctor</Text>
                        <Text style={styles.header}>Saved</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <Text style={[styles.cell, { fontSize: 15 }]}>
                        {value?.AnimalCondition}
                      </Text>
                      {value?.hasDocterArrived ? (
                        <AntDesign
                          name="checkcircle"
                          size={30}
                          color="Green"
                          style={styles.cell}
                        />
                      ) : (
                        <Entypo
                          name="circle-with-cross"
                          size={30}
                          color="#FB2576"
                          style={styles.cell}
                        />
                      )}
                      {value?.isAnimalSaved ? (
                        <AntDesign
                          name="checkcircle"
                          size={30}
                          color="Green"
                          style={styles.cell}
                        />
                      ) : (
                        <Entypo
                          name="circle-with-cross"
                          size={30}
                          color="#FB2576"
                          style={styles.cell}
                        />
                      )}
                    </View>
                    <Pressable
                      style={styles.buttonContainetr}
                      onPress={() => {
                        updateRescueStatus(value?._id);
                      }}
                    >
                      <Text style={styles.ngoText}>Saved?</Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nearbyHeaderContainer: {
    marginTop: 75,
    borderBottomWidth: 5,
    borderBottomColor: "#867070",
    width: "100%",
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  headreText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    color: "#090580",
    marginRight: 15,
    fontFamily: "font-name=firaBold-Type",
  },
  headerPetIcon: {
    marginBottom: 10,
  },
  scrollViewContainer: {
    paddingBottom: 200,
  },
  dataCard: {
    width: 350,

    marginLeft: 15,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  picContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  picStyle: {
    width: 70,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  headerCardText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 6,
    color: "#191825",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.5,
    color: "black",
  },
  tablularcontainer: {
    padding: 16,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    textAlign: "center",
  },
  ngoText: {
    fontSize: 15,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
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
    marginLeft: 134,
    marginBottom: 10,
  },
});

export default ProvideHelp;
