import { Text, StyleSheet, View } from "react-native";
import react, { useState, useEffect } from "react";
import { getAdoptedAnimalsList } from "../../../Service/User.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";

export const AdoptionList = ({ navigation }) => {
  const [adoptedList, setAdoptedList] = useState([]);
  const [error, setError] = useState("");
  const [loader, showLoader] = useState(false);

  const getAnimalList = async () => {
    showLoader(true);
    try {
      const respone = await getAdoptedAnimalsList();
      setAdoptedList(respone);
      showLoader(false);
    } catch (err) {
      setError(err);
      showLoader(false);
    }
  };

  useEffect(() => {
    getAnimalList();
  }, []);

  return <View></View>;
};

export default AdoptionList;
