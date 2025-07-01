import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = () => {
  const [even, setEven] = useState(0);
  const [odd, setOdd] = useState(1);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  }); //[]

  return (
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: "black",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
        Even: {even}
      </Text>
      <Button title="Increase Even" onPress={() => setEven((pre) => pre + 2)} />

      <Text style={{ color: "white", fontSize: 20, marginTop: 20 }}>
        Odd: {odd}
      </Text>
      <Button title="Increase Odd" onPress={() => setOdd((pre) => pre + 2)} />
    </View>
  );
};

export default Counter;
