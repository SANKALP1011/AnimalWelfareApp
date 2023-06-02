import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { getNearbyAnimal } from "../../../Service/User.service";
import React, { useEffect, useState, useContext } from "react";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import { AppAuthContext } from "../../../Context/AuthProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DetailModal from "../../../Components/DetailModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import Dog from "../../../Assets/Dog.png";
import Cat from "../../../Assets/Cat.png";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const NearbyAnimals = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
  const [animal, setAnimal] = useState([]);
  const [loader, showLoader] = useState(true);
  const [animalSelected, setAnimalSelected] = useState(null);
  const getNearbyInjuredAnimal = async () => {
    try {
      const response = await getNearbyAnimal(user._id);
      setAnimal(response);
      showLoader(false);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    getNearbyInjuredAnimal();
    console.log(animal);
  }, []);
  const showModal = (animalClicked) => {
    setAnimalSelected(animalClicked);
  };
  const closeModal = () => {
    setAnimalSelected(null);
  };
  const colour = ["#cdb4db", "#ffc8dd"];
  const image = [Dog, Cat];
  return (
    <View style={styles.container}>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : (
        <View>
          <View style={styles.nearbyHeaderContainer}>
            <Text style={styles.headreText}>NEARBY ANIMALS</Text>
            <MaterialCommunityIcons
              name="dog"
              size={50}
              color="#420516"
              style={styles.headerPetIcon}
            />
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <View>
              {animal?.map((value, index) => {
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
                        {value?.UserNamewhoReported.toUpperCase()}
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
                  </View>
                );
              })}
              {/* <DetailModal
                key={animalSelected?._id}
                data={animalSelected}
                visible={animalSelected !== null}
                close={closeModal}
                handleClose={() => {
                  closeModal();
                }}
              /> */}
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
    color: "#3F0071",
    marginRight: 20,
  },
  headerPetIcon: {
    marginBottom: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
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
    color: "#610094",
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
});
export default NearbyAnimals;

/*
  Object {
    "AnimalCondition": "Normal",
    "AnimalLocation": Object {
      "coordinates": Array [
        80.93173,
        26.93105,
      ],
      "formattedAddress": "Hardoi Bypass, Lucknow, UP, IN",
    },
    "AnimalType": "ANIMAL 2",
    "DocterName": "",
    "UserNamewhoReported": "Goku",
    "__v": 0,
    "_id": "646730c8004483cafac048d8",
    "hasDocterArrived": false,
    "hasSeriousInjury": false,
    "isAnimalReported": true,
    "isAnimalSaved": false,
    "isCriticalMedicalCareRequired": false,
  }, */
