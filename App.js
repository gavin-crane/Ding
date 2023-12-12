import {
  GluestackUIProvider,
  Text,
  Box,
  StyledProvider
} from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { LiveFeed } from './src/Screens/LiveFeed'
import { Recordings } from './src/Screens/Recordings'
import { Initial } from './src/Screens/Initial'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { useEffect, useState, useContext } from 'react'
// import { AuthSignIn } from './src/Authenticity/AuthSignIn'
// import { DingSVG } from './src/SVGRComponents/DingSVG'
import { UserContextProvider } from './src/Providers'
// import 'react-native-gesture-handler'

// const Drawer = createDrawerNavigator()

const Stack = createNativeStackNavigator()

export default function App () {
  useEffect(() => {
    console.log('App mounted')

    return () => {
      console.log('App unmounted')
    }
  }, [])
  return (
    <>
      <GluestackUIProvider config={config}>
        <UserContextProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='initial'>
              <Stack.Screen name='initial' component={Initial} />
              <Stack.Screen name='livefeed' component={LiveFeed} />
              <Stack.Screen name='recordings' component={Recordings} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserContextProvider>
      </GluestackUIProvider>
      {/* <NavigationContainer>
        <GluestackUIProvider config={config}>
          <UserContextProvider>
            <View style={styles.container}>
            <StatusBar />
            <Initial />
            </View>
          </UserContextProvider>
        </GluestackUIProvider>
      </NavigationContainer> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: Platform.OS === 'ios' ? 20 : `${StatusBar.currentHeight + 30}`
  },
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
