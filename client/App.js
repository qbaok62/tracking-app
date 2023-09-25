import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "./src/RootNavigation";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
              <AppStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
