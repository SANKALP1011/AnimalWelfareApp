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
};
