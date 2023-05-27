import { View, Text, StyleSheet, Pressable } from "react-native";
import react, { useState } from "react";

export const RadioButton = ({ data, styles, onSelect }) => {
  const [selected, setSelected] = useState("");
  const handleSelectedValue = (value) => {
    setSelected(value);
    onSelect(value);
  };
  return (
    <View>
      {data.map((item, index) => {
        return (
          <Pressable
            style={styles}
            key={index}
            onPress={() => {
              handleSelectedValue(item);
            }}
          >
            <Text>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default RadioButton;
