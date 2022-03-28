import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Course, CourseCustom } from '../../components';
import style from '../../components/video/style';
import { getAllCourseForMajor } from '../../firestore/get';


function ScreenCourseMajor({navigation ,route}){

    const [ course, setCourse ] = useState([]);
    const id = 'lbOV8xLhwMoozj8EB9nj';

    async function fetchDataCourseForMajor(){
        const response = await getAllCourseForMajor(id);
        console.log(route.params)
        // console.log(response.length);    
        setCourse(response);
    }

    useEffect(()=>{
        fetchDataCourseForMajor();
    },[])

   return <ScrollView
    style={style.container}
    horizontal={false}
    showsVerticalScrollIndicator={true}
    >
       {course.map((item, key) => <CourseCustom navigation={navigation} dataCourse = {item} key={key} />)}
       {course.map((item, key) => <CourseCustom navigation={navigation} dataCourse = {item} key={key} />)}
       {course.map((item, key) => <CourseCustom navigation={navigation} dataCourse = {item} key={key} />)}
       {course.map((item, key) => <CourseCustom navigation={navigation} dataCourse = {item} key={key} />)}
       {course.map((item, key) => <CourseCustom navigation={navigation} dataCourse = {item} key={key} />)}

    </ScrollView>
}

export default ScreenCourseMajor;