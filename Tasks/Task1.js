import { StyleSheet, Text, View } from "react-native";
//import Task1 from "../../Tasks/Task1";
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>STAY SHARP!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
