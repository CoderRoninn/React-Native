import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Enter the button.</Text>
      <AntDesign name="checkcircle" size={24} color="black" />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

//https://icons.expo.fyi/Index
