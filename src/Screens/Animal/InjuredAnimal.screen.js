import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { AppAuthContext } from "../../Context/AuthProvider";
import { reportInjuredAnimal } from "../../Service/User.service";
import Animal from "../../Assets/InjuredScreen.png";
import ImageHolder from "../../Components/ImageHolder";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const InjuredAnimal = ({ navigation }) => {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [address, setAddress] = useState("");
  const [loader, setLoader] = useState(false);

  const { user, updateUser } = useContext(AppAuthContext);

  const reportAnimal = async () => {
    if (!type.trim() || !condition.trim() || !address.trim()) {
      Alert.alert(
        "Please fill out all the details before reporting the injured animal"
      );
    } else {
      setLoader(true);
      try {
        setTimeout(async () => {
          await reportInjuredAnimal(user._id, type, condition, address);
          setLoader(false);
          Alert.alert("Animal is successfully reported for help");
          setType("");
          setCondition("");
          setAddress("");
        }, 3000);
      } catch (error) {
        setLoader(false);
        Alert.alert("There was issue while reporting the animal");
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <ImageHolder imgSource={Animal} />
        <Text style={styles.headerText}>Report Injured Animal</Text>
      </View>
      <View style={styles.lowerContainer}>
        <ActivityIndicator size="large" color="red" animating={loader} />
        <KeyboardAwareScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Animal Type"
                  value={type}
                  onChangeText={setType}
                  style={styles.inputField}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Animal Condition"
                  value={condition}
                  onChangeText={setCondition}
                  style={styles.inputField}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Animal Address"
                  value={address}
                  onChangeText={setAddress}
                  style={styles.inputField}
                />
              </View>
              <View style={styles.bView}>
                <TouchableOpacity style={styles.buttonView}>
                  <Button onPress={reportAnimal} title="Report" color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>

        <Button
          onPress={() => {
            navigation.navigate("UserHome");
          }}
          title="Back"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
    marginTop: 80,
  },
  lowerContainer: {
    marginTop: 80,
    height: "100%",
    backgroundColor: "#DBDFEA",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    borderBottomWidth: 1,
  },
  bView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    marginBottom: "1%",
  },
  buttonView: {
    width: 130,
    height: 50,
    borderRadius: 15,
    fontWeight: "bolder",
    paddingTop: 5,
    backgroundColor: "black",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
  },
});

export default InjuredAnimal;
