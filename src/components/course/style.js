import { Dimensions, StyleSheet } from 'react-native';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get('window').height;

const style = StyleSheet.create({

    container:{
        height: 300, 
        width: 170,
        marginLeft: 5,
        marginRight: 5
    },

    topImage:{
        width: 200,
        height: 100,
    },

    image_back:{
        height: 100,
        width: 170,
        borderRadius: 10
    },

    wrap_text:{
        width: 170,
        height: 100,
        // backgroundColor: 'blue'
    },

    topText: {
        marginTop: 5,
        marginBottom:5,
        fontSize: 16,
        // color: "#B2473E",
        color:"#996600",
        height:45,
        textAlignVertical: 'center',
    },

    bottomText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sub_text:{
        fontSize:14,
        color: 'rgba(0,0,0,0.5)',
        backgroundColor: '#FEC77D',
        padding: 5,
        borderRadius:5,
    },

    // sub_text_cus:{
    //     backgroundColor: '#EC870E',
    //     padding: 5,
    //     borderRadius:5,
    // },
});

export default style;