// create a component called LiveFeed react native component

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  
        View, 
        SafeAreaView,
        statusBar,
        platform
} from 'react-native';
import { GluestackUIProvider, Text, Box, Button } from "@gluestack-ui/themed"

import RenderUnderStatusBar from '../../Layouts/RenderUnderStatusBar';

import { useEffect, useState } from 'react';

export const LiveFeed = ({ navigation }) => {
    useEffect(() => {
        console.log('LiveFeed mounted');
        console.log('Height on: ', Platform.OS, StatusBar.currentHeight);

        return () => {
            console.log('LiveFeed unmounted');
        };
    }, []);

    return (
        // <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        //     <StatusBar style="auto"/>
        //         <View style={{...styles.container, marginTop: StatusBar.currentHeight}}>
        //             <Text>LiveFeed</Text>
        //         </View>
        // </SafeAreaView>
        <>
        <RenderUnderStatusBar>
            <Box style={styles.container}>
                <Text>Hello</Text>
            </Box>
        </RenderUnderStatusBar>
        <Button onPress={() => navigation.navigate('Recordings', {
            itemId: 86,
            otherParam: 'anything you want here',
          }
        )}
        
        ><Text>Go to Recordings</Text></Button>
        <Button onPress={() => navigation.push('LiveFeed')}><Text>Go to LiveFeed</Text></Button>

        </>
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      backgroundColor: "rgba(0, 100, 24, 0.7)",
    //   backgroundColor: "rgba(0, 0, 0, 0.7)",

      //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });

export default LiveFeed;

