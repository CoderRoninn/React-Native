import { View } from "react-native";
import styles from "./style";
import Welcome from "./welcome";

const App = () => {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
};
export default App;
