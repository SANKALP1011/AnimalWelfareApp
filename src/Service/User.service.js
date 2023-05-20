import axios from "axios";
import { API_BASE_URL } from "../Api/api.utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      return response.data;
    } catch (error) {
      console.log("isssuueeee");
    }
  },
};
