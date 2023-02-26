import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImageHolder from "../../Components/ImageHolder";
import SignUpImage from "../../Assets/SignUp.png";
import { useState } from "react";

export const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const postConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      UserName: name,
      Email: email,
      Password: password,
      Address: address,
    }),
  };

  const signUpUser = async () => {
    if (name != null || email != null || password != null || address != null) {
      Alert.alert("Please enter the details before signing up !");
    } else {
      try {
        await fetch(
          "https://animal-welfare-api.herokuapp.com/SignUp",
          postConfig
        ).then((res) => {
          res
            .json()
            .then((data) => {
              Alert.alert("Signed up");
            })
            .catch((e) => {
              Alert.alert("EMPTYYYYY");
            });
        });
      } catch (e) {
        Alert.alert(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageHolder imgSource={SignUpImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </View>
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                onChangeText={(name) => setName(name)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                onChangeText={(mail) => setEmail(mail)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                onChangeText={(pass) => setPassword(pass)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Address"
                onChangeText={(addr) => setAddress(addr)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <View style={styles.bView}>
        <TouchableOpacity style={styles.buttonView}>
          <Button title="Sign Up" onPress={signUpUser} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  ImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
    elevation: 12,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  inputContainer: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  bView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  buttonView: {
    width: 130,
    height: 50,
    borderRadius: 15,
    fontWeight: "bolder",
    paddingTop: 5,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
  },
});

export default SignUpScreen;
