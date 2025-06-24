import { Text, View } from "react-native";
import { Style } from "./Style";

export const User = ({ name, surname }) => {
  return (
    <View style={Style.box}>
      <Text style={Style.name}>{name}</Text>
      <Text style={Style.surname}>{surname}</Text>
    </View>
  );
};
