import { useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0); //useState(initial value)

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
        borderRadius: 30,
        backgroundColor: "black",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 65, color: "white" }}>
        {counter}
      </Text>

      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <View style={{ marginBottom: 10 }}></View>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

export default Counter;
