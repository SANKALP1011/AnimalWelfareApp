import { View, StyleSheet, Text, Button } from "react-native";

export const Card = ({ data }) => {
  const handlePress = () => {
    console.log("clicked");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>{data}</Text>
      <Button title="demo" onPress={handlePress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
    elevation: 12,
    alignContent: "center",
    justifyContent: "center",
  },
  cardText: {
    marginLeft: 50,
    fontSize: 15,
    fontWeight: "bold",
    color: "#865DFF",
  },
});

export default Card;
