import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
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
    try {
      await fetch(
        "https://animal-welfare-api.herokuapp.com/SignUp",
        postConfig
      ).then((res) => {
        res.json().then((data) => {
          Alert.alert("Signed up");
        });
      });
    } catch (e) {
      Alert.alert(e);
    }
  };

  const getData = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageHolder imgSource={SignUpImage} />
      </View>
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                onChangeText={(name) => setName(name)}
                defaultValue={name}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                onChangeText={(mail) => setEmail(mail)}
                defaultValue={email}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                onChangeText={(pass) => setPassword(pass)}
                defaultValue={password}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Address"
                onChangeText={(addr) => setAddress(addr)}
                defaultValue={address}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <View>
        <Button title="Sign Up" onPress={signUpUser} />
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
  buttonView: {
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
});

export default SignUpScreen;
