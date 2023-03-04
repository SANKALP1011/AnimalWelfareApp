import { Text, View, StyleSheet, Button } from "react-native";

export const InjuredAnimal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the injured animal reporting screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("UserHome");
        }}
        title="back"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InjuredAnimal;
