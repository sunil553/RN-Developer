import React, { useState } from "react"
import { View, StyleSheet, Button, Text } from "react-native"

const CounterScreen = () => {
    const [counter, setcounter] = useState(0)
const COUNTER_INCREMENT = 1
    const counterLogic = (type ,counter) => {
        console.log(counter)
        if(type === 'ADD') {
                setcounter(counter+COUNTER_INCREMENT)  
                console.log(counter)           
        } else{
                setcounter(counter-COUNTER_INCREMENT)
                console.log(counter)           
        }
       
        return counter
    
    };
    return (
        <View>
            <Text style={styles.textstyle}>{counter}</Text>
            <View style={styles.viewstyle}>

            <Button title='INCREMENT' onPress={() => {
                counterLogic("ADD",counter)
                // counter++
            }} />
            <Button title='DECREMENT' onPress={() => {
                counterLogic("SUB",counter)
            }} />
            </View>
           
        </View>
    )
};


const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        alignSelf: "center",
        fontWeight:"bold"
    },
    buttonstyle: {
        fontSize: 20,
        alignSelf: "center",
        margin:50
    },viewstyle: { 
        alignSelf: "center", 
        padding:50,
        fontWeight:"bold"
    }
});

export default CounterScreen;