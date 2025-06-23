import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View
        style={{
          width: 200,
          height: 100,
          backgroundColor: "#fdfcdc",
          borderRadius: 10,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>We are developing an application...</Text>
      </View>

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#00b4d8",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hi there...</Text>
      </View>
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

//Wiew is a container for other components. It is like a box to hold things inside
//width means how wide the text box is
//height means how tall the text box
//backgroundColor: "#...." changes the color of the box. we can select the colors specific websites like https://coolors.co/
//borderRadius makes the corners round
//justifyContent: "center" places things inside vertically (up-down)
//center means everything is in the middle
//alignItems: "center" places things inside horizontally(left-right)
