import { StyleSheet, View } from "react-native";
import Foo from "./Foo";

const App = () => {
  return (
    <View style={styles.container}>
      <Foo />
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
