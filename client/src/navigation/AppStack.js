import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeTab from "./HomeTab";
import { Context as AuthContext } from "../context/authContext";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {
    state: { token },
  } = React.useContext(AuthContext);
  console.log("token: ", token);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Signin"
    >
      {!token ? (
        <>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeTab} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;