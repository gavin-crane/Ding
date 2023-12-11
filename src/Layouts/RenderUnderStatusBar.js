import React, { Component } from 'react'
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native'

/**r
 * Screen Wrapper to apply padding space on status bar
 */
export const RenderUnderStatusBar = React.memo(props => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.textColor}>Hello World!</Text> */}
      {/* <StatusBar style="auto"/> */}
      {props.children}
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    //backgroundColor: "rgba(0, 0, 0, 0.7)",
    // alignItems: 'center'
  },
  textColor: {
    color: 'white'
  }
})

export default RenderUnderStatusBar
