import React,  { useEffect, useRef, useState } from 'react';
import { Animated, Image, View } from 'react-native';
import { Easing, timing } from 'react-native-reanimated';
import style from './style';
import { connect } from 'react-redux';

function Loading(props){

    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
       animation();
    },[]);

    function animation(){
        spinValue.setValue(0);
        Animated.timing(
            spinValue,{
                toValue: 1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start(() => animation())
    }

    const action = spinValue.interpolate({
        inputRange: [0 , 1],
        outputRange: ['0deg', '360deg']
    })

    const viewLoading =<View style = {style.container}>           
        <Animated.Image
            style = {{transform: [{rotate: action}]}}
            source = {require('../../assets/images/loading.gif')}
        />
    </View>


    return props.loading == true ? viewLoading : <View></View>
}

// const mapStateToProps = (state) =>{
//     const loading = state.loading.loading;
//     return { loading };
// }


// export default connect(mapStateToProps,null)(Loading);
export default Loading;