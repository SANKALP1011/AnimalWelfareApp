import { View, StyleSheet, Text } from "react-native";

export const Tag = ({ text, stylesProp }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={stylesProp}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tagContainer: {
    width: 110,
    height: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#97DEFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
export default Tag;
