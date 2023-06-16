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
import ImageHolder from "../../../Components/ImageHolder";
import SignUpImage from "../../../Assets/SignUp.png";
import { useContext, useEffect, useState } from "react";
import { doctorSignIn } from "../../../Service/Doctor.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import { DoctorAuthProvider } from "../../../Context/doctor.authContext";

export const DoctorSignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loader, showLoader] = useState(false);

  const { doctorSignup } = useContext(DoctorAuthProvider);

  const signUp = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !number.trim() ||
      !address.trim()
    ) {
      Alert.alert("Please enter the details before signing up !");
    } else {
      try {
        showLoader(true);
        setTimeout(async () => {
          const response = await doctorSignIn(
            name,
            email,
            password,
            number,
            address
          );
          doctorSignup(response);
          showLoader(false);
          Alert.alert("You are signed in successfully");
        }, 2500);
      } catch (e) {
        Alert.alert(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {loader && <Loader source={loaderAnimation} />}
      <View style={styles.ImageContainer}>
        <ImageHolder imgSource={SignUpImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </View>
      <View style={styles.signUpPaper}>
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
                  keyboardType="email-address"
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
                  placeholder="Number"
                  onChangeText={(number) => setNumber(number)}
                  defaultValue={address}
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
        <View style={styles.bView}>
          <TouchableOpacity style={styles.buttonView}>
            <Button title="Sign Up" onPress={signUp} />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Already have an account?
            <Button
              title="Log In"
              onPress={() => navigation.navigate("LogIn")}
            />
          </Text>
        </View>
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
    borderRadius: 10,
    padding: 10,
    borderBottomWidth: 1,
  },
  bView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1%",
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
  signUpPaper: {
    width: "100%",
    height: "100%",
    marginTop: 20,
    backgroundColor: "#D9D7F1",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
  },
  footerContainer: {
    color: "black",
    marginBottom: "105%",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    opacity: 0.5,
  },
});

export default DoctorSignUp;
