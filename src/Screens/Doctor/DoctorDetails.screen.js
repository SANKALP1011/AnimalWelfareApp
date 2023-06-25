import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { DoctorAuthContext } from "../../Context/doctor.authContext";
import { useContext } from "react";
import Profile from "../../Assets/Profile.png";
import ProfilePic from "../../Components/ProfilePic";
import { FontAwesome5, Foundation, FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { getDoctorDetails } from "../../Service/Doctor.service";
import Loader from "../../Components/Loader";
import loaderAnimation from "../../Animated Assets/Loader.json";

export const DoctorDetailScreen = ({ navigation }) => {
  const { doctor } = useContext(DoctorAuthContext);
  const [doctorData, setdoctorData] = useState(null);
  const [loader, showLoader] = useState(true);
  const [cacheData, setCacheData] = useState({});

  const CACHE_EXPIRATION_TIME = 10000;

  const getUpdatedDocto = async () => {
    try {
      const cacheKey = doctor._id;
      const cachedData = cacheData[cacheKey];

      if (
        cachedData &&
        Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME
      ) {
        // Use cached data if it exists and time is not expired
        setdoctorData(cachedData.data);
        showLoader(false);
      } else {
        const response = await getDoctorDetails(doctor._id);
        setdoctorData(response);
        showLoader(false);
        // Cache the fetched data with a new timestapn if the data is updatd fro  the user side
        setCacheData((prevCacheData) => ({
          ...prevCacheData,
          [cacheKey]: { data: response, timestamp: Date.now() },
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUpdatedDocto();
  }, []);

  return (
    <View style={styles.container}>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : (
        <View>
          <View
            style={[styles.userTopDetailsConrainer, styles.profileContainer]}
          >
            <ProfilePic source={Profile} />
            <Text style={styles.profileText}>{doctorData?.DocterName}</Text>
            <Text style={{ fontFamily: "font-name=firaBold-Type" }}>
              {doctorData?.DocterEmail}
            </Text>
          </View>
          <View style={styles.UserPartionContainer}>
            <View style={[styles.partionChildContainer, styles.firstChild]}>
              <FontAwesome5 name="dog" size={30} color="#C70A80" />
              <Text style={styles.iconText}>
                {doctorData?.No_Of_Animal_Saved.length || 0}
              </Text>
            </View>
            <View style={[styles.partionChildContainer]}>
              <FontAwesome5 name="user-check" size={30} color="#C70A80" />
              <Text style={styles.iconText}>Doctor</Text>
            </View>
            <View style={[styles.partionChildContainer, styles.lastChild]}>
              <Foundation name="sheriff-badge" size={30} color="#C70A80" />
              <Text style={styles.iconText}>0</Text>
            </View>
          </View>
          <View style={styles.detailsBox}>
            <View style={styles.detailsContainer}>
              <FontAwesome name="phone" size={40} color="black" />
              <Text style={styles.detailsText}>
                {doctorData?.DocterNumber || "No Number is there..."}
              </Text>
            </View>
            <View style={styles.detailsContainer}>
              <MaterialIcons name="pets" size={40} color="black" />
              <Text style={styles.detailsText}>
                {doctorData?.PetDetails?.Petname || "No pet exists"}
              </Text>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("DoctorHomeScreen");
              }}
            >
              <Text style={styles.text}>Home</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: "100%",
    height: 350,
    backgroundColor: "#99FEFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  userTopDetailsConrainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "2%",
    fontFamily: "font-name=firaBold-Type",
    color: "black",
  },
  UserPartionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  partionChildContainer: {
    flex: 1,
    height: 50,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  firstChild: {
    borderRightWidth: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  lastChild: {
    borderLeftWidth: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  iconText: {
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "font-name=firaBold-Type",
    color: "black",
  },
  detailsBox: {
    backgroundColor: "#99FEFF",
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 80,
    marginTop: 50,
  },
  detailsText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    fontFamily: "font-name=firaBold-Type",
    color: "black",
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "black",
    borderRadius: 15,
    marginLeft: 140,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
});
export default DoctorDetailScreen;
