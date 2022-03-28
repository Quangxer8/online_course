import { Dimensions } from 'react-native';
import { Dimensionsm, StyleSheet } from 'react-native';


const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

const style = StyleSheet.create({
    container:{
        height: 150,
    },

    wraper: {
        height:"100%",

    },

    item_faculty: {
        height: "100%",
        width: 190,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 5
    },  

    text_name: {
        fontSize: 16,
        width: "100%",
        color: "rgba(0,0,0,0.7)",
        textAlign: 'center',
        fontFamily: 'Esteban-Regular',
    },

});

export default style;
