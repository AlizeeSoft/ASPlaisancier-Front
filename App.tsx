// App.tsx

import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
 
import { AppProvider, useApp } from "@/app";
import { getStatusBarStyle } from "@/utils/statusBar";

import { RootStackNavigator } from "@/navigation";

function AppContent() {
  const { theme } = useApp();

  return (
    <>
      <StatusBar backgroundColor={theme.statusBarBackgroundColor} barStyle={getStatusBarStyle(theme)} />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  )
}

function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default App;