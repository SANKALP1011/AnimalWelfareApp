import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from "react-native";
import react, { useState, useEffect, useContext } from "react";
import { getAdoptedAnimalsList } from "../../../Service/User.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import AdoptedImage3d from "../../../Assets/AdoptedImage3d.png";
import fox3dd from "../../../Assets/fox3dd.png";
import { adoptAnimal } from "../../../Service/User.service";
import { AppAuthContext } from "../../../Context/user.authContext";

export const AdoptionList = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
  const [adoptedList, setAdoptedList] = useState([]);
  const [error, setError] = useState("");
  const [loader, showLoader] = useState(false);
  const colour = ["#5F264A", "#301E67"];
  const image = [fox3dd, AdoptedImage3d];

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

  const adoptAnimalFromList = async (aniId) => {
    showLoader(true);
    try {
      await adoptAnimal(user._id, aniId);
      Alert.alert("This animal is successfully adopted");
      showLoader(false);
    } catch (err) {
      setError(err);
      showLoader(false);
    }
  };

  useEffect(() => {
    getAnimalList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headreContainer}>
        <Text style={styles.headreText}>Adoption List</Text>
      </View>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : (
        <ScrollView>
          <View style={styles.cardContainer}>
            {adoptedList.map((value, index) => {
              const colourPicker = colour[index % colour.length];
              const imagePicker = image[index % image.length];
              return (
                <View
                  key={index}
                  style={[
                    styles.adoptedCardContainer,
                    { backgroundColor: colourPicker },
                  ]}
                >
                  <Image source={imagePicker} style={styles.adoptedCardImage} />
                  <View style={styles.adoptedTextDataContainer}>
                    <Text style={styles.adoptedText}>
                      Name: {value?.Name.toUpperCase()}
                    </Text>
                    <Text style={styles.adoptedText}>{value?.NgoName}</Text>
                    <Text numberOfLines={1} style={styles.adoptedLocationText}>
                      Type: {value?.Type}
                    </Text>
                    {value?.isAdopted ? (
                      <View>
                        <Text style={styles.adoptedText}>
                          Adopted By: {value?.AdopterName}
                        </Text>
                      </View>
                    ) : (
                      <View>
                        <Text style={styles.adoptedText}>Adopted By: No</Text>
                      </View>
                    )}
                    <Pressable
                      style={styles.buttonContainetr}
                      onPress={() => {
                        adoptAnimalFromList(value?._id);
                      }}
                    >
                      <Text style={styles.adoptedText}>Adopt</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headreContainer: {
    marginTop: 60,
  },
  headreText: {
    fontSize: 35,
    fontFamily: "font-name=firaBold-Type",
    color: "black",
    marginLeft: 25,
  },
  cardContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  adoptedCardContainer: {
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
    marginBottom: 20,
    flexDirection: "row",
  },
  adoptedCardImage: {
    marginTop: 20,
    width: 150,
    height: 120,
    marginLeft: 5,
  },
  adoptedTextDataContainer: {
    marginLeft: 10,
    marginTop: 25,
  },
  adoptedText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  adoptedLocationText: {
    fontSize: 20,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
    width: 150,
  },
  buttonContainetr: {
    width: 70,
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
    marginTop: 10,
  },
});
export default AdoptionList;

/*
  Object {
    "Address": "",
    "AdopterId": "",
    "AdopterName": "",
    "Name": "Gohan",
    "NgoName": "Gokaine Foudations",
    "Type": "Cat",
    "__v": 0,
    "_id": "63b2d76a79d9ce5e38a8a691",
    "isAdopted": false,
    "isRescued": false,
  },
  user id and animal id
*/
