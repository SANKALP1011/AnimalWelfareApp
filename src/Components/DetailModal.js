import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Pic from "../Assets/ModalImage.png";

export const DetailModal = ({ data, visible, close, key, handleClose }) => {
  return (
    <Modal visible={visible} onRequestClose={close} backdropOpacity={0.5}>
      <View key={key} style={styles.modalContainer}>
        <View style={styles.modalCard}>
          <View style={styles.picContainer}>
            <Image source={Pic} style={styles.profilePic} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoContainerLeftData}>
              {data?.UserNamewhoReported}
            </Text>
            <Text style={styles.infoContainerRightData} numberOfLines={1}>
              {data?.AnimalCondition.length > 10
                ? `${data?.AnimalCondition.slice(0, 10)}...`
                : data?.AnimalCondition}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoContainerLeftData}>{data?.AnimalType}</Text>
            {data?.DocterName ? (
              <Text style={styles.infoContainerRightData}>
                {data?.DocterName}
              </Text>
            ) : (
              <Text style={styles.infoContainerRightData}>None</Text>
            )}
          </View>

          <TouchableOpacity
            onPress={() => {
              handleClose();
            }}
            style={styles.buttonContainer}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  picContainer: {
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#FDCEDF",
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 30,
  },
  infoContainerLeftData: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 20,
  },
  infoContainerRightData: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FDCEDF",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    width: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 12,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default DetailModal;
