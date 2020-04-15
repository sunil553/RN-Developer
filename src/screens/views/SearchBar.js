import React from "react"
import { View, Button, StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({term,onTermChange,onTermSubmitted}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search"  style={styles.iconStyle}></Feather>
            <TextInput 
            style={styles.textstyle} 
            placeholder="Search"
            value={term}
            autoCapitalize='none'
            onChangeText={onTermChange}
            onEndEditing={onTermSubmitted}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 10,
        flexDirection: "row",
        borderColor: 'red',
        borderWidth: 5,
    },
    iconStyle: {
        alignItems: "center",
        fontSize: 35,
        marginHorizontal:10
    },
    textstyle: {

        // borderColor: 'null',
        // borderWidth: 5,
        flex: 1

    }
});


export default SearchBar