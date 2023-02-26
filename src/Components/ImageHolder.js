import { View, StyleSheet, Image } from "react-native";

export const ImageHolder = ({ imgSource }) => {
  return <Image style={styles.imageStyles} source={imgSource} alt="Image" />;
};

const styles = StyleSheet.create({
  imageStyles: {
    width: 300,
    height: 200,
    borderRadius: 18,
  },
});

export default ImageHolder;
