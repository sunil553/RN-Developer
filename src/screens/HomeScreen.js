import React from "react";
import { Button, StyleSheet,TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props);
  return (
    <Button 
    onPress = {() => props.navigation.navigate('profile')} title = "HomeScreen"/>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    width:50,
    height:100
  }
});

export default HomeScreen;
