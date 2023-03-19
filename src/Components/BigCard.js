import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export const BigCard = ({ navigation, location, text, color }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(location)}>
      <View style={[styles.verticalScrolView, { backgroundColor: color }]}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  verticalScrolView: {
    height: "85%",
    marginBottom: "5%",
    width: "90%",
    marginLeft: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
    flexDirection: "column",
  },
});
