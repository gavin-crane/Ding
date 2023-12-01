import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { StatusBar } from 'expo-status-bar';
import { LiveFeed } from './src/Screens/LiveFeed';
import { Recordings } from './src/Screens/Recordings';
import RenderUnderStatusBar from "./src/Layouts/RenderUnderStatusBar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, 
        View,
        SafeAreaView,
      } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <GluestackUIProvider config={config}>
          <Stack.Navigator>
            <Stack.Screen name="LiveFeed" component={LiveFeed} />
            <Stack.Screen name="Recordings" component={Recordings} />
          </Stack.Navigator>
        </GluestackUIProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
});
