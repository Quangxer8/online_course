import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, FlatList, Animated,TouchableOpacity, Text, Dimensions } from 'react-native';

import img1 from '../../assets/images/beautiful1.jpeg';
import img2 from '../../assets/images/beautiful2.jpg';
import img3 from '../../assets/images/beautiful3.jpg';
import img4 from '../../assets/images/beautiful4.jpg';
import Course from '../course';
import style from './style';

function ListCourse(props) {

    const widthScreen = Dimensions.get('window').width;
    // const [data, setData] = useState([]);

    useEffect(()=>{
        // setData(props.dataCourse);
    },[]);

    return(
        <View style={style.container}>
           <ScrollView
            snapToInterval ={widthScreen}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
           >
               {props.dataCourse.map((item, key) => <Course navigation={props.navigation} dataCourse = {item} key={key} />)} 
           </ScrollView>
           <View style={style.bottom_view}>
                <TouchableOpacity style={style.touch}
                    activeOpacity={0.7}
                ><Text style={style.text}>SEE ALL</Text></TouchableOpacity>
           </View>
        </View>
    )
}

export default ListCourse;