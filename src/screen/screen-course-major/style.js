import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const style = StyleSheet.create({

    container:{
        width: widthScreen,
    },
})

export default style;