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

    logo: {
        marginTop: 150,
    },

    signUp: {
        marginTop: 170,
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 1,
        width: "80%",

    },

    login:{
        marginTop: 15,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        width: "80%",
    },

   
})

export default style;