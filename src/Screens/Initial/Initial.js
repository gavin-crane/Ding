import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  SafeAreaView,
  statusBar,
  platform
} from 'react-native'
import { GluestackUIProvider, Text, Box, Button } from '@gluestack-ui/themed'
import RenderUnderStatusBar from '../../Layouts/RenderUnderStatusBar'
import { useEffect, useState } from 'react'
import { AuthSignUp } from '../../Authenticity/AuthSignUp'
import { AuthSignIn } from '../../Authenticity/AuthSignIn'
import { DingSVG } from '../../SVGRComponents/DingSVG'
import { UserContextProvider } from '../../Providers'
import { TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'

export const Initial = ({ navigation }) => {
  ;<TouchableWithoutFeedback
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
}
export default Initial
