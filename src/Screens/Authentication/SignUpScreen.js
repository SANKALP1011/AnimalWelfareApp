import { StyleSheet, View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import SignUpImage from "../../Assets/SignUp.png";

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={SignUpImage} style={styles.signUpImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topCardView: {
    marginTop: 200,
    marginLeft: 30,
    marginRight: 30,
  },
  signUpImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default SignUpScreen;
