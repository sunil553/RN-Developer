import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.viewstyle}>
            <Text style={styles.text}>One</Text>
            <Text style={styles.text}>Two</Text>
            <Image source={require('/assets/icon.png')}></Image>
            <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    viewstyle: {
        backgroundColor: '#00FF00', 
        alignSelf: "flex-start"
    }
});

export default ProfileScreen;
