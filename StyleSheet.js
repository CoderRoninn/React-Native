import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [flag, setFlag] = useState(true);
  return (
    <View style={styles.box}>
      <Text style={styles.bold}>Application1</Text>
      <Text style={[styles.bold, { fontSize: 40, color: "black" }]}>
        Application2
      </Text>
      <Text style={flag ? styles.class1 : styles.class2}>Application3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },

  class1: {
    color: "purple",
    fontSize: 50,
  },

  class2: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});

//flex is a component's size in a container
