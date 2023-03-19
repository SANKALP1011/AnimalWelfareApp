import React from "react";
import { StyleSheet, View, Image } from "react-native";

const ProfilePic = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
});

export default ProfilePic;
