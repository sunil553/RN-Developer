import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TextScreen from "./TextScreen";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
    return (
        <View style={styles.viewstyle}>
            <ScrollView>
                <TextScreen imageTitle='imageone' imageSource={require('../../assets/icon.png')} />
                <TextScreen imageTitle='imagetwo' imageSource={require('../../assets/icon.png')} />
                <TextScreen imageTitle='imagethree' imageSource={require('../../assets/icon.png')} />


            </ScrollView>

            {/* <Text style={styles.text}>Two</Text>
            <Image source={require('/assets/icon.png')}></Image>
            <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                style={{ width: 200, height: 200 }}
            /> */}
        </View>
    )
};


const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    viewstyle: {
        justifyContent: 'center',
        alignContent: 'flex-start'
    }
});

export default ProfileScreen;
