import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const retrievedData = await AsyncStorage.getItem("user");
        setUser(JSON.parse(retrievedData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <AppAuthContext.Provider value={user}>{children}</AppAuthContext.Provider>
  );
};
export default AuthProvider;
