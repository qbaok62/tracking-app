import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="TrackDetail" component={TrackDetailScreen} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="TrackList" component={TrackListScreen} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
