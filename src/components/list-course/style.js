import { Dimensions, StyleSheet } from 'react-native';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

const style = StyleSheet.create({
    container: {
        height: 260,
        width:widthScreen,
        // backgroundColor:"red"
    },

    bottom_view:{
        width:widthScreen,
        alignItems: 'center',
        height:40,
        // backgroundColor: 'yellow'
    },

    touch:{
        width: 150,
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:8,
        borderWidth:2,
        borderColor:'rgba(0,0,0,0.6)'
    },

    text:{
        color: 'rgba(0,0,0,0.6)',
        fontSize:18,
        fontWeight: 'bold',
        width:100,
        textAlign:'center',
    }
})

export default style;