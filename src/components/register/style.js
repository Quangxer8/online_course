
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
    },

    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: 0.1,
    },

    wrapper: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },

    logo:{
        marginTop: 30,
    },

    subInput: {
        marginTop: 30,
        width:"86%",
        overflow: "hidden",
    },

    input: {
        borderBottomWidth:2,
        borderBottomColor: "rgba(217, 83, 79,0.3)",
        padding:0,
        color: "rgba(0,0,0,0.5)",
        fontSize: 18,
        fontWeight:"600",
    },

    dropdownPic:{
        width: "100%",
        color: "rgba(0,0,0,0.5)",
    },  


    subTouch: {
        width: "86%",
    },

    touchRegister: {
        color:"rgba(255,255,255,0.8)",
        textAlign: "center", 
        fontSize: 16, 
        fontWeight: "700", 
        backgroundColor : "rgba(217, 83, 79, 0.8)",
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 45,
        borderRadius: 15
    },

});

export default style;