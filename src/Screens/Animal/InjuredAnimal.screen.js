import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AppAuthContext } from "../../Context/AuthProvider";
import { reportInjuredAnimal } from "../../Service/User.service";

export const InjuredAnimal = ({ navigation }) => {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [address, setAddress] = useState("");

  const { user, updateUser } = useContext(AppAuthContext);

  useEffect(() => {
    console.log(user);
  }, "");

  const reportAnimal = async () => {
    try {
      await reportInjuredAnimal(user._id, type, condition, address);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>This is the injured animal reporting screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("UserHome");
        }}
        title="Back"
      />
      <View>
        <TextInput
          placeholder="Animal Type"
          value={type}
          onChangeText={setType}
        />
      </View>
      <View>
        <TextInput
          placeholder="Animal Condition"
          value={condition}
          onChangeText={setCondition}
        />
      </View>
      <View>
        <TextInput
          placeholder="Animal Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <Button onPress={reportAnimal} title="Report" />
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
