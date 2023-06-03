import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

export const MiniCard = ({
  text,
  navigation,
  location,
  image,
  color,
  id,
  handler,
}) => {
  return (
    <View>
      <Pressable
        style={[styles.homeCardContainer, { backgroundColor: color }]}
        onPress={() => {
          navigation.navigate(location, { id });
          handler;
        }}
      >
        <View>
          <Text style={styles.cardText}>{text}</Text>
          <Image source={image} style={styles.imageContainer} />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  homeCardContainer: {
    width: 170,
    height: 150,
    margin: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 15,
  },
  imageContainer: {
    width: 120,
    height: 95,
    marginTop: "1%",
    marginLeft: "30%",
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: "5%",
    marginLeft: "6%",
    marginBottom: 2,
    fontFamily: "font-name=firaBold-Type",
  },
});

export default MiniCard;
