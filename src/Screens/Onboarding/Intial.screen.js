import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Initial3d from "../../Assets/Initial3d.png";

const Intial = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={Initial3d} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Animal Welfare App</Text>
          <Text style={styles.subtitle}>
            Made for the love and well being of animals , this app has can make
            a better place for our voiceless creatures.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBFA9",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "font-name=firaBold-Type",
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    fontFamily: "font-name=firaBold-Type",
    opacity: 0.4,
  },
});

export default Intial;
