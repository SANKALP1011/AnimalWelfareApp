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
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImageHolder from "../../../Components/ImageHolder";
import SignUpImage from "../../../Assets/SignUp.png";
import { useState } from "react";

export const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, showLoader] = useState(false);

  const postConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Email: email,
      Password: password,
    }),
  };

  const logInUser = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Please enter your email and password!");
    } else {
      showLoader(true);
      setTimeout(async () => {
        try {
          await fetch(
            "https://animal-welfare-api.herokuapp.com/LogIn",
            postConfig
          ).then((res) => {
            if (!res.ok) {
              showLoader(false);
              Alert.alert(
                "Sorry , This user does not exist in our database. Please check that you are writing correct mail and password before logging in."
              );
            } else {
              res.json().then((data) => {
                showLoader(false);
                Alert.alert("You are successfully logged in !");
              });
            }
          });
        } catch (err) {
          console.log(err);
        }
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageHolder imgSource={SignUpImage} />
      </View>
      <ActivityIndicator size="large" color="red" animating={loader} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Log In</Text>
      </View>
      <View style={styles.loginPaperContainer}>
        <KeyboardAwareScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
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
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
        <View style={styles.bView}>
          <TouchableOpacity style={styles.buttonView}>
            <Button title="Log In" onPress={logInUser} />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Don't have an account?
            <Button
              title="SignUp"
              onPress={() => navigation.navigate("SignUp")}
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
    fontSize: 40,
    color: "#3A1078",
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
    borderBottomWidth: 2,
  },
  bView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
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
  loginPaperContainer: {
    width: "100%",
    height: "100%",
    marginTop: 20,
    backgroundColor: "#FFE5F1",
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
    marginBottom: "120%",
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

export default LogInScreen;
