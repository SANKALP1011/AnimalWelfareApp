import axios from "axios";
import { API_BASE_URL } from "../Api/api.utils";

module.exports = {
  //other services would be called later
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
