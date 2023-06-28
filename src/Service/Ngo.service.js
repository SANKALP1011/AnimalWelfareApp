import axios from "axios";
import { API_BASE_URL } from "../Api/api.utils";

module.exports = {
  ngoSignUp: async (Ngoname, NgoPassword, NgoAddress) => {
    const data = {
      Ngoname: Ngoname,
      NgoPassword: NgoPassword,
      NgoAddress: NgoAddress,
    };
    const endPoint = "/ngo/signUp";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const response = await axios.post(apiLink, data);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
  ngoLogIn: async (Ngoname, NgoPassword) => {
    const data = {
      Ngoname: Ngoname,
      NgoPassword: NgoPassword,
    };
    const endPoint = "/ngo/logIn";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const response = await axios.post(apiLink, data);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
  getNgoList: async () => {
    const endPoint = "/ngo/getNgo";
    const apiLink = `${API_BASE_URL}${endPoint}`;
    try {
      const respone = await axios.get(apiLink);
      return respone.data;
    } catch (err) {
      return err;
    }
  },
};
