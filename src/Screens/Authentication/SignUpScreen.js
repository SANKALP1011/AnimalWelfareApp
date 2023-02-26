import { StyleSheet, View, Text, TextInput } from "react-native";
import ImageHolder from "../../Components/ImageHolder";
import SignUpImage from "../../Assets/SignUp.png";

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageHolder imgSource={SignUpImage} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="your mail goes here.."
        />
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
    width: "90%",
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  inputField: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default SignUpScreen;
