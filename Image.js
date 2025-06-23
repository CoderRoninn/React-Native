import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={require("../../assets/images/pokemon.jpg")}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={{
          uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        }}
        style={{ width: 200, height: 200 }}
      />
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

//Image shows pictures on the screen
//The first image uses a local file from our app with require
//The second image uses an internet link with uri to show a picture
