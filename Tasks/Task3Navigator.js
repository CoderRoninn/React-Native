import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Task3Onboarding from "./Task3Onboarding";
import Task4LoginScreen from "./Task4LoginScreen";
import Task5ChatScreen from "./Task5ChatScreen";

const Stack = createNativeStackNavigator();

export default function Task3Navigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Task3Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Task4LoginScreen}
        options={{ headerShown: false }} // This hides the header for screens like Login
      />
      <Stack.Screen
        name="ChatScreen"
        component={Task5ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
