import { Dimensions, StyleSheet } from "react-native";
import Esteban from '../../../android/app/src/main/assets/fonts/Esteban-Regular.ttf';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

const style = StyleSheet.create({
    container: {

    },

    category: {
        marginTop: 20,
        marginBottom: 30,
    },

    banner:{
        alignItems:'center',
        marginBottom: 20,
    },

    banner_text_top:{
        width:320,
        marginTop:15,
        color:'#2388e0',
        fontSize: 16,
        fontWeight:'bold'
    },

    banner_text_bot:{
        width:200,
        color:'#2388e0',
        fontSize: 24,
        fontWeight:'bold',
        textAlign: "center"
    },

    line:{
        alignContent: "space-between",
        flexDirection: 'row',
        marginBottom: 20,
        position: 'relative',
        height: 20,
    },

    line_left:{
        width: widthScreen/100*15,
        borderBottomWidth:2,
        borderColor:"#2388e0",
        position: "absolute",
        left: 5,
        top: 10,
    },

    line_between:{
        alignContent: "space-between",
        width: widthScreen/100*65,
        position: "absolute",
        left: widthScreen/100*15 + 5,      
    },

    line_right:{
        width: widthScreen/100*15,
        borderBottomWidth:2,
        position: "absolute",
        right:5,
        top:10,
        borderColor:"#2388e0",
    },

    title_name:{
        fontSize:16,
        textAlign: "center",
        color:"#2388e0",
        fontWeight:'bold'
    },

    imgBackground:{
        width: widthScreen-10,
        marginLeft:5,
        height: 250,
        borderRadius: 10,
    },


})

export default style;