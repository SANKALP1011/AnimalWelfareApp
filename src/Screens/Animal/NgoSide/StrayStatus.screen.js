import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import react, { useState, useEffect, useContext } from "react";
import { checkStrayAnimalStatus } from "../../../Service/Ngo.service";
import Loader from "../../../Components/Loader";
import loaderAnimation from "../../../Animated Assets/Loader.json";
import Company3dTwo from "../../../Assets/Company3dTwo.png";
import Company3d from "../../../Assets/Company3d.png";
import { NGOAuthContext } from "../../../Context/ngo.authContext";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const StrayStatus = ({ navigation }) => {
  const { ngo } = useContext(NGOAuthContext);
  const [strayData, setstrayData] = useState([]);
  const [error, setError] = useState("");
  const [loader, showLoader] = useState(false);

  const colour = ["#00C4FF", "#5C469C"];
  const image = [Company3d, Company3dTwo];

  const getstrayData = async () => {
    showLoader(true);
    try {
      const respone = await checkStrayAnimalStatus(ngo._id);
      setstrayData(respone);
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
    getstrayData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headreContainer}>
        <Text style={styles.headreText}>Check Stray Animals</Text>
      </View>
      {loader ? (
        <Loader source={loaderAnimation} />
      ) : strayData.length !== 0 ? (
        <ScrollView>
          <View style={styles.ngoContainer}>
            {strayData.map((value, index) => {
              const colourPicker = colour[index % colour.length];
              const imagePicker = image[index % image.length];
              return (
                <View
                  key={index}
                  style={[
                    styles.strayDataContainerCard,
                    { backgroundColor: colourPicker },
                  ]}
                >
                  <Image source={imagePicker} style={styles.ngoCardImage} />
                  <View style={styles.ngoTextDataContainer}>
                    <Text style={styles.ngoText} numberOfLines={1}>
                      Name: {value?.StrayName}
                    </Text>
                    <Text style={styles.ngoText} numberOfLines={1}>
                      Addr: {value?.StrType}
                    </Text>
                    {value.isVaccinated ? (
                      <View style={styles.sickContainer}>
                        <Text style={styles.ngoText}>Vaccinated:</Text>
                        <AntDesign
                          name="checkcircle"
                          size={24}
                          color="#77037B"
                          style={styles.iconContainer}
                        />
                      </View>
                    ) : (
                      <View style={styles.sickContainer}>
                        <Text style={styles.ngoText}>Vaccinated:</Text>
                        <AntDesign
                          name="closecircle"
                          size={24}
                          color="#77037B"
                          style={styles.iconContainer}
                        />
                      </View>
                    )}
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
  strayDataContainerCard: {
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
    fontSize: 20,
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
  sickContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: 15,
  },
});
export default StrayStatus;
