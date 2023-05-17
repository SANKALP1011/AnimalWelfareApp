import { render } from "react-dom";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export const AnimatedAsset = ({ source, style }) => {
  return (
    <View>
      <LottieView autoPlay="true" loop="true" source={source} style={style} />
    </View>
  );
};
export default AnimatedAsset;
