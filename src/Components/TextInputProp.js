import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-web";

export const TextInputProp = ({ text, placeholderText, keybordType }) => {
  const [value, setValue] = useState("");
  return (
    <View>
      <TextInput
        placeholder={placeholderText}
        value={value}
        onChangeText={(text) => setValue(text)}
        keybordType={keybordType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
    elevation: 12,
  },
});
export default TextInputProp;
