import axios from "axios";
import typescript from "react-native-svg";
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
  getUpdatedNgoDetails: async (ngoId) => {
    const endPoint = "/ngo/getNgoById";
    const apiLink = `${API_BASE_URL}${endPoint}?ngoId=${ngoId}`;
    try {
      const respone = await axios.get(apiLink);
      return respone.data;
    } catch (err) {
      return err;
    }
  },
  addStrayAnimal: async (id, StrayName, StrType) => {
    const data = {
      StrayName: StrayName,
      StrType: StrType,
    };
    const endPoint = "/ngo/strayList";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const respone = await axios.post(apiLink, data);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
  checkStrayAnimalStatus: async (id) => {
    const endPoint = "/ngo/getStrayList";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const respone = await axios.get(apiLink);
      return respone.data;
    } catch (err) {
      return err.message;
    }
  },
  addAnimalForAdoption: async (id, Name, Type) => {
    const data = {
      Name: Name,
      Type: Type,
    };
    const endPoint = "/ngo/addAdoptList";
    const apiLink = `${API_BASE_URL}${endPoint}?id=${id}`;
    try {
      const respone = await axios.post(apiLink, data);
      return respone.data;
    } catch (err) {
      return err;
    }
  },
};
