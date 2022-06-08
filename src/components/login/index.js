import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './style';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { LOGIN } from '../../constant/ActionType';
import auth from '@react-native-firebase/auth';


function Login (props){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ notificationError, setNotificationError ] = useState({
        status: false,
        mess: ''
    })

    //function
    const LoginEmail = () =>{
        // console.log("oke1")
        // const data = {email, password};
        // props.login(data);
        if(email=='' || password == ''){ 
            setNotificationError({status: true, mess: "Bạn phải nhập đầy đủ thông tin Email và Password !!!"})
        }
        else{ auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('bạn đã đăng nhập thành công!!!!');
                props.navigation.navigate('home');
            })
            .catch(error => {
                // if (error.code === 'auth/email-already-in-use') {
                // console.log('That email address is already in use!');
                // }

                // if (error.code === 'auth/invalid-email') {
                // console.log('That email address is invalid!');
                // }
                setNotificationError({status: true, mess: "Mật khẩu không chính xác hoặc tài khoản email không tồn tại !!!"})
                console.log(error);
            });
        }
    }


    const pressForgotPass = () =>{
        props.navigation.navigate('forgotPassword');
    }

    function loginFacebook() {
        props.navigation.navigate('home');
    }

    function loginGoolge() {
        props.navigation.navigate('mess-all');
    }


    const errorValidate = <View style={{width: "100%", height: "100%", position: "absolute", zIndex: 9, alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center"}}>
        <View style={{width: "90%", height: "30%", alignItems: "center", backgroundColor: "rgba(255, 250, 210, 1)", borderRadius: 15}}>
            <Text style={{color: "rgba(198, 0, 0, 1)", fontSize: 18, width: "84%", textAlign: "center", marginTop: 35}}>{notificationError.mess}</Text>
            <TouchableOpacity
            opacity= {0.5}
            onPress = {() => setNotificationError({status: false, mess: ""})}
            style = {{width: 80, height :40, marginTop: 30, backgroundColor: "rgba(198, 0, 0, 1)", alignItems: "center", justifyContent: "center", borderRadius: 10, zIndex: 10}}
            >
                <Text style={{fontSize: 18, color: "white", zIndex: 99 }}>OK</Text>
            </TouchableOpacity>           
        </View>
    </View>

    return(<View style={style.container}>
        <View style={{backgroundColor: "#CFCFCF"}}>
            <Image style={style.imageBackground} source={require('../../assets/images/back.jpg')} />
        </View>
        <View style = {style.wrapper}>
            <Icon name="graduation-cap" type="font-awesome" size={60} style={style.logo} color="rgb(217, 83, 79)" />
            <View style={style.subInput}>
                <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8}}>USERNAME</Text>
                <TextInput style = {style.input} textContentType = "username" underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setEmail(text) } value={email}/>
                <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8, marginTop: 15}}>PASSWORD</Text>
                <TextInput style = {style.input} textContentType ="password" secureTextEntry = {true} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {text => setPassword(text)} value={password} />
            </View>
            <View style = {style.subTouch}>
                <TouchableOpacity 
                onPress = {pressForgotPass}
                activeOpacity= {0.5}
                >
                    <Text style={{marginTop: 5,fontSize: 15 , color: "white", textAlign: "right"}}>Forgot password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {LoginEmail}
                activeOpacity= {0.5}
                >
                    <Text style={style.touchLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style = {style.subEnd}>
                <Text style= {{color: "rgba(0,0,0, 0.6)", fontWeight: "700", fontSize: 17, textAlign: "center"}}>OR CONNECT WITH</Text>
                <View style={{flexDirection: "row",alignContent:"space-between", width: "100%", marginTop: 15}}>
                    <TouchableOpacity
                    onPress ={ loginFacebook}
                    style ={style.facebookIcon}
                    >
                        <View style={{flexDirection: "row",}}>
                            <Icon name="facebook" type="fontisto" color="white"  />
                            <Text style={{fontSize: 15, fontWeight: "700", color: "white", marginLeft: 5, width: "60%"}}>FACEBOOK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style ={style.googleIcon}
                        onPress ={ loginGoolge}
                        >
                            <View style={{flexDirection: "row",}}>
                                <Icon name="google-" type="entypo" color="white"  />
                                <Text style={{fontSize: 15, fontWeight: "700", color: "white", marginLeft: 5, width: "60%"}}>GOOGLE</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        {notificationError.status == true ? errorValidate : <></>}
    </View>)
}

const mapStateToProps =  (state) => {
    const user = state.login.user;
    const error = state.login.error;
    const isLogedIn = state.login.isLogedIn;
    return { user, error, isLogedIn };
}
const mapDispatchToProps = ( dispatch ) => {
    return{
        login: (data) => dispatch({ type : LOGIN, data}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);