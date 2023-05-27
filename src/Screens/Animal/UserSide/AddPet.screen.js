import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RadioButton from "../../../Components/RadioButton";

export const AddPet = ({ navigation }) => {
  const [value, selectedValue] = useState("");

  const data = ["Dog", "Cat", "Other"];
  const handleChoice = (value) => {
    selectedValue(value);
    console.log(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.radioButton}>
        <RadioButton
          data={data}
          styles={styles.radioButtonContainer}
          onSelect={handleChoice}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioButton: {
    flexDirection: "row",
  },
  radioButtonContainer: {
    width: 100,
    height: 50,
    backgroundColor: "blue",
    marginBottom: 20,
  },
});

export default AddPet;
