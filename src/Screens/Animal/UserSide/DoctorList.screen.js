import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from "react-native";
import react, { useState, useEffect, useContext } from "react";
import { getDoctorList, chosePetDoctor } from "../../../Service/User.service";
import { useTheme } from "@react-navigation/native";
import Doctor3d from "../../../Assets/Doctor3D.png";
import FemaleDoc3D from "../../../Assets/FemaleDoc3D.png";
import { useRoute } from "@react-navigation/native";
import { AppAuthContext } from "../../../Context/user.authContext";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";

export const DoctorList = ({}) => {
  const { user } = useContext(AppAuthContext);
  const [doctor, setDoctors] = useState([]);
  const [loader, showLoader] = useState(false);
  const [error, setError] = useState("");
  const colour = ["#B2A4FF", "#B9E9FC"];
  const image = [Doctor3d, FemaleDoc3D];

  const getAllDoctors = async () => {
    try {
      const response = await getDoctorList();
      setDoctors(response);
    } catch (err) {
      setError(err);
    }
  };
  const choseDoctor = async (did) => {
    try {
      showLoader(true);
      await chosePetDoctor(user._id, did);
      showLoader(false);
      Alert.alert("You have successfully chose the doctor for your pet");
    } catch (err) {
      showLoader(false);
      setError(err);
      console.log(err);
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headreContainer}>
        <Text style={styles.headreText}>Doctors</Text>
      </View>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : (
        <ScrollView>
          <View style={styles.cardContainer}>
            {doctor.map((value, index) => {
              const colourPicker = colour[index % colour.length];
              const imagePicker = image[index % image.length];
              return (
                <View
                  key={index}
                  style={[
                    styles.doctorCardContainer,
                    { backgroundColor: colourPicker },
                  ]}
                >
                  <Image source={imagePicker} style={styles.doctorCardImage} />
                  <View style={styles.doctorTextDataContainer}>
                    <Text style={styles.doctorText}>
                      Name: {value?.DocterName.toUpperCase()}
                    </Text>
                    <Text style={styles.doctorText}>
                      NO: {value?.DocterNumber}
                    </Text>
                    <Text numberOfLines={1} style={styles.doctorLocationText}>
                      {value?.DocterLocation?.formattedAddress}
                    </Text>
                    <Pressable
                      style={styles.buttonContainetr}
                      onPress={() => {
                        choseDoctor(value?._id);
                      }}
                    >
                      <Text style={styles.doctorText}>Chose</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreContainer: {
    marginTop: 60,
  },
  headreText: {
    fontSize: 35,
    fontFamily: "font-name=firaBold-Type",
    color: "black",
    marginLeft: 25,
  },
  cardContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  doctorCardContainer: {
    width: "90%",
    height: 180,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
    flexDirection: "row",
  },
  doctorCardImage: {
    marginTop: 20,
    width: 150,
    height: 120,
    marginLeft: 5,
  },
  doctorTextDataContainer: {
    marginLeft: 10,
    marginTop: 25,
  },
  doctorText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  doctorLocationText: {
    fontSize: 20,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
    width: 150,
  },
  buttonContainetr: {
    width: 70,
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
});
export default DoctorList;

// {
//   "DocterEmail": "gokudc@gmail.com",  show this
//   "DocterLocation": Object {
//     "coordinates": Array [
//       80.9957,
//       26.87303,
//     ],
//     "formattedAddress": "Polytechnic Chauraha, Lucknow, UP 226016, IN",  show this
//   },
//   "DocterName": "Dr Goku",  // show this
//   "DocterNumber": 12326728282,  // show this
//   "DocterPassword": "abc123456",
//   "NearByAnimal": Array [
//     Object {
//       "AnimalCondition": "Bleeding",
//       "AnimalLocation": Object {
//         "coordinates": Array [
//           80.99333,
//           26.88668,
//         ],
//         "formattedAddress": ", Lucknow, UP 226016, IN",
//       },
//       "AnimalType": "Cat",
//       "DocterName": "",
//       "UserNamewhoReported": "Tiger",
//       "__v": 0,
//       "_id": "647709c9b5551827b5fa73bc",
//       "hasDocterArrived": false,
//       "hasSeriousInjury": false,
//       "isAnimalReported": true,
//       "isAnimalSaved": false,
//       "isCriticalMedicalCareRequired": false,
//     },
//   ],
//   "No_Of_Animal_Saved": Array [],
//   "PatientPetId": "",
//   "__v": 0,
//   "_id": "6394b48f5714a2bb0fcf63c1",
//   "hasDocterArrivedAtLocation": false,
//   "hasDocterSavedAnimal": false,
//   "isDocterAvailaible": true,
//   "isDocterOnline": true,
// },
