import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  // It is a class
  const [count, setCount] = useState(0); // const [variable name, function name] = useState(initial value)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button
        title="Increase"
        //onPress={() => alert("Pressed")}
        onPress={() => setCount((prev) => prev + 1)}
        touchSoundDisabled
        color={"red"}
      />

      <Button
        title="Decrease"
        //onPress={() => alert("Error")}
        onPress={() => setCount((prev) => prev - 1)}
      />
      <Text>{count}</Text>
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

//Button is something you can press on the screen. It does something when you press it
//onPress means when you press the button, it tells the app what to do when the button is pressed
//alert is a message that pops up on the screen to tell you something
//setCount is a function to change the number(count)
//touchSoundDisabled means turn off the click sound when you press the button
//title is the name of or text on the button
//useState is a tool in react and react native. It helps you store and change data in your app.
