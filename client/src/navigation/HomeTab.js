import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackListScreen from "../screens/TrackListScreen";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: "Tracks",
          tabBarIcon: <FontAwesome name="th-list" />,
        }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          title: "Add Track",
          tabBarIcon: <FontAwesome name="plus" size={20} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: <FontAwesome name="gear" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
