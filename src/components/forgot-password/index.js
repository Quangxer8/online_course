import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import style from './style';
import {rootURL} from '../../constant/Api';
import { ValidateEmail } from '../../helper/index';
import { loadding } from '../../actions';
import Loading from '../loading';
import auth from '@react-native-firebase/auth';

function ForgotPassword(props){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ passwordAgain, setPasswordAgain ] = useState('');
    const [ token, setToken ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ display, setDisplay ] = useState(true);
    const [ validate, setValidate ] = useState({
        status: false,
        color: "rgba(198, 0, 0, 1)",
        mess: ""
    });

    const [ statusNoti, setStatuNoti ] = useState({
        status: false,
        type: '',
        mess:'',
    });
    //funnction async

    async function asyncSendEmail(){
        const resp = await fetch(rootURL + "/forgot-password",{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(res => {
            setLoading(false);
            if(res.message == "đã gửi mail thành công"){
                setValidate({ status: true,color: "rgba(0, 139, 0, 1)", mess: res.message });        
                setTimeout(()=>setDisplay(false), 2000);
            }
            if(res.message == "email không tồn tại"){
                setValidate({ status: true,color: "rgba(198, 0, 0, 1)", mess: res.message });
            }
        })
        .catch(err => console.error(err))
    }

    async function asyncResetPassword(){
        const resp = await fetch(rootURL + "/reset-password", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, token: token, password: password })
        })
        .then(res => res.json())
        .then(res =>{
            setLoading(false);
            if(res.errors){
                setValidate({ status: true, color: "rgba(198, 0, 0, 1)", mess: res.errors.msg });
            }
            if(res.message){ setValidate({ status: true,color: "rgba(198, 0, 0, 1)", mess: res.message});}
            if(res._id){ 
                setValidate({ status: true,color: "rgba(0, 139, 0, 1)", mess: "Bạn đã cập nhật mật khâu thành công!!!"});
                setTimeout(()=>props.navigation.navigate('login'), 2000);
            }
        })
        .catch(err=> console.error(err))
    }


    //function 
    function sendEmail (){
        if(!ValidateEmail(email)){
            setValidate({ status: true, color: "rgba(198, 0, 0, 1)" ,mess: "Email của bạn không hợp lệ!" });
            return;
        }      
        setLoading(true);
        asyncSendEmail()
    }

    function resetPassword(){
        if(!ValidateEmail(email)){
            setValidate({ status: true,color: "rgba(198, 0, 0, 1)", mess: "Email của bạn không hợp lệ!" });
            return;
        }
        if( newPassword.length < 8)
        {
            setValidate({ status: true,color: "rgba(198, 0, 0, 1)", mess: "Mật khẩu phải từ 8 ký tự trở lên!" });
            return;
        }
        if( !newPassword.match(/.*[A-Z]+.*/) || !passwordAgain.match(/.*[0-9]+.*/)){
            setValidate({ status: true,color: "rgba(198, 0, 0, 1)", mess: "Mật khẩu phải có ít nhất 1 chữ in hoa và 1 ký tự số!" });
            return;
        }
        if( newPassword !== passwordAgain)
        {
            setValidate({ status: true,color: "rgba(198, 0, 0, 1)", mess: "Mật khẩu không trùng khớp!" });
            return;
        }
        // setLoading(true);
        // asyncResetPassword();
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                userCredential.user.updatePassword(newPassword)
                .then(()=>{
                    setStatuNoti({status: true, type:'success', mess:'Bạn đã cập nhật password thành công !!!'});
                    setTimeout(() =>{
                        setStatuNoti({status: false, type:'', mess:''});
                        props.navigation.goBack()
                    }, 2000);
                })
                
            })
    }


    const notification = (notificationError, notificationSuccess) =>{
        if(statusNoti.type == 'success'){
            return notificationSuccess;
        }
        if(statusNoti.type == 'false'){
            return notificationError;
        }
        return <View></View>;
    };


    // notification

    let notificationError = <View style={{width: "100%", height: "100%", position: "absolute", zIndex: 9, alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center"}}>
        <View style={{width: "90%", height: "15%", alignItems: "center", backgroundColor: "rgba(255, 250, 210, 1)", borderRadius: 15, justifyContent: "center"}}>
            <Text style={{color: "rgba(198, 0, 0, 1)", fontSize: 18, width: "84%", textAlign: "center"}}>{statusNoti.mess}</Text>
        </View>
    </View>

    let notificationSuccess = <View style={{width: "100%", height: "100%", position: "absolute", zIndex: 9, alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center"}}>
            <View style={{width: "90%", height: "15%", alignItems: "center", backgroundColor: "rgba(255, 250, 210, 1)", borderRadius: 15, justifyContent: "center"}}>
                <Text style={{color: "rgba(0, 139, 0, 1)", fontSize: 18, width: "84%", textAlign: "center"}}>{statusNoti.mess}</Text>
            </View>
        </View>

    const errorValidate = <View style={{width: "100%", height: "100%", position: "absolute", zIndex: 9, alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center"}}>
        <View style={{width: "90%", height: "30%", alignItems: "center", backgroundColor: "rgba(255, 250, 210, 1)", borderRadius: 15}}>
            <Text style={{color: validate.color, fontSize: 18, width: "84%", textAlign: "center", marginTop: 35}}>{validate.mess}</Text>
            <TouchableOpacity
            opacity= {0.5}
            onPress = {() => setValidate({status: false,color:"rgba(198, 0, 0, 1)" ,mess: ""})}
            style = {{width: 80, height :40, marginTop: 30, backgroundColor: validate.color, alignItems: "center", justifyContent: "center", borderRadius: 10, zIndex: 10}}
            >
                <Text style={{fontSize: 18, color: "white", zIndex: 99 }}>OK</Text>
            </TouchableOpacity>           
        </View>
    </View>

    const sendEmailFor = <View style={{width:"100%", height: "100%", alignItems: "center"}}>
        <View style = {style.subInput}>
            <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:16, opacity: 0.8}}>Vui lòng nhập email !!!</Text>
            <TextInput style = {style.input} textContentType = "username" underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setEmail(text) } value={email} placeholder="Email..."/>
        </View>
        <View style = {style.subTouch}>
            <TouchableOpacity 
            onPress = {sendEmail}
            activeOpacity= {0.5}
            >
                <Text style={style.touchLogin}>SEND EMAIL</Text>
            </TouchableOpacity>
        </View>
    </View>

    const reset = <View style={{width:"100%", height: "100%", alignItems: "center"}}>
        <View style = {style.subInput}>
            <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:16, opacity: 0.8}}>Email *</Text>
            <TextInput style = {style.input} textContentType = "username" underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setEmail(text) } value={email} placeholder="Email..."/>
            <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:16, opacity: 0.8, marginTop: 15}}>Password *</Text>
            <TextInput style = {style.input} textContentType = "username" secureTextEntry = {true} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setPassword(text) } value={password} placeholder="Password..."/>
            <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:16, opacity: 0.8, marginTop: 15}}>New Password *</Text>
            <TextInput style = {style.input} textContentType = "username" secureTextEntry = {true} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setNewPassword(text) } value={newPassword} placeholder="New Password..."/>
            <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:16, opacity: 0.8, marginTop: 15}}>RE-ENTER THE PASSWORD *</Text>
            <TextInput style = {style.input} textContentType = "username" secureTextEntry = {true} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setPasswordAgain(text) } value={passwordAgain} placeholder="Re-enter the password..."/>
        </View>
        <View style = {style.subTouch}>
            <TouchableOpacity 
            onPress = {resetPassword}
            activeOpacity= {0.5}
            >
                <Text style={style.touchLogin}>CHANGE PASSWORD</Text>
            </TouchableOpacity>
        </View>
    </View>

    return (
        <View style = {style.container}>
            <View style={{backgroundColor: "#CFCFCF"}}>
                <Image style={style.imageBackground} source={require('../../assets/images/back.jpg')} />
            </View>
            <View style={style.wrapperAll}>
                <Icon name="graduation-cap" type="font-awesome" size={60} style={{marginTop: 70}} color="rgb(217, 83, 79)"  />
                <Text style={{color: "rgb(217, 83, 79)", fontSize: 26}}>ONLINE COURSE</Text>
                {display == false    ? sendEmailFor : reset }
            </View >
            
            {/* {loading == true ? <Loading/> : <View></View>} */}
            {statusNoti.status == false ? <></> : notification(notificationError, notificationSuccess)}
            {validate.status == true ? errorValidate : <View></View>}
        </View>
    )  
}

export default ForgotPassword;