import { Video } from "expo-av";
import { useState } from "react";
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Task2 = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <ImageBackground
      source={require("./task2image.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.topTextContainer}>
        <Text style={styles.text}>Let&apos;s Tapp!!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={loading}
        animationType="fade"
        onRequestClose={() => setLoading(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Video
              source={require("./task2video.mp4")}
              style={styles.video}
              resizeMode="contain"
              shouldPlay
              isLooping
              useNativeControls={false}
              isMuted={true}
            />
            <Text style={styles.loadingText}>Buckle up, here we go!</Text>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Task2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  topTextContainer: {
    marginTop: 60,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#00FF7F",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    marginTop: 300,
  },

  video: {
    width: 206,
    height: 130,
  },
  loadingText: {
    marginTop: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

//import Task2 from "../../Tasks/Task2";
