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
import RenderUnderStatusBar from './src/Layouts/RenderUnderStatusBar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useEffect, useState, useContext } from 'react'
import { AuthSignIn } from './src/Authenticity/AuthSignIn'
import { DingSVG } from './src/SVGRComponents/DingSVG'
import { UserContextProvider } from './src/Providers'
import 'react-native-gesture-handler'

const Drawer = createDrawerNavigator()

// const Stack = createNativeStackNavigator();

export default function App () {
  useEffect(() => {
    console.log('App mounted')

    return () => {
      console.log('App unmounted')
    }
  }, [])
  return (
    <UserContextProvider>
      <View style={styles.container}>
        <GluestackUIProvider config={config}>
          <StatusBar />
          <View style={{}}>
            {/* <DingSVG /> */}
            {/* {isLoggedIn ? (
              <Drawer.Navigator>
                <Drawer.Screen name='LiveFeed' component={LiveFeed} />
                <Drawer.Screen name='Recordings' component={Recordings} />
              </Drawer.Navigator>
            ) : (
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{
                  minWidth: '100%',
                  position: 'absolute',
                  backgroundColor: 'red'
                }}
              >
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                  <Box
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      // backgroundColor: 'blue',
                      minWidth: '100%'
                    }}
                  >
                    <DingSVG />
                    <AuthSignIn />
                  </Box>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            )} */}
            {/* <NavigationContainer>
        <GluestackUIProvider config={config}> */}
            {/* <Stack.Navigator>
            <Stack.Screen name="LiveFeed" component={LiveFeed} />
            <Stack.Screen name="Recordings" component={Recordings} />
          </Stack.Navigator> */}

            {/* <Drawer.Navigator>
            <Drawer.Screen name='LiveFeed' component={LiveFeed} />
            <Drawer.Screen name='Recordings' component={Recordings} />
          </Drawer.Navigator> */}
            {/* <RenderUnderStatusBar>
            <Box>
            
              <AuthSignIn />
            </Box>
          </RenderUnderStatusBar> */}
            {/* <LiveFeed />
        </GluestackUIProvider>
      </NavigationContainer> */}
          </View>
        </GluestackUIProvider>
      </View>
    </UserContextProvider>
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
