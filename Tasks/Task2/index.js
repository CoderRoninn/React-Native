import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const App = () => {
  const handlePress = () => alert("Button pressed!");

  return (
    <View style={styles.container}>
      <Image
        source={require("./logo.jpg")}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.text}>Let&#39;s Tapp!</Text>

      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  logo: {
    width: width,
    height: height,
    borderRadius: 20,
    opacity: 0.85,
  },
  text: {
    position: "absolute",
    top: 65,
    left: width / 2 - 70,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  customButton: {
    position: "absolute",
    bottom: 50,
    left: width / 2 - 90,
    width: 180,
    backgroundColor: "#6BCB77",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
