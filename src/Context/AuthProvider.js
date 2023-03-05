import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);

  async function fetchUser() {
    try {
      const retrievedData = await AsyncStorage.getItem("user");
      setUser(JSON.parse(retrievedData));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [dataChanged]);

  const updateUser = () => {
    setDataChanged(!dataChanged);
  };

  return (
    <AppAuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AppAuthContext.Provider>
  );
};

export default AuthProvider;