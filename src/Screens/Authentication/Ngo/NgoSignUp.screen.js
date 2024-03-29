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
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImageHolder from "../../../Components/ImageHolder";
import { useContext, useEffect, useState } from "react";
import { ngoSignUp } from "../../../Service/Ngo.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import { NGOAuthContext } from "../../../Context/ngo.authContext";
import Company3d from "../../../Assets/Company3d.png";

export const NgoSignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [loader, showLoader] = useState(false);

  const { ngoSignup } = useContext(NGOAuthContext);

  const signUp = async () => {
    if (!name.trim() || !password.trim() || !address.trim()) {
      Alert.alert("Please enter the details before signing up !");
    } else {
      try {
        showLoader(true);
        setTimeout(async () => {
          const response = await ngoSignUp(name, password, address);
          ngoSignup(response);
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
        <ImageHolder imgSource={Company3d} />
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
        <View style={styles.bView}>
          <Pressable style={styles.buttonView} onPress={signUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
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

    fontFamily: "font-name=firaBold-Type",
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
  },
  buttonView: {
    width: 100,
    height: 40,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signUpPaper: {
    width: "100%",
    height: "100%",
    marginTop: 20,
    backgroundColor: "#FFBDF7",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
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
    fontFamily: "font-name=firaBold-Type",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
});

export default NgoSignUp;
