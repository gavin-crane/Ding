
import { GluestackUIProvider, Text, Box, Button } from "@gluestack-ui/themed"
import {useEffect } from 'react';
import { StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

// import testImage from assests
import testImage from '../../../assets/testImage.jpeg';


// 2023 11 28 18 04 07
const thumnails = [
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
    testImage,
]
const Thumbnail = ({thumbnail, date, link}) => {
    let testDate = "20231128180407";

    // split the date into year, month, day, hour, minute, second and add dashes
    newDate = testDate.slice(0, 4) + "-" + testDate.slice(4, 6) + "-" + testDate.slice(6, 8) + " " + testDate.slice(8, 10) + ":" + testDate.slice(10, 12) + ":" + testDate.slice(12, 14);
    console.log(newDate);
    return (
       
            
            <ImageBackground style={styles.thumbnail} source={thumbnail}> 
                <Text>{newDate}</Text>
            </ImageBackground>
        
    );
}



export const Recordings = ({route, navigation}) => { 
    
    // const { itemId, otherParam } = route.params;

    useEffect(() => {
        console.log('Recordings mounted');

        return () => {
            console.log('Recordings unmounted');
        };
    }, []);

    return (
        <>
            <Text>
                Recordings
            </Text>
            {/* <Text>
                id: {JSON.stringify(itemId)}
            </Text>
            <Text>
                otherParam: {JSON.stringify(otherParam)}
            </Text> */}
            <ScrollView>
                <Box style={styles.thumbnailContainer}>
                    {thumnails.map((thumbnail, index) => {
                        return <Thumbnail key={index} thumbnail={thumbnail}/>
                    }
                    )}
                </Box>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    thumbnailContainer: { 
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        gap: 10,

        
    },

    thumbnail: { 
        // Without height undefined it won't work
        width: '100%',
        height: undefined,
        // figure out your image aspect ratio
        aspectRatio: 16 / 9,
        backgroundColor: "rgba(0, 100, 24, 0.7)",
       
    }
});
export default Recordings;