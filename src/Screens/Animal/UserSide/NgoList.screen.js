import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import react, { useState, useEffect } from "react";
import {
  StripeProvider,
  CardField,
  useStripe,
} from "@stripe/stripe-react-native";
import { getNgoList } from "../../../Service/Ngo.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import Company3dTwo from "../../../Assets/Company3dTwo.png";
import Company3d from "../../../Assets/Company3d.png";

export const NgoList = ({ navigation }) => {
  const [ngoData, setNgoData] = useState([]);
  const [error, setError] = useState("");
  const [loader, showLoader] = useState(false);

  const colour = ["#00C4FF", "#5C469C"];
  const image = [Company3d, Company3dTwo];

  const getNgoData = async () => {
    showLoader(true);
    try {
      const respone = await getNgoList();
      setNgoData(respone);
      showLoader(false);
    } catch (err) {
      setError(err);
      showLoader(false);
      console.log(err);
    }
  };

  const donateToNgo = (id) => {
    console.log(id);
  };

  useEffect(() => {
    getNgoData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headreContainer}>
        <Text style={styles.headreText}>Donate to Ngo's</Text>
      </View>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : ngoData.length !== 0 ? (
        <ScrollView>
          <View style={styles.ngoContainer}>
            {ngoData.map((value, index) => {
              const colourPicker = colour[index % colour.length];
              const imagePicker = image[index % image.length];
              return (
                <View
                  key={index}
                  style={[
                    styles.ngoDataContainerCard,
                    { backgroundColor: colourPicker },
                  ]}
                >
                  <Image source={imagePicker} style={styles.ngoCardImage} />
                  <View style={styles.ngoTextDataContainer}>
                    <Text style={styles.ngoText} numberOfLines={1}>
                      Name: {value?.Ngoname}
                    </Text>
                    <Text style={styles.ngoLocationText} numberOfLines={1}>
                      Addr: {value?.location.formattedAddress}
                    </Text>
                    <Text style={styles.ngoText}>
                      Vaccinated: {value?.VaccinatedAnimals.length}
                    </Text>
                    <Pressable
                      style={styles.buttonContainetr}
                      onPress={() => {
                        donateToNgo(value._id);
                      }}
                    >
                      <Text style={styles.ngoText}>Donate</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>There is no ngo data availailbe</Text>
        </View>
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
  ngoContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  ngoDataContainerCard: {
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
  ngoCardImage: {
    marginTop: 20,
    width: 150,
    height: 120,
    marginLeft: 5,
  },
  ngoTextDataContainer: {
    marginLeft: 10,
    marginTop: 25,
  },
  ngoText: {
    fontSize: 15,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
  },
  ngoLocationText: {
    fontSize: 15,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
    width: 180,
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
export default NgoList;
