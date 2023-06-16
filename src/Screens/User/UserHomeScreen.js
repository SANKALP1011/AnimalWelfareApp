import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Dimensions,
  Image,
} from "react-native";

import { AppAuthContext } from "../../Context/AuthProvider";
import { getUserDetails } from "../../Service/User.service";
import MiniCard from "../../Components/Minicard";
import Report3d from "../../Assets/Report3d.png";
import Nearby3d from "../../Assets/Nearby3d.png";
import Bone3d from "../../Assets/Bone3d.png";
import Money3d from "../../Assets/Money3d.png";
import Adopt3d from "../../Assets/Adopt3d.png";
import Data3d from "../../Assets/Data3d.png";
import Loader from "../../Components/Loader";
import loaderAnimation from "../../Animated Assets/Loader.json";
import { LineChart } from "react-native-chart-kit";

const appWidth = Dimensions.get("screen").width;
export const UserHomeScreen = ({ navigation }) => {
  const { user } = useContext(AppAuthContext);
  const [userData, setUserData] = useState(null);
  const [cacheData, setCacheData] = useState({});
  const [loader, showLoader] = useState(false);

  const CACHE_EXPIRATION_TIME = 10000;

  const getUpdatedUser = async () => {
    try {
      const cacheKey = user._id;
      const cachedData = cacheData[cacheKey];

      if (
        cachedData &&
        Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME
      ) {
        // Use cached data if it exists and time is not expired
        setUserData(cachedData.data);
        showLoader(false);
      } else {
        const response = await getUserDetails(user._id);
        setUserData(response);
        showLoader(false);
        // Cache the fetched data with a new timestapn if the data is updatd fro  the user side
        setCacheData((prevCacheData) => ({
          ...prevCacheData,
          [cacheKey]: { data: response, timestamp: Date.now() },
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUpdatedUser();
  }, [user]);

  const reportedLenght = userData?.animalReported.length;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [
          reportedLenght,
          reportedLenght,
          reportedLenght,
          0,
          reportedLenght,
          0,
        ],
      },
    ],
    legend: ["Number of Animal Saved"],
  };

  const chartConfig = {
    dotColor: "#FAF0E4",
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        {user ? (
          <View>
            <View style={styles.userProfile}>
              <Text style={styles.textStyle}>
                Welcome back, {user.UserName}
              </Text>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate("UserDetails");
                }}
              >
                <Text style={styles.text}>Details</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View>
            <ActivityIndicator
              size="large"
              animating={true}
            ></ActivityIndicator>
          </View>
        )}
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.horizontalScrollBox}>
          <MiniCard
            text={"Report an injured animal"}
            image={Report3d}
            navigation={navigation}
            location="InjuredAnimal"
            color={"#DAE5D0"}
          />
          <MiniCard
            text={"Location Nearby Animal"}
            image={Nearby3d}
            navigation={navigation}
            location="NearByAnimals"
            color="#97DEFF"
          />

          <MiniCard
            text={"Check your Pet Details"}
            image={Bone3d}
            navigation={navigation}
            location="PetDetails"
            color="#655DBB"
          />
          <MiniCard
            text={"Donate to your choice of  ngo"}
            image={Money3d}
            navigation={navigation}
            location="NgoList"
            color="#D5B4B4"
          />
          <MiniCard
            text={"Adopt Animals rescued by Ngo"}
            image={Adopt3d}
            navigation={navigation}
            location="AdoptionList"
            color="#CDE990"
          />
        </View>
      </ScrollView>

      <View style={styles.graphContainer}>
        <LineChart
          data={data}
          width={400}
          height={170}
          chartConfig={chartConfig}
          bezier
        />
      </View>
      <View style={styles.dataViewContainer}>
        <View style={styles.leftDataContainer}>
          <Text style={styles.dataText}>
            Animal Adopted : {userData?.AdoptedAnimal.length}
          </Text>
          <Text style={styles.dataText}>
            Ngo Donated : {userData?.donatedtoNgo.length}
          </Text>
        </View>
        <View>
          <Image source={Data3d} style={styles.dataCardImage} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalScrollBox: {
    flexDirection: "row",
    marginTop: 22,
  },
  cardContainer: {
    flexDirection: "row",
  },
  horizontalScrollView: {
    marginTop: "7%",
  },
  userDetailsContainer: {
    width: appWidth - 40,
    height: 150,
    marginTop: "20%",
    marginHorizontal: "5%",
    backgroundColor: "#BCCEF8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 15,
  },
  userProfile: {
    marginTop: "4%",
    marginBottom: "10%",
    marginLeft: "3%",
  },
  profileSubText: {
    marginTop: "2%",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "font-name=firaBold-Type",
  },

  button: {
    width: 100,
    height: 40,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "black",
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "font-name=firaBold-Type",
  },
  imageContainer: {
    width: 120,
    height: 60,
    marginTop: "20%",
    marginLeft: "30%",
  },
  cardText: {
    fontWeight: "bold",
    fontSize: "17px",
    marginTop: "5%",
    marginLeft: "6%",
  },
  graphContainer: {
    width: "90%",
    height: 200,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "#0C134F",
    marginBottom: 10,
    marginLeft: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  dataViewContainer: {
    width: "90%",
    height: 150,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "#790252",
    marginBottom: 40,
    marginLeft: 17,
    flexDirection: "row",
  },
  dataCardImage: {
    width: 130,
    height: 130,
    marginLeft: 30,
    marginTop: 10,
  },
  leftDataContainer: {
    marginLeft: 20,
    marginTop: 40,
  },
  dataText: {
    fontSize: 18,
    fontFamily: "font-name=firaBold-Type",
    color: "white",
    margin: 5,
  },
});
export default UserHomeScreen;
