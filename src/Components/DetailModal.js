import { View, Text, StyleSheet, Modal } from "react-native";

export const DetailModal = ({ data, visible, close }) => {
  return (
    <Modal visible={visible} onRequestClose={close}>
      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>
          <Text>{data?.UserNamewhoReported}</Text>
          <Text>{data?.AnimalCondition}</Text>
          <Text>{data?.AnimalType}</Text>
          {data?.isAnimalSaved ? <Text>SAVEDDD</Text> : <Text>not saved</Text>}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
  },
  modalCard: {
    width: "80%",
    height: 250,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
});
export default DetailModal;
