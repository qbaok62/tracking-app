import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { navigationRef } from "./src/RootNavigation";
import { Provider as AuthProvider } from "./src/context/authContext";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <AppStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
