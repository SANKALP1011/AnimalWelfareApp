import React, { useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export const AnimatedAsset = ({ source, style }) => {
  const lottieRef = useRef(null);
  useEffect(() => {
    lottieRef.current?.reset();
    setTimeout(() => {
      lottieRef.current?.play();
    }, 0);
  }, []);
  return (
    <View>
      <LottieView
        autoPlay="true"
        loop="true"
        source={source}
        style={style}
        ref={lottieRef}
      />
    </View>
  );
};
export default AnimatedAsset;
