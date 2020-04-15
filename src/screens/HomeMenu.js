import { View, Button ,StyleSheet} from "react-native"
import React from "react"

const HomeMenu = (props) => {
    return(
        <View>
            <Button title="Restarents" onPress={() => props.navigation.navigate('homeresturant')}></Button>
            <Button title="Menu" ></Button>
        </View>
        )
}


const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        alignSelf: "center"
    }
});

export default HomeMenu;