import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import {
  getPetPatientDetails,
  providePetCheck,
  updatePetHealthCard,
} from "../../../Service/Doctor.service";
import { DoctorAuthContext } from "../../../Context/doctor.authContext";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Adopt3d from "../../../Assets/Adopt3d.png";
import AnimatedAsset from "../../../Components/AnimatedAsset";
import petAnimation from "../../../Animated Assets/Pet.json";
import HealthCard3d from "../../../Assets/HealthCard3d.png";
import Card3d from "../../../Assets/Card3d.png";

export const PetPatient = ({ navigation }) => {
  const { doctor } = useContext(DoctorAuthContext);
  const [petPatientData, setPetPatientData] = useState();
  const [loader, showLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [healthModal, setHealthModal] = useState(false);
  const [error, setError] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [dose, setDose] = useState("");
  const [exercise, setExercise] = useState("");
  const [diet, setDiet] = useState("");
  const [next, setNext] = useState("");
  const [vaccineCount, setVaccinecCount] = useState("");
  const [vaccineDoseLeft, setVaccineDoseLeft] = useState("");
  const [rabbiesVaccine, setRabbiesVaccien] = useState("");
  const [immunityVacc, setImmVacc] = useState("");
  const [wormVacc, setWormVacc] = useState("");
  const [nextCheckUp, setNextCheckUp] = useState("");

  // const openModal = () => {
  //   setModalVisible(true);
  // };

  const closeModal = () => {
    setModalVisible(false);
    setHealthModal(false);
  };

  const handleCloseModal = () => {
    closeModal();
  };
  const getPatientDetails = async () => {
    showLoader(true);
    try {
      const respone = await getPetPatientDetails(doctor._id);
      setPetPatientData(respone);
      showLoader(false);
    } catch (err) {
      setError(err);
      showLoader(false);
    }
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    showLoader(true);

    try {
      await providePetCheck(
        doctor._id,
        medicineName,
        dose,
        exercise,
        diet,
        next
      );
    } catch (err) {
      setError(err);
    } finally {
      setMedicineName("");
      setDose("");
      setExercise("");
      setDiet("");
      setNext("");
      setModalVisible(false);
    }
  };

  const handleHealthData = async (e) => {
    e.preventDefault();
    showLoader(true);
    try {
      await updatePetHealthCard(
        doctor._id,
        vaccineCount,
        vaccineDoseLeft,
        rabbiesVaccine,
        immunityVacc,
        nextCheckUp
      );
    } catch (err) {
      setError(err);
    } finally {
      setVaccinecCount("");
      setVaccineDoseLeft("");
      setRabbiesVaccien("");
      setImmVacc("");
      setWormVacc("");
      setNextCheckUp("");
      setHealthModal(false);
      showLoader(false);
    }
  };

  return (
    <View style={styles.conainer}>
      {loader && <Loader source={loaderAnimation} />}
      <View style={[styles.headerContainer]}>
        <View style={styles.animatedContainer}>
          <AnimatedAsset source={petAnimation} style={styles.animatedAsset} />
        </View>
      </View>
      <View style={styles.PatientCardContiainer}>
        <View style={styles.patinetImageContainer}>
          <Image source={Adopt3d} style={styles.patientCardImage} />
        </View>
        <View style={styles.patientCardData}>
          <Text style={styles.cardText}>Name: {petPatientData?.Petname}</Text>
          <Text style={styles.cardText}>
            Parent: {petPatientData?.PetParent}
          </Text>
          <Text style={styles.cardText}>Type: {petPatientData?.Pettype}</Text>
          <Text style={styles.cardText}>Breed: {petPatientData?.PetBreed}</Text>
          {petPatientData?.isPetSick ? (
            <View style={styles.sickContainer}>
              <Text style={styles.cardText}>Sick:</Text>
              <AntDesign
                name="checkcircle"
                size={20}
                color="#E90064"
                style={styles.iconContainer}
              />
            </View>
          ) : (
            <View style={styles.sickContainer}>
              <Text style={styles.cardText}>Sick:</Text>
              <AntDesign
                name="closecircle"
                size={20}
                color="#E90064"
                style={styles.iconContainer}
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.bottomCardContainer}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={[styles.bottomCardLeft, { backgroundColor: "#F6F54D" }]}>
            <View style={styles.bottomCradImageContainer}>
              <Image source={HealthCard3d} style={styles.bottomCardImage} />
            </View>

            <Text style={styles.bootomCardText}>Provide Checkup</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setHealthModal(true);
          }}
        >
          <View
            style={[styles.bottomCardRight, { backgroundColor: "#FF4949" }]}
          >
            <View style={styles.bottomCradImageContainer}>
              <Image source={Card3d} style={styles.bottomCardImage} />
            </View>
            <Text style={styles.bootomCardText}>Update Vaccine</Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        style={styles.buttonContainetr}
        onPress={() => {
          navigation.navigate("DoctorHomeScreen");
        }}
      >
        <Text style={styles.cardText}>Back</Text>
      </Pressable>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        style={styles.modalBox}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Medicine Name"
              value={medicineName}
              onChangeText={setMedicineName}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Dose"
              value={dose}
              onChangeText={setDose}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Exercise"
              value={exercise}
              onChangeText={setExercise}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Diet"
              value={diet}
              onChangeText={setDiet}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Next"
              value={next}
              onChangeText={setNext}
              placeholderTextColor="black"
            />
            <Pressable style={styles.modalButton} onPress={handleModalSubmit}>
              <Text style={styles.cardText}>Update</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        visible={healthModal}
        animationType="slide"
        transparent
        style={styles.modalBox}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Number of vaccine given"
              value={vaccineCount}
              onChangeText={setVaccinecCount}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Number of doses left"
              value={vaccineDoseLeft}
              onChangeText={setVaccineDoseLeft}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Status of Rabbies Vaccine"
              value={rabbiesVaccine}
              onChangeText={setRabbiesVaccien}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Status of Immunity Vaccine"
              value={immunityVacc}
              onChangeText={setImmVacc}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Status of Worm Vaccine"
              value={wormVacc}
              onChangeText={setWormVacc}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Next check up date"
              value={nextCheckUp}
              onChangeText={setNextCheckUp}
              placeholderTextColor="black"
            />
            <Pressable style={styles.modalButton} onPress={handleHealthData}>
              <Text style={styles.cardText}>Update</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#31E1F7",
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
    top: "37%",
    left: "37%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
    width: 300,
    height: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  animatedAsset: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  PatientCardContiainer: {
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
    flexDirection: "row",
    backgroundColor: "#525FE1",
    marginTop: 40,
  },
  patinetImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  patientCardImage: {
    width: 170,
    height: 150,
  },
  patientCardData: {
    alignItems: "center",
    marginTop: 35,
    marginLeft: 25,
  },
  cardText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  sickContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: 20,
  },
  bottomCardContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  bottomCardLeft: {
    width: 180,
    height: 160,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 15,
  },
  bottomCardRight: {
    width: 180,
    height: 160,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  bottomCradImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomCardImage: {
    width: 120,
    height: 120,
  },
  bootomCardText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "black",
    marginLeft: 25,
  },
  buttonContainetr: {
    width: 90,
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
    marginTop: 30,
  },
  modalBox: {
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#31E1F7",
    padding: 20,
    borderRadius: 50,
    width: "80%",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
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
  },
  modalButton: {
    width: 90,
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
    marginTop: 30,
    marginLeft: 90,
  },
});

export default PetPatient;
