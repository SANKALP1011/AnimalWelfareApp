import { View, StyleSheet, Text, ScrollView, Touchable } from "react-native";
import { getNearbyAnimal } from "../../../Service/User.service";
import React, { useEffect, useState, useContext } from "react";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import { AppAuthContext } from "../../../Context/AuthProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DetailModal from "../../../Components/DetailModal";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NearbyAnimals = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
  const [animal, setAnimal] = useState([]);
  const [loader, showLoader] = useState(true);
  const [animalSelected, setAnimalSelected] = useState(null);
  const getNearbyInjuredAnimal = async () => {
    try {
      const response = await getNearbyAnimal(user._id);
      setAnimal(response);
      console.log(response);
      showLoader(false);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    getNearbyInjuredAnimal();
  }, []);
  const showModal = (animalClicked) => {
    setAnimalSelected(animalClicked);
  };
  const closeModal = () => {
    setAnimalSelected(null);
  };
  const colour = ["#CFA5B4", "#C98BB9", "#846B8A"];
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
          <ScrollView>
            <View>
              {animal?.map((value, index) => {
                const colourPicker = colour[index % colour.length];
                return (
                  <TouchableOpacity onPress={() => showModal(value)}>
                    <View
                      key={value._id}
                      style={[
                        styles.dataCard,
                        { backgroundColor: colourPicker },
                      ]}
                    >
                      <Text>{value.UserNamewhoReported}</Text>
                      <Text>{value.AnimalCondition}</Text>
                      <Text>{value.AnimalType}</Text>
                      {value.isAnimalSaved ? (
                        <Text>SAVEDDD</Text>
                      ) : (
                        <Text>nit svaedddd</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
              <DetailModal
                data={animalSelected}
                visible={animalSelected !== null}
                close={closeModal}
              />
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
  dataCard: {
    width: 350,
    height: 150,
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
