import { View, Text, StyleSheet, Pressable } from "react-native";
import react, { useState } from "react";

export const RadioButton = ({ data, customStyles, onSelect }) => {
  const [selected, setSelected] = useState("");
  const handleSelectedValue = (value) => {
    setSelected(value);
    onSelect(value);
  };
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <Pressable
            style={customStyles}
            key={index}
            onPress={() => {
              handleSelectedValue(item);
            }}
          >
            <Text style={styles.textStyle}>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
export default RadioButton;
