import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "../Api/api.utils";

module.exports = {
  signUpUser: async (name, email, password, address) => {
    const postConfig = {
      UserName: name,
      Email: email,
      Password: password,
      Address: address,
    };
    const endPoint = "/SignUp";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const response = await axios.post(apiLink, postConfig);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  logInUser: async (email, password) => {
    const data = { Email: email, Password: password };
    const endPoint = "/LogIn";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const response = await axios.post(apiLink, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  reportInjuredAnimal: async (
    userId,
    AnimalType,
    AnimalCondition,
    AnimalAddress
  ) => {
    const data = {
      userId: userId,
      AnimalType: AnimalType,
      AnimalCondition: AnimalCondition,
      AnimalAddress: AnimalAddress,
    };
    const endPoint = "/reportInjuredAnimal";
    const apiLink = `${API_BASE_URL}${endPoint}?userId=${userId}`;
    try {
      const response = await axios.post(apiLink, data);
      console.log("successsss");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  getUserDetails: async (userId) => {
    const endPoint = "/getUserDetails";
    const apiLink = `${API_BASE_URL}${endPoint}?userId=${userId}`;

    try {
      const response = await axios.get(apiLink);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getNearbyAnimal: async (userId) => {
    const endPoint = "/getNearbyAnimal";
    const apiLink = `${API_BASE_URL}${endPoint}?userId=${userId}`;
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (err) {
      return err;
    }
  },
  addPet: async (id, Petname, Pettype, PetBreed, Petage) => {
    const endPoint = "/addPet";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    const data = {
      Petname: Petname,
      Pettype: Pettype,
      PetBreed: PetBreed,
      Petage: Petage,
    };
    try {
      const response = await axios.post(apiLink, data);
      return response.data;
    } catch (err) {
      return err;
    }
  },
  getPetDetails: async (id) => {
    const endPoint = "/petDetails";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (e) {
      return e;
    }
  },
  getDoctorList: async () => {
    const endPoint = "/getAllDoctors";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const response = await axios.get(apiLink);
      return response.data;
    } catch (err) {
      return err;
    }
  },
  chosePetDoctor: async (id, did) => {
    console.log(id);
    console.log(did);
    const endPoint = "/choseDoctor";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}&did=${did}`;
    try {
      const response = await axios.post(apiLink);
      return response.data;
    } catch (err) {
      return err;
    }
  },
  updatePetHealthStatus: async (id) => {
    const endPoint = "/updatePetStatus";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const response = await axios.post(apiLink);
      return response.data;
    } catch (err) {
      return err;
    }
  },
  donateToNgo: async (id, nId, amount) => {
    const endPoint = "/ngoFund";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}&nid=${nId}`;
    try {
      const respone = await axios.post(apiLink, amount);
      return respone.data;
    } catch (err) {
      return err;
    }
  },
  getAdoptedAnimal: async () => {
    const endPoint = "/ngo/adoptionList";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const respone = await axios.get(apiLink);
      return respone.data;
    } catch (err) {
      return err;
    }
  },
};
