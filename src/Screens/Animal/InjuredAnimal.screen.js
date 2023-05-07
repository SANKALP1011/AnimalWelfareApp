import { Text, View, StyleSheet, Button, TextInput } from "react-native";

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
      <View>
        <TextInput />
      </View>
      <View>
        <TextInput />
      </View>
      <View>
        <TextInput />
      </View>
      <View>
        <TextInput />
      </View>
    </View>
    // add all the fields of the animal to be reported
    // work with the wireframe
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
