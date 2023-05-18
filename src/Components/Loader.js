import React, { useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loader = ({ source }) => {
  const lottieRef = useRef(null);
  useEffect(() => {
    lottieRef.current?.reset();
    setTimeout(() => {
      lottieRef.current?.play();
    }, 0);
  }, []);
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loaderBackground} />
      <LottieView
        source={source}
        autoPlay="true"
        loop="true"
        style={styles.loaderAnimation}
        ref={lottieRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject, // i have added this so that our loader componet covers the entire screen , would be used for setting the entire screen background to semi transparent
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999, // so that it won;t get hidden below the othet components in the screen
  },
  loaderBackground: {
    ...StyleSheet.absoluteFillObject, //sets the background to semi transparent for a loading efeect taht whe want
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loaderAnimation: {
    width: 150,
    height: 150,
  },
});

export default Loader;
