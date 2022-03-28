import React, { useEffect } from 'react';
import style from './style';
import { PutCourse } from '../../components';
import { ScrollView } from 'react-native';
import { apiPutCourse } from '../../firestore/get';

function ScreenPutData(){

    // useEffect(()=>{
    //     apiPutCourse();
    // },[])

    return (
        <ScrollView>
            <PutCourse />
        </ScrollView>
    )
}

export default ScreenPutData;