import React, { useState } from "react"
import { View, StyleSheet, Button, Text } from "react-native"

const CounterScreen = () => {
    const [counter, setcounter] = useState(0)
const COUNTER_INCREMENT = 1
    const counterLogic = (type ,counter, countervalue) => {
        if(type === 'ADD') {
                setcounter(counter+1) 
            
        } else{
                setcounter(counter-1)
        }
       
        return counter
    
    };
    return (
        <View>
            <Text style={styles.textstyle}>{counter}</Text>
            <Button title='INCREMENT' onPress={() => {
                counterLogic("ADD",counter,COUNTER_INCREMENT)
                // counter++
            }} />
            <Button title='DECREMENT' onPress={() => {
                counterLogic("SUB",counter,COUNTER_INCREMENT)
            }} />
        </View>
    )
};


const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        alignSelf: "center"
    }
});

export default CounterScreen;