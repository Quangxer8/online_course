import { Dimensions, StyleSheet } from "react-native";

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const style = StyleSheet.create({
    container:{
        height: 120, 
        width: widthScreen,
        // marginLeft: 5,
        // marginRight: 5,
        flexDirection: 'row',
        // justifyContent: "center"
        // borderWidth: 1,
        marginTop: 5
    },

    topImage:{
        width: 190,
        height: 120,
        justifyContent: "center",
        alignItems: "center"
    },

    image_back:{
        height: 100,
        width: 170,
        borderRadius: 10
    },

    wrap_text:{
        width: widthScreen - 190,
        justifyContent: "center"
    },

    topText: {
        // marginTop: 5,
        marginBottom:15,
        fontSize: 16,
        // color: "#B2473E",
        color:"#996600",
        height:45,
        textAlignVertical: 'center',
    },

    
    bottomText: {
        flexDirection: 'row',
        // justifyContent: "space-around"
    },

    sub_text:{
        fontSize:14,
        color: 'rgba(0,0,0,0.5)',
        backgroundColor: '#FEC77D',
        padding: 5,
        borderRadius:5,
        marginRight: 10
    },

})

export default style;