import { StyleSheet, Text, View } from "react-native";

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text>NAME: {props.name}</Text>
      <Text>SURNAME: {props.surname}.</Text>
    </View>
  );
};

const App = (name, surname) => {
  const { name, surname } = props;
  return (
    <View style={styles.container}>
      <Text>NAME: {props.name}</Text>
      <Text>SURNAME: {props.surname}.</Text>
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

//In the main app.js file we call it.

//Like <Person name='DOGUKAN' surname='SUME'
