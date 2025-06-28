import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 350,
          height: 100,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 65,
              height: 65,
              borderRadius: 40,
              backgroundColor: "gray",
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Our Fascinating App
          </Text>
          <Text style={{ color: "gray", fontSize: 13 }}>xxxxxxxx</Text>
        </View>
        <View style={{ backgroundColor: "black", flex: 1 }}></View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//By default, flexDirection comes as column you don't need write column
//It is a flexbox code
