import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import Card from "../../Components/Card";

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topCardView}>
        <Card data={<Text>CARD ONE</Text>} />
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
});

export default SignUpScreen;
