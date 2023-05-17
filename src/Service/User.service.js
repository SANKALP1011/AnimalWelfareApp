import axios from "axios";
import { API_BASE_URL } from "../Api/api.utils";

module.exports = {
  signUpUser: async (name, email, password, address) => {
    const postConfig = {
      UserName: name,
      Email: email,
      Password: password,
      Address: address,
    };
    try {
      const response = await axios.post(
        "https://animal-welfare-api.herokuapp.com/SignUp",
        postConfig
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  logInUser: async (email, password) => {
    const data = { Email: email, Password: password };
    try {
      const response = await axios.post(
        "https://animal-welfare-api.herokuapp.com/LogIn",
        data
      );
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
};
// export async function signUpUser(name, email, password, address) {
//   const postConfig = {
//     UserName: name,
//     Email: email,
//     Password: password,
//     Address: address,
//   };
//   const response = await axios.post(
//     "https://animal-welfare-api.herokuapp.com/SignUp",
//     postConfig
//   );
//   if (!response.ok) {
//     return response.data;
//   } else {
//     return response.data;
//   }
// }
