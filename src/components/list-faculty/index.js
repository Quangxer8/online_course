import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';


function listFaculty( props ){

    // console.log(props.Faculty);

    const colorBackground = [['#90AFC5', '#336B87', 'white'], ['#E6CCB5', '#BAA896','#FCC875'], ['#D6C6B9', '#BF9A77','#D35C37'], ['#CDCDC0', '#DDBC95','#CDCDC0'], ['#D0E1F9', '#4D648D','#D0E1F9'], ['#C9D1C8', '#5B7065','#DCDCDC'], ['#B9C4C9', '#52958b', '#AFEEEE'],['#D6C6B9', '#BF9A77','#D35C37'], ['#CDCDC0', '#DDBC95','#CDCDC0'],['#E6CCB5', '#BAA896','#FCC875']];
    let count = 0;
    return <View style = {style.container} >
        {/* <ScrollView
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        style = {style.wraper}
        >
            {props.Faculty.map((item, key) => {
                count++;
               return <LinearGradient key={key} style={style.item_faculty}
               colors={colorBackground[count]}
               start={{ x: 0.5, y: 0 }}
               end={{ x: 1, y: 0.5 }}
                        >
                    <Text style = {style.text_name}>KHOA {item.name}</Text>
                </LinearGradient>
            })}
        </ScrollView> */}
        <ScrollView
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        style = {style.wraper}
        >
            {props.faculty.map((item, key) => {
                count++;
               return <TouchableOpacity key={key}
                activeOpacity ={0.5}
                onPress={()=>props.navigation.navigate('course-major', {id: item.id})}
                >
                   <LinearGradient style={style.item_faculty}
                    colors={colorBackground[count]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 1, y: 0.5 }}
                                >
                        <Text style = {style.text_name}>{item.name}</Text>
                    </LinearGradient>
               </TouchableOpacity>
            })}
        </ScrollView>
    </View>
}

export default listFaculty;