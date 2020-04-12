// step 1 import statements
import React from "react";
import { Text, Image, StyleSheet, View } from "react-native"

// step 2 component 
const TextScreen = (props) => {
    console.log(props);

    return (
        <View>
            <Text
                style={styles.text}>{props.imageTitle}</Text>
                <View>
                    
                </View>
            <Image
                source={props.imageSource}></Image>
            <Image
                source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                style = {styles.container}  />
        </View>
    );
}

// step 3 component style
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        width: null,
        height: null,
        marginBottom: 20,
        justifyContent: 'center',
        borderRadius: 20,
    },
    image: {
        justifyContent: 'center'
    },
    container: {
        alignSelf:'flex-end',
        position: 'absolute',
            top: 50,
            bottom: 0,
            left: 250,
            right: 0,
      },
});

//   step 4 export componet
export default TextScreen;