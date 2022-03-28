import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

function Course(props){


    return (
    <TouchableOpacity style={style.container}
    activeOpacity ={0.5}
    onPress={()=>props.navigation.navigate('course-detail', {name: props.dataCourse.name, id: props.dataCourse.id})}
    >
        <View style={style.topImage}>
            <Image source={{uri:props.dataCourse.img}} style={style.image_back}/>
        </View>
        <View style={style.wrap_text}>
            <Text style ={style.topText}>{props.dataCourse.name}</Text>
            <View style={style.bottomText}>
                <Text style={style.sub_text}>{props.dataCourse.code}</Text>
                <Text style={[style.sub_text,style.sub_text_cus]}>{props.dataCourse.type}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default Course;