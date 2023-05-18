import React, { useState, useEffect, useContext, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserDetails } from "../Service/User.service";

export const AppAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    setUser(userData);
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    useEffect(() => {
      // Delay the execution of the fetchUser function until after AsyncStorage has finished loading
      setTimeout(async () => {
        try {
          const retrievedData = await AsyncStorage.getItem("user");
          const parsedData = JSON.parse(retrievedData);

          if (parsedData && typeof parsedData === "object") {
            setUser(parsedData);
            console.log(parsedData);
          } else {
            console.log("Invalid user data or not signed in");
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      }, 1000);
    }, []);
  };

  const updateUserDetailsAuth = async () => {
    try {
      if (user) {
        const userId = user._id;
        const updatedUser = await getUserDetails(userId);
        setUser(updatedUser);
        console.log("Updating the user");
      } else {
        console.log("You are not signed in");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(updateUserDetailsAuth, 20000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppAuthContext.Provider
      value={{ user, signup, logout, fetchUser, updateUserDetailsAuth }}
    >
      {children}
    </AppAuthContext.Provider>
  );
};
