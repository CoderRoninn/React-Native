import React from "react";
import { Button, Text, View } from "react-native";

class Foo extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componenDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 30,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 50, color: "white" }}>
          {this.state.counter}
        </Text>
        <Button
          title="Increase"
          onPress={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        />
      </View>
    );
  }
}

export default Foo;
