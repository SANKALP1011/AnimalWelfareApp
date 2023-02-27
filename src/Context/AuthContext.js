import { useContext, useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const signUpUser = async ({ name, email, password, address }) => {
    const postConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UserName: name,
        Email: email,
        Password: password,
        Address: address,
      }),
    };
  };
};
