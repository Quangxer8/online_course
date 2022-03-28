import React, {} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import style from './style';    
import { Icon } from 'react-native-elements';
// import 'react-native-gesture-handler'

function UserStart({navigation}, props){

    //function 
    function onPressSignUp(){
        console.log("oke");
        navigation.navigate('register');
    }

    function onPressLogin(){      
        console.log("oke");
        navigation.navigate('login');
    }
    return( <View style={style.container}>
        <View style={{backgroundColor: "rgb(217, 83, 79)"}}>
            <Image style={style.imageBackground} source={require('../../assets/images/back.jpg')} />
        </View>
        <View style={style.wrapperAll}>
            <Icon name="graduation-cap" type="font-awesome" size={60} style={style.logo} color="white"  />
            <Text style={{color: "white", fontSize: 26}}>ONLINE COURSE</Text>
            <View style={{width: "90%",  alignItems: "center"}}>
                <TouchableOpacity
                activeOpacity ="0.5"
                onPress = {onPressSignUp}
                style = {style.signUp}
                >
                    <Text style = {{width: "100%", textAlign: "center", paddingTop: 7, paddingBottom: 7 ,color: "white", fontWeight:"700", fontSize: 16}}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity ="0.5"
                onPress = {onPressLogin}
                style = {style.login}
                >
                    <Text style = {{width: "100%", textAlign: "center", paddingTop: 7, paddingBottom: 7 , color: "rgb(217, 83, 79)", fontWeight:"700", fontSize: 16}}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        </View>
    </View>)
}

export default UserStart;