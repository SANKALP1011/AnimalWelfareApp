import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export const MiniCard = ({ text, navigation, location, image, color }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.homeCardContainer, { backgroundColor: color }]}
        onPress={() => {
          navigation.navigate(location);
        }}
      >
        <View>
          <Text style={styles.cardText}>{text}</Text>
          <Image source={image} style={styles.imageContainer} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  homeCardContainer: {
    width: 180,
    height: 150,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  imageContainer: {
    width: 120,
    height: 60,
    marginTop: "20%",
    marginLeft: "30%",
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: "5%",
    marginLeft: "6%",
  },
});

export default MiniCard;
