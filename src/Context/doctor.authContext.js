import react, { useState, useEffect, useContext, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const DoctorAuthContext = createContext();

export const DoctorAuthProvider = ({ children }) => {
  const [doctor, setDoctor] = useState(null);

  const doctorSignup = async (doctorData) => {
    setDoctor(doctorData);
    try {
      await AsyncStorage.setItem("doctor", JSON.stringify(doctorData));
    } catch (error) {
      console.log(error);
    }
  };

  const doctorLogout = async () => {
    setDoctor(null);
    try {
      await AsyncStorage.removeItem("doctor");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDoctor = async () => {
    const init = async () => {
      try {
        const retrievedData = await AsyncStorage.getItem("doctor");
        const parsedData = JSON.parse(retrievedData);
        console.log(parsedData);

        if (parsedData && typeof parsedData === "object") {
          setDoctor(parsedData);
          console.log(parsedData);
        } else {
          console.log("Sorry , no doctor exists in our storage");
        }
      } catch (error) {
        console.log("Error fetching doctor data:", error);
      }
    };

    const fetchData = async () => {
      await init();
    };

    fetchData();
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <DoctorAuthContext.Provider
      value={{ doctor, doctorSignup, doctorLogout, fetchDoctor }}
    >
      {children}
    </DoctorAuthContext.Provider>
  );
};
