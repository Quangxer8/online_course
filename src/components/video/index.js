import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Video from 'react-native-video';
import style from './style';
import {Icon, Slider} from 'react-native-elements';


function VideoCourse(props){

    const [paused, setPaused] =  useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0.1);
    const videoPlayer  = useRef(null);
    const [changeScreen, setChangeScreen] = useState(false);    

    const fadeView = useRef(new Animated.Value(0)).current;
    const index = useRef(new Animated.Value(0)).current;


    //get time in current time
    function gettime(t) {
        const digit = t => t  < 10 ? `0${t}` : `${t}`;

        const sec = digit(Math.floor(t % 60));
        const min = digit(Math.floor(t / 60) % 60);
        const hr = digit(Math.floor(t / 3600) % 60);
        return hr + ':' + min + ":" + sec;
    }

    function load(t) { const time = parseInt(t.duration);setDuration(time)}
    function progess(t) { const time = parseInt(t.currentTime);setCurrentTime(time);}

    function backward() {
        videoPlayer.current.seek(currentTime - 10);
        fadeIn();
        setTimeout(()=>fadeOut(), 3000);
        clearTimeout();
    }

    function forward() {
        videoPlayer.current.seek(currentTime + 10);
        fadeIn();
        setTimeout(()=>fadeOut(), 3000);
        clearTimeout();
    }

    const fadeIn = () => {
        Animated.timing(index, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true, 
        }).start();
        Animated.timing(fadeView, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    const fadeOut = () => {
        Animated.timing(fadeView, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true, 
        }).start();

        Animated.timing(index, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true, 
        }).start();
    }
    

    function changePause(){
        if(paused == false) {
            setPaused(true);    
            fadeIn();
            setTimeout(()=>fadeOut(), 3000);
            clearTimeout();
        }
        else{
            setPaused(false);  
            fadeIn();
            setTimeout(()=>fadeOut(), 3000);
            clearTimeout();    
        }
        
    }

    function appear(){
        fadeIn();
        setTimeout(()=>fadeOut(), 3000);
        clearTimeout(); 
    }

    function zoomOutMap(){
        console.log("oke");
        if(changeScreen == false){ 
            console.log("true");
            setChangeScreen(true);
            fadeIn();
            setTimeout(()=>fadeOut(), 3000);
            clearTimeout(); 
        } 
        else { console.log("false"); 
            setChangeScreen(false);
            fadeIn();
            setTimeout(()=>fadeOut(), 3000);
            clearTimeout(); 
        }
    }

    // console.log("oke");

    return (<View style = {style.container}>
        <TouchableOpacity style={changeScreen == false ? style.touchble :style.touchble_full} onPress={appear} activeOpacity={1}>
            <Video source = {{uri: props.data.videoUri}}
                style = {changeScreen == false ? style.video_audio :style.video_audio_full}
                paused = {paused}
                // repeat = {true}
                fullscreen = {true}
                resizeMode = "contain"
                onLoad = {({duration})=>load({duration})}
                onProgress = {({currentTime}) => progess({currentTime})}
                ref = {videoPlayer}
                />
        </TouchableOpacity>
        <Animated.View style={[changeScreen == false ? style.view_control : style.view_control_full,{opacity: fadeView, zIndex: index}]}>
            <View style = {changeScreen == false ? style.control_detail : style.control_detail_full} >
                <View style = {changeScreen == false ? style.control_left :style.control_left_full}> 
                    <Icon name="rewind" size={35} type="feather" color="white" onPress={backward} />
                </View>
                <TouchableOpacity style = {changeScreen == false ? style.control_mid :style.control_mid_full} 
                activeOpacity = {0.5}
                onPress={changePause}>
                    <Icon name = "play" type="feather" size={35} color="white"  style={paused==false?{display:'none'}:{}} />
                    <Icon name = "pause" type="feather" size={35} color="white"   style={paused==true?{display:'none'}:{}}/>
                </TouchableOpacity>
                <View style = {changeScreen == false ? style.control_right :style.control_right_full}>
                    <Icon name="fast-forward" type="feather" size={35} color="white" onPress={forward}/>
                </View>                
            </View>

          {/* //////  View Slider  ////// */}
            <View style={changeScreen == false ? style.view_slider :style.view_slider_full}>
                <View style={changeScreen == false ? style.time_start_end :style.time_start_end_full}>
                    <Text style={[changeScreen ==false ? style.text_start_time : style.text_start_time_full,{color: "white"}]}>{gettime(currentTime)}</Text> 
                    <Text style={[changeScreen ==false ? style.text_end_time : style.text_end_time_full,{color: "white"}]}>{gettime(duration)}</Text>                  
                </View>
                <View style={changeScreen == false ? style.slider :style.slider_full}>
                    <Slider
                        style ={changeScreen ==false ?style.slide_detail : style.slide_detail_full} 
                        // value = {currentTime}
                        maximumValue={duration}
                        minimumValue={0}
                        trackStyle={{height:5}}
                        value = {currentTime }
                        // onValueChange = {setCurrentTime(value)}
                        step={1}
                        thumbProps={{
                            children: (
                                <Icon
                                name="circle"
                                type="entypo"
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color="#f50"
                                />
                            ),
                            }}
                    />
                    <TouchableOpacity                    
                     activeOpacity ={0.7}
                     onPress={zoomOutMap}
                     style ={changeScreen == false ? style.zoom_out : style.zoom_out_full} 
                    >                 
                        <Icon name="zoom-out-map" type="material" color="white" size={changeScreen == false ? 35 : 45} />
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
        {changeScreen == false ? <View style={style.view_name}>
            <Text style={style.textCourse}>{props.data.courseName}</Text>
            <Text style={style.textVideo}>{props.data.videoName}</Text>
        </View> :<></> }
        
    </View>);
    
}

export default VideoCourse;