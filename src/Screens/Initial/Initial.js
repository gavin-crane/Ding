import {
  StyleSheet,
  View,
  SafeAreaView,
  platform,
  StatusBar
} from 'react-native'
import { GluestackUIProvider, Text, Box, Button } from '@gluestack-ui/themed'
import RenderUnderStatusBar from '../../Layouts/RenderUnderStatusBar'
import { useEffect, useState } from 'react'
import { AuthSignUp } from '../../Authenticity/AuthSignUp'
import { AuthSignIn } from '../../Authenticity/AuthSignIn'
import { DingSVG } from '../../SVGRComponents/DingSVG'
import { useUserData } from '../../Hooks'
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

export const Initial = ({ navigation }) => {
  const { curUserData, setCurUserData, isLoggedIn } = useUserData()

  useEffect(() => {
    console.log('Initial mounted')
    console.log('help')
    console.log('isLoggedIn:', isLoggedIn)
    if (isLoggedIn) {
      console.log("navigate! to 'livefeed'")
      navigation.navigate('livefeed')
    }
    console.log('curUserData:', curUserData)

    return () => {
      console.log('Initial unmounted')
    }
  }, [curUserData, isLoggedIn])
  return (
    <>
      <View style={styles.container}>
        <StatusBar />
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
            <View
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
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}
export default Initial

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
