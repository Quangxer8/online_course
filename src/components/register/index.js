import React, { useEffect, useRef, useState } from 'react';
import style from './style';
import { Image, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Icon } from 'react-native-elements';
// import { connect } from 'react-redux';
// import * as types from '../../constant/ActionType';
import Loading from '../loading/index';
import { ValidateEmail } from '../../helper/index';
import { Picker } from '@react-native-community/picker';
import { Easing } from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
import { addNewUser } from '../../firestore/apiPut';


function Register( props) {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordAgain, setPasswordAgain ] = useState('');
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ gender, setGender ] = useState('nu');
    // const [ idTrainingProgram, setIdTrainingProgram ] = useState('');
    const [ validate, setValidate ] = useState({
        status: false,
        mess: ""
    });

    const [ statusNoti, setStatuNoti ] = useState({
        status: false,
        type: '',
        mess:'',
    });


    useEffect(()=>{
        // notification/
    },[]);

    //authentication

    

    // FUNCTION
    function registerAccount(){

        if( ValidateEmail(email) == false){
            setValidate({ status: true, mess: "Email của bạn không hợp lệ!" });
            return;
        }
        if( !name || !phone || !gender )
        {
            setValidate({ status: true, mess: "Bạn vui lòng nhập đủ thông tin!" });
            return;
        }
        if( password.length < 8)
        {
            setValidate({ status: true, mess: "Mật khẩu phải từ 8 ký tự trở lên!" });
            return;
        }
        if( !password.match(/.*[A-Z]+.*/) || !passwordAgain.match(/.*[0-9]+.*/)){
            setValidate({ status: true, mess: "Mật khẩu phải có ít nhất 1 chữ in hoa và 1 ký tự số!" });
            return;
        }
        if( password !== passwordAgain)
        {
        setValidate({ status: true, mess: "Mật khẩu không trùng khớp!" });
        return;
        }
        const data = {
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            password: password,
            password1: passwordAgain,
            description : '',
            // idTrainingProgram: idTrainingProgram,
            
        }
        // props.registerAccount(data);

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Bạn đã đăng ký thành công!');
            addNewUser({name,email,phone,gender})
            setStatuNoti({status: true, type:'success', mess:'Bạn đã đăng ký email thành công !!!'});
            setTimeout(() =>{
                setStatuNoti({status: false, type:'', mess:''});
                props.navigation.navigate('login'); 
            }, 2000);
            
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                setStatuNoti({status: true, type:'false', mess:'Địa chỉ email đã được sử dụng !!!'});
                setTimeout(() =>{
                    setStatuNoti({status: false, type:'', mess:''});
                }, 2000);
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                setStatuNoti({status: true, type:'false', mess:'Địa chỉ email không hợp lệ !!!'});
                setTimeout(() =>{
                    setStatuNoti({status: false, type:'', mess:''});
                }, 2000);
            }

            // console.error(error);
        });

    }

    // const notification = (notificationError, notificationSuccess) =>{
    //     if(props.message == ''){
    //         return(<View></View>);
    //     }else{
    //         if( props.status ==  true) { 
    //             setTimeout(() =>{props.navigation.navigate('login')}, 2000);
    //             return notificationSuccess;};
    //         if( props.status == false) { 
    //             return notificationError; };
    //     }
    //     return <View></View>;
    // };

    const notification = (notificationError, notificationSuccess) =>{
        if(statusNoti.type == 'success'){
            return notificationSuccess;
        }
        if(statusNoti.type == 'false'){
            return notificationError;
        }
        return <View></View>;
    };

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
            <Text style={{color: "rgba(198, 0, 0, 1)", fontSize: 18, width: "84%", textAlign: "center", marginTop: 35}}>{validate.mess}</Text>
            <TouchableOpacity
            opacity= {0.5}
            onPress = {() => setValidate({status: false, mess: ""})}
            style = {{width: 80, height :40, marginTop: 30, backgroundColor: "rgba(198, 0, 0, 1)", alignItems: "center", justifyContent: "center", borderRadius: 10, zIndex: 10}}
            >
                <Text style={{fontSize: 18, color: "white", zIndex: 99 }}>OK</Text>
            </TouchableOpacity>           
        </View>
    </View>

    //animated
    const value = useRef(new Animated.Value(0)).current;
    function animation(start, end) {
        value.setValue(start);
        console.log("abv");
        Animated.timing(
            value,{
                toValue: end,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start();
        
    }
    const translateY = value.interpolate({
        inputRange: [0 , 1],
        outputRange: [0, -180]
    })


    return (
        <View style = {style.container} >
            <View style={{backgroundColor: "#CFCFCF", }}>
                <Image style={style.imageBackground} source={require('../../assets/images/back.jpg')} />
            </View>
            <Animated.View style={{position: "absolute", alignItems: "center",width: "100%",height: "100%",transform:[{translateY: translateY}]}}> 
                <View style={{width: "100%"}}>
                    <Icon name="graduation-cap" type="font-awesome" size={60} style={style.logo} color="rgb(217, 83, 79)"/>
                </View>
                <View style={style.subInput}>
                    <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8}}>EMAIL *</Text>
                    <TextInput style = {style.input} textContentType = "username" underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setEmail(text) } value={email}/>
                    <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8, marginTop: 15}}>PASSWORD *</Text>
                    <TextInput style = {style.input} textContentType ="password" secureTextEntry = {true} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {text => setPassword(text)} value={password} />
                    <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8, marginTop: 15}}>RE-ENTER THE PASSWORD *</Text>
                    <TextInput style = {style.input} textContentType ="password" secureTextEntry = {true} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {text => setPasswordAgain(text)} value={passwordAgain} />
                    <View style={{width: "100%", display: "flex", flexDirection:"row"}}>
                        <View style={{width:"50%",}}>
                            <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8, marginTop: 15}}>PHONE *</Text>
                            <TextInput style = {style.input} textContentType = "username" onFocus = {()=>animation(0,1)} onBlur={()=>animation(1,0)} underlineColorAndroid = "rgba(0,0,0,0)" onChangeText = {(text)=> setPhone(text) } value={phone}/>
                        </View>
                        <View style={{width: "50%", alignSelf: "flex-end", alignItems: "flex-end"}}>
                            <View style ={{width:"80%", borderBottomColor: "rgba(217, 83, 79,0.3)", borderBottomWidth: 2}}>
                                <Picker
                                selectedValue={gender}
                                onValueChange={(itemValue) => {setGender(itemValue)}}
                                style={style.dropdownPic}
                                mode = "dialog"                              
                                >
                                    <Picker.Item color = "black" label="Nam" value="nam" />
                                    <Picker.Item label="Nữ" value="nu" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    {/* <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8, marginTop: 15}}>TRAINING PROGRAM</Text> */}
                    {/* <View style ={{width:"100%", borderBottomColor: "rgba(217, 83, 79,0.3)", borderBottomWidth: 2}}>
                        <Picker
                        selectedValue={idTrainingProgram}
                        onValueChange={(itemValue) => {setIdTrainingProgram(itemValue)}}
                        style={style.dropdownPic}
                        mode = "dialog"
                        
                        >
                            {props.trainingPrograms && props.trainingPrograms.map((item, key)=>{
                            return <Picker.Item label={item.name} value={item["_id"]} key= {key} />
                            })}
                        </Picker>
                    </View> */}
                    <Text style={{color:"rgb(217, 83, 79)", fontWeight:"700", fontSize:13, opacity: 0.8, marginTop: 15}}>NAME</Text>
                    <TextInput style = {style.input} textContentType = "username" underlineColorAndroid = "rgba(0,0,0,0)"  onFocus = {()=>animation(0,1)} onBlur={()=>animation(1,0)}  onChangeText = {(text)=> setName(text) } value={name}/>
                    
                </View>
                <View style = {style.subTouch}>
                    <TouchableOpacity 
                    onPress = {registerAccount}
                    activeOpacity= {0.5}
                    >
                        <Text style={style.touchRegister}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            {statusNoti.status == false ? <></> : notification(notificationError, notificationSuccess)}
            {/* { statusNoti == true ? notificationSuccess : <></>} */}
            {validate.status == true ? errorValidate : <View></View>}
        </View>
    )
}

// const mapStateToProps = (state) =>{
//         const loading = state.loading.loading;
//         const status = state.user.status;
//         const message = state.user.message;
//         return { loading, status, message};
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         registerAccount: (data) => dispatch({ type: types.CREATE_USER, data }),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register;