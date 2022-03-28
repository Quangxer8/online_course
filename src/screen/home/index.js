import React, { Component, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { CourseDetail, ListCourse, ListFaculty, ShowFilePdf, VideoCourse } from '../../components/index';
import style from './style';
import { rootURL } from "../../constant/Api";
import { ImageBackground } from 'react-native';
import img from '../../assets/images/image2.jpg';
import dataImg from'./function';
import firestore from '@react-native-firebase/firestore'; 
import { getAllCourseLevel1, getAllCourseLevel2, getAllMajor, getData, } from '../../firestore/get.js';
import storage from '@react-native-firebase/storage';

function Home({navigation}) {

    const [ courseLevel1, setCourseLevel1 ] = useState([]);
    const [ courseLevel2, setCourseLevel2 ] = useState([]);
    const [ major, setMajor] =  useState([]);

    async function fetchDataMajor(){
        const response = await getAllMajor();
        console.log(response);
        setMajor(response);
    };

    async function fetchDataCourseLevel1(){
        const response = await getAllCourseLevel1();
        setCourseLevel1(response);
    }

    async function fetchDataCourseLevel2(){
        const response = await getAllCourseLevel2();
        setCourseLevel2(response);
    }

    useEffect(()=>{
        fetchDataMajor();
        fetchDataCourseLevel1();
        fetchDataCourseLevel2();
    },[]);
    //Function
    // async function loadTopCourses(){ 
    //     await fetch(rootURL + "/course/get-top", {
    //         method: "GET",
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //     .then(res => res.json())
    //     .then(data => { 
    //         let list=[data[0],data[1], data[2],data[3], data[4]];
    //         setTopCourses(list);
    //      })
    //     .catch(err => console.error(err)); 
   
    // }


    /******************* useEffect ******************/
    // useEffect(() => {
    //     //fetch list courses top
    //     loadTopCourses();
    // },[])

    return (
        <ScrollView style={style.container}
            horizontal={false}
            showsVerticalScrollIndicator={true}
        >
            <Image source={img} style={style.imgBackground}/>
            <View  style={style.banner}>
                <Text style={style.banner_text_top}>TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</Text>
                <Text style={style.banner_text_bot}>KHO TÀI LIỆU SỐ</Text>
            </View>
            <View style={style.category}>
                <View style={style.line}>
                    <View style={style.line_left}></View>
                    <View style={style.line_between}><Text style={style.title_name}>TOÁN - TIN</Text></View>
                    <View style={style.line_right}></View>
                </View>             
                <ListCourse dataCourse = {courseLevel1} navigation={navigation}/> 
            </View>
            <View style={style.category}>
                <View style={style.line}>
                    <View style={style.line_left}></View>
                    <View style={style.line_between}><Text style={style.title_name}>CƠ SỞ NHÓM NGÀNH</Text></View>
                    <View style={style.line_right}></View>
                </View>                            
                <ListCourse dataCourse = {courseLevel2} navigation={navigation}/>
            </View>
            <View style={style.category}>
                <View style={style.line}>
                    <View style={style.line_left}></View>
                    <View style={style.line_between}><Text style={style.title_name}>CHUYÊN NGÀNH</Text></View>
                    <View style={style.line_right}></View>
                </View>              
                {/* {data != null ?<Image 
                source={{uri: `data:image/jpg;base64,${data.linkImage}`}}
                 style={style.imgBackground}/> : <></>} */}
                <ListFaculty faculty={major} navigation={navigation}/>
            </View>
        </ScrollView>
        // <CourseDetail/>
    )
}

export default Home;
