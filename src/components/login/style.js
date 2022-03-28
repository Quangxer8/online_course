import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
    },

    imageBackground:{
        width: "100%",
        height: "100%",
        opacity: 0.1,

    },

    wrapper:{
        position: "absolute",
        width: "100%",
        height:"100%",
        alignItems: "center",
    },

    logo: {
        marginTop: 80,
    },

    subInput: {
        marginTop: 50,
        width:"86%",

    },

    input: {
        borderBottomWidth:2,
        borderBottomColor: "rgba(217, 83, 79,0.3)",
        padding:0,
        color: "rgba(0,0,0,0.5)",
        fontSize: 18,
        fontWeight:"600",
    },

    subTouch: {
        width: "86%",
    },

    touchLogin: {
        color:"rgba(217, 83, 79, 0.8)", 
        textAlign: "center", 
        fontSize: 16, 
        fontWeight: "700", 
        backgroundColor : "rgba(255,255,255,0.8)",
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 25,
        borderRadius: 15
    },

    subEnd:{
        width: "86%",
        marginTop: 45,
    },

    facebookIcon:{
        backgroundColor: "#3B5998",
        alignItems: "center",
        width: "45%",
        paddingBottom: 10,
        paddingTop: 10,
    },

    googleIcon: {
        backgroundColor: "rgba(217, 83, 79, 1)",
        alignItems: "center",
        width: "45%",
        paddingBottom: 10,
        paddingTop: 10, 
        marginLeft: "10%"
    },

})

export default style;