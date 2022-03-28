import React, { useEffect, useState } from 'react';
import {  } from 'react-native';
import { CourseDetail } from '../../components/index';
import { getAllPdfForId, getAllVideoForId } from '../../firestore/get';


function ScreenCourse({navigation, route}){
    
    const [video , setVideo] = useState([]);
    const [pdf, setPdf] = useState([]);

    async function fetchDataVideo(){
        const response = await getAllVideoForId(route.params.id);
        setVideo(response);
    }

    async function fetchDataPdf(){
        const response = await getAllPdfForId(route.params.id);
        setPdf(response);
    }

    useEffect(()=>{
        fetchDataVideo();
        fetchDataPdf();
    },[])
    // console.log(route.params)
    return <CourseDetail navigation={navigation} params={route.params} video={video} pdf={pdf}/> 
}

export default ScreenCourse;