import React, { Component } from 'react';
import {  } from 'react-native';
import { VideoCourse } from '../../components/index';
// import screenCourse from '../screen-course';

function ScreenVideo({navigation, route}){
    return <VideoCourse data={route.params}/>
}

export default ScreenVideo;