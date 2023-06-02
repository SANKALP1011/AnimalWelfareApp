import { View, Text, StyleSheet } from "react-native";
import react, { useState, useEffect } from "react";
import { getDoctorList } from "../../../Service/User.service";

export const DoctorList = ({}) => {
  const getAllDoctors = async () => {
    try {
      const response = await getDoctorList();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
  return (
    <View>
      <Text>This is the doctor list screen</Text>
    </View>
  );
};
export default DoctorList;
