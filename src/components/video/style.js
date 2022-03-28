import { Dimensions, StyleSheet } from 'react-native';
import {} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const style = StyleSheet.create({

    container: {
        flex: 1,
    },

    video_audio:{
        width: widthScreen,
        height: heightScreen/2,
        backgroundColor:"rgba(0,0,0,0.8 )",
        zIndex: 1 
    },

    touchble:{
        width: widthScreen,
        height: heightScreen/2,
        zIndex: 1 
    },

    view_control:{
       position: "absolute",
       width: widthScreen,
       height: heightScreen/2,
    //    zIndex: 0,    
       justifyContent: 'center',
       backgroundColor: "rgba(0,0,0,0.7)",

    },

    control_detail:{
        flexDirection: 'row',
        width: widthScreen,
        justifyContent: 'center'
    },

    control_mid: {
        position: 'relative',
        // backgroundColor: "black",
        width: 50,  
        height: 50,
        marginLeft:70,
        marginRight: 70,
        zIndex: 10
    },

    control_left:{
        width: 50,  
        height: 50,
    },
    
    control_right:{
        width: 50,  
        height: 50,
    },

    view_slider:{
        height: 70,
        width: widthScreen,
        transform: [{translateY: 80}],
        // backgroundColor: 'red'
    },

    time_start_end:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // transform: [{translateX: 160}]??
    },

    text_end_time:{
        transform: [{translateY: 0}, {translateX: -30}],
    },

    text_start_time:{
        transform: [{translateY: 0}],
    },

    slider:{
        height: 50,
        width: widthScreen,
        flexDirection: 'row',
        // backgroundColor: "yellow"
    },

    slide_detail:{
        width: widthScreen*80/100,
        marginLeft:5,
        // backgroundColor: "red"
    },

    zoom_out:{
        // transform: [{translateX:10}, {translateY: 10}],
        // width: widthScreen*15/100,
        // paddingRight:20,
        zIndex: 10,
        // backgroundColor: 'blue',
        // paddingBottom:15,
        width:80,
        height:80
    },  



    /// CONTAINER FULL SCREEN///
    container_full:{
        width: widthScreen,
        // heightScreen: 
    },

    touchble_full:{
        width: widthScreen,
        height:heightScreen,
        zIndex:1
    },

    video_audio_full:{
        width: heightScreen,
        height: widthScreen,
        transform: [{rotate: '90deg'}],
        position: 'absolute',
        top: heightScreen*22/100,
        right: -widthScreen*39/100,  
        // zIndex: 1
    },

    view_control_full:{
        position: "absolute",
       width: widthScreen,
       height: heightScreen,
    //    zIndex: 0,    
       justifyContent: 'center',
       backgroundColor: "rgba(0,0,0,0.7)",
        // backgroundColor: "red"
       flexDirection: 'row-reverse'
    },

    control_detail_full:{
        flexDirection: 'column',
        height: heightScreen,
        justifyContent: 'space-around',
    },

    control_mid_full:{
        transform: [{rotate: '90deg'}]
    },

    control_left_full:{
        transform: [{rotate: '90deg'}]
    },

    control_right_full:{
        transform: [{rotate: '90deg'}]
    },


    view_slider_full:{
        height: heightScreen,
        width: 91,
        flexDirection: 'row-reverse',
        position: 'relative',
        // backgroundColor: "red",
        transform: [{translateX: -130}]
    },

    slider_full:{
        // position: 'absolute',
        // left: 110,
        width: 70,
        height: heightScreen,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'blue',
    },

    time_start_end_full:{
        height: heightScreen,
        width: 20,
        flexDirection: 'column',
        justifyContent:'space-between',
        // backgroundColor:'red'
    },

    text_start_time_full:{
        width: 70,
        justifyContent: 'center',
        transform:[{rotate: '90deg'},{translateX:30}, {translateY: 35}  ] 
    },

    text_end_time_full:{
        justifyContent: 'center',
        width: 70,
        transform:[{rotate: '90deg'},{translateX:-100}, {translateY: 35} ]  
    },


    slide_detail_full:{
        height: 50,
        width: heightScreen*80/100,
        transform: [{rotate: '90deg'}, {translateX: 245}, {translateY: 215} ],
        // backgroundColor:"red"
    },

    zoom_out_full:{
        transform:[{translateX: 5}, {translateY: -10}],
        width: 80,
        height: 80,
        // backgroundColor: 'yellow',
    },

    //view_name
    view_name:{
        width: widthScreen,
        height: heightScreen/2,
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center'
    },

    textCourse:{
        width: widthScreen,
        textAlign: 'center',
        marginTop:30,
        fontSize: 30,
        fontWeight: 'bold',
    },

    textVideo:{
        width: widthScreen,
        textAlign: 'center',
        marginTop:5,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default style;