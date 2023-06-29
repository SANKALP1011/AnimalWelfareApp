import {
  Text,
  View,
  StyleSheet,
  Alert,
  TextInput,
  Pressable,
} from "react-native";
import { addAnimalForAdoption } from "../../../Service/Ngo.service";
import react, { useState, useEffect, useContext } from "react";
import { NGOAuthContext } from "../../../Context/ngo.authContext";
import { addPet } from "../../../Service/User.service";
import { MaterialIcons } from "@expo/vector-icons";
import RadioButton from "../../../Components/RadioButton";
import { Ionicons } from "@expo/vector-icons";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";

export const AddAdoption = ({}) => {
  const { ngo } = useContext(NGOAuthContext);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [loader, showLoader] = useState(false);
  const [error, setError] = useState("");

  const data = ["Dog", "Cat", "Other"];
  const handleChoice = (value) => {
    setType(value);
    console.log(value);
  };
  const addAdoption = async () => {
    showLoader(true);
    try {
      await addAnimalForAdoption(ngo._id, name, type);
      showLoader(false);
      Alert.alert("Animal Adoption List updated");
    } catch (err) {
      showLoader(false);
      setError(err);
    }
  };
  return (
    <View style={styles.container}>
      {loader && <Loader source={loaderAnimation} />}
      <View style={styles.nearbyHeaderContainer}>
        <Text style={styles.headreText}>Add Adoption Animal</Text>
        <MaterialIcons
          name="pets"
          size={50}
          color="#525FE1"
          style={styles.headerPetIcon}
        />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Adoption Animal Name.."
            value={name}
            onChangeText={setName}
            style={styles.inputField}
            placeholderTextColor="#816797"
          />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeaderText}>Animal Type</Text>
          <View style={styles.radioButton}>
            <RadioButton
              data={data}
              onSelect={handleChoice}
              customStyles={styles.radioButtonContainer}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.addButtonContainer} onPress={addAdoption}>
          <Ionicons name="add-circle" size={30} color="#F8E8EE" />
        </Pressable>
      </View>
    </View>
  );
};
export default AddAdoption;

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
    color: "#17594A",
    marginRight: 20,
    fontFamily: "font-name=firaBold-Type",
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
    fontFamily: "font-name=firaBold-Type",
  },
  radioButtonContainer: {
    width: 100,
    height: 50,
    backgroundColor: "#8EAC50",
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
    marginTop: 25,
  },
  inputField: {
    width: "90%",
    borderRadius: 10,
    padding: 15,
    borderBottomWidth: 2,
  },
  inputContainerTwo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 45,
  },
  inputContainerThree: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonContainer: {
    width: 100,
    height: 50,
    marginTop: 50,
    backgroundColor: "#2B2730",
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
});
