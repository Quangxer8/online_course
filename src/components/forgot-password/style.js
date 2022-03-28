import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },

    imageBackground:{
        width:"100%",
        height:"100%",
        opacity: 0.1,
        zIndex: -1,
    },

    wrapperAll:{
        position: "absolute",
        width:"100%",
        height: "100%",
        alignItems: "center",
        zIndex: 1,
        
    },

    subInput: {
        marginTop: 20,
        width:"86%",

    },

    input: {
        // borderBottomWidth:2,
        // borderBottomColor: "rgba(217, 83, 79,0.3)",
        // borderTopWidth:2,
        // borderTopColor: "rgba(217, 83, 79,0.3)",
        borderBottomWidth:2,
        borderBottomColor: "rgba(217, 83, 79,0.3)",
        padding:0,
        color: "rgba(0,0,0,0.5)",
        fontSize: 18,
        fontWeight:"600",
        marginTop: 15,
        // height: 40
    },

    subTouch: {
        width: "86%",
        marginTop: 25
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
})

export default style;