import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import RadioButton from "../../../Components/RadioButton";
import { addPet } from "../../../Service/User.service";
import { MaterialIcons } from "@expo/vector-icons";

export const AddPet = ({ navigation }) => {
  const [name, setName] = useState("");
  const [value, selectedValue] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const data = ["Dog", "Cat", "Other"];
  const handleChoice = (value) => {
    selectedValue(value);
    console.log(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.nearbyHeaderContainer}>
        <Text style={styles.headreText}>Pet Buddy Details</Text>
        <MaterialIcons
          name="pets"
          size={50}
          color="#545B77"
          style={styles.headerPetIcon}
        />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Pet Name.."
            value={name}
            onChangeText={setName}
            style={styles.inputField}
          />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeaderText}>Pet Type</Text>
          <View style={styles.radioButton}>
            <RadioButton
              data={data}
              onSelect={handleChoice}
              customStyles={styles.radioButtonContainer}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Pet Breed.."
            value={breed}
            onChangeText={setBreed}
            style={styles.inputField}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Pet age.."
            value={age}
            onChangeText={setAge}
            style={styles.inputField}
          />
        </View>
      </View>

      <View></View>
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
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headreText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    color: "#750550",
    marginRight: 20,
  },
  headerPetIcon: {
    marginBottom: 10,
  },
  radioContainer: {
    marginTop: 70,
    marginBottom: 70,

    marginLeft: 25,
  },
  radioHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  radioButtonContainer: {
    width: 100,
    height: 50,
    backgroundColor: "#E5E0FF",
    marginRight: 20,
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    marginTop: 0,
  },
  inputContainer: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "90%",
    borderRadius: 10,
    padding: 15,
    borderBottomWidth: 2,
  },
});

export default AddPet;
