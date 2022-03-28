import { Dimensions, StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const style = StyleSheet.create({

    container:{
        width: widthScreen/100*92,
        marginLeft: widthScreen/100*3,
        // color: 'black'
    },

    top:{
        width: widthScreen/100*92,
    },

    name:{
        width: widthScreen/100*92,
        textAlign: 'center'
    },

    title:{
        color: 'rgba(0,0,0,0.8)',
        fontSize: 20,
        fontWeight: 'bold'
    },

    mid_video:{
        marginTop: 15,
        marginBottom:15
    },

    list_video:{
        height:40,
        // backgroundColor:'blue',
        width: widthScreen/100*92,
        borderWidth:1,
        borderRadius:10, 
        marginTop: 5,
    },

    video:{
        flexDirection: "row",
        height:40,
        width: widthScreen/100*92,
        // backgroundColor: 'red',
        
    },  

    text_des:{
        width: widthScreen/100*92 - 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'rgba(0,0,0,0.8)',
        
    },
    
    icon_play:{
        // backgroundColor: "yellow",
        width: 50,
        height: 40,
        alignContent: "center",
        justifyContent: "center"
    },

    bottom_pdf:{},

});

export default style;