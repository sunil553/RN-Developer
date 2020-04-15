import React, { useState } from "react"
import { View, Button,StyleSheet, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Feather} from "@expo/vector-icons"
import SearchBar from "./views/SearchBar"
import yelp from "./api/yelp"
const HomeResturants  = () => {
    const[term , setTerm] = useState('')
    const[result,setResult] = useState([])
    const searchApi = async () =>{
       const response = await yelp.get('/cities',{
           params:{
           q:"New"
           }
       }
       );
       setResult(response.data)
       console.log(response.data)
        }
    return(
        <View>
            <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmitted={() =>searchApi()}
            ></SearchBar> 
            <Text>{result.length}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 18, 
        backgroundColor:'white',
        height:35,
        margin:10,
        marginHorizontal:0,
        borderRadius:10
    }
});


export default HomeResturants