import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeTab from "./HomeTab";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {
    state: { token },
  } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Signin"
    >
      {!token ? (
        <>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeTab} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
