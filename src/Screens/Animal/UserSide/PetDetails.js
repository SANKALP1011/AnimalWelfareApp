import { View, Text, StyleSheet } from "react-native";
import { getUserDetails } from "../../../Service/User.service";
import react, { useState, useEffect, useContext } from "react";
import { AppAuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import petAnimation from "../../../Animated Assets/Pet.json";
import AnimatedAsset from "../../../Components/AnimatedAsset";

export const PetDetails = ({ naviagation }) => {
  const { user } = useContext(AppAuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [loader, showLoader] = useState(false);
  const getUpdatedUser = async () => {
    try {
      showLoader(true);
      const response = await getUserDetails(user._id);
      setUpdatedUser(response);
      showLoader(false);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    getUpdatedUser();
  }, []);
  return (
    <View style={styles.container}>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : updatedUser?.PetDetails !== null ? (
        <View>
          <View style={styles.headerContainer}>
            <View style={styles.animatedContainer}>
              <AnimatedAsset
                source={petAnimation}
                style={styles.animatedAsset}
              />
            </View>
            <Text style={styles.headerText}>Pet Details</Text>
          </View>
          <View>
            <Text>No pet here</Text>
          </View>
        </View>
      ) : (
        <Text>pet is there</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#6d597a",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  animatedContainer: {
    position: "absolute",
    top: "30%",
    left: "37%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
    width: 300,
    height: 300,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  animatedAsset: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  headerText: {
    marginTop: "50%",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default PetDetails;

// get the user
//check if pets
// if no pets , then show the diffrrent ui with no pets ansd all
// no pets , buttok would rdeirecty to the pet ad page
//esle show the same page
// if pets , show the pet details
