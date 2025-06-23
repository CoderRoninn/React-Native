import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "red" }}>
          We are starting...
        </Text>
        Hello!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//The Text component is used to display text on the screen and is usually placed inside a View component
//style means how you make the text or view look
//fontWeight means how thick or bold the text looks
//fontSize means how big or small the text is
//color means the color of the text
