import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "../Api/api.utils";

module.exports = {
  doctorSignIn: async (DocterName, DocterEmail, DocterPassword, Address) => {
    const endPoint = "/docterSignUp";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    const data = {
      DocterName: DocterName,
      DocterEmail: DocterEmail,
      DocterPassword: DocterPassword,
      Address: Address,
    };
    try {
      const response = await axios.post(apiLink, data);
      await AsyncStorage.setItem("doctor", JSON.stringify(response.data));
      return response.data;
    } catch (err) {
      return err;
    }
  },
  doctorLogIn: async (DocterEmail, DocterPassword) => {
    const data = {
      DocterEmail: DocterEmail,
      DocterPassword: DocterPassword,
    };
    const endPoint = "/docterLogIn";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const respone = await axios.post(apiLink, data);
      return respone.data;
    } catch (err) {
      return err;
    }
  },
  getNearbyInjuredAnimal: async (docId) => {
    const endPoint = "/nearByAnimal";
    const apiLink = `${API_BASE_URL}${endPoint}?docId=${docId}`;
    try {
      const respone = await axios.get(apiLink);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
  provideAnimalHelp: async (docId, aniId) => {
    const endPoint = "/animalHelp";
    const apiLink = `${API_BASE_URL}${endPoint}?docId=${docId}&aniId=${aniId}`;
    try {
      const respone = await axios.post(apiLink);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
  getUpdatedDoctorDetails: async (docId) => {
    const endPoint = "/getDoctorById";
    const apiLink = `${API_BASE_URL}${endPoint}?docId=${docId}`;
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
  getPetPatientDetails: async (docId) => {
    const endPoint = "/getPatient";
    const apiLink = `${API_BASE_URL}${endPoint}?docId=${docId}`;
    try {
      const respone = await axios.get(apiLink);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
  providePetCheck: async (id, medicineName, dose, exercise, diet, next) => {
    const data = {
      MedicineName: medicineName,
      Dose: dose,
      Exercise: exercise,
      Diet: diet,
      Next: next,
    };
    const endPoint = "/petCheckup";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const respone = await axios.post(apiLink, data);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
  updatePetHealthCard: async (
    id,
    vaccineCount,
    vaccineDoseLeft,
    rabbiesVaccine,
    immunityVacc,
    wormVacc,
    nextCheckUp
  ) => {
    const data = {
      VaccineCount: vaccineCount,
      VaccineDoseLeft: vaccineDoseLeft,
      RabbiesVaccine: rabbiesVaccine,
      ImmunityVacc: immunityVacc,
      WormVacc: wormVacc,
      NextCheckUp: nextCheckUp,
    };
    const endPoint = "/updateHealth";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const respone = await axios.post(apiLink, data);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
};
