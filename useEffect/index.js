import { StyleSheet, View } from "react-native";
import Counter from "./useEffect";

const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
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
