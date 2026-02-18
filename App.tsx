import { Text, NativeModules, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { AppConfig } = NativeModules;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, World !</Text>
        <Text>ID_PO : {AppConfig.ID_PO}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;