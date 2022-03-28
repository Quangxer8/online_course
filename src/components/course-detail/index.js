import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import style from './style';
import imgPdf from '../../assets/images/pdf.jpg';   

function CourseDetail(props){

    console.log(props.video);
    return(
        <ScrollView style={style.container}>
            <View style={style.top}>
                <Text style={[style.title, style.name]}>KHO TÀI LIỆU SỐ</Text>
                <Text style={[style.title, style.name]}>{props.params.name}</Text>
            </View>
            <View style={style.mid_video}>
                <Text style={style.title}>Video</Text>
                {props.video.map((item,key) =>{
                   return <View style={style.list_video} key={key}>
                        <TouchableOpacity style={style.video}
                            activeOpacity={0.7}
                            onPress={()=>props.navigation.navigate('video', {courseName: props.params.name, videoName: item.name, videoUri: item.uri})}
                        >
                            <Icon name = "playcircleo" type="ant-design" size={20} color="rgba(217, 83, 79, 0.8)" style={style.icon_play} /> 
                            <Text style={style.text_des}>{item.name}</Text>                         
                        </TouchableOpacity>
                    </View>
                })}
                {/* <View style={style.list_video}>
                    <TouchableOpacity style={style.video}
                        activeOpacity={0.7}
                        onPress={()=>props.navigation.navigate('video')}
                    >
                        <Icon name = "playcircleo" type="ant-design" size={20} color="rgba(217, 83, 79, 0.8)" style={style.icon_play} /> 
                        <Text style={style.text_des}>Chương 1: Giới thiệu môn học</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={style.list_video}>
                    <TouchableOpacity style={style.video}
                        activeOpacity={0.7}
                    >
                        <Icon name = "playcircleo" type="ant-design" size={20} color="rgba(217, 83, 79, 0.8)" style={style.icon_play} /> 
                        <Text style={style.text_des}>Chương 2: Các dạng biểu diễn số</Text>
                        
                    </TouchableOpacity>
                    
                </View> */}
            </View>
            <View style={style.bottom_pdf}>
                <Text style={style.title}>File PDF</Text>
                {props.pdf.map((item,key) =>{
                    return <View style={style.list_video} key={key}>
                    <TouchableOpacity style={style.video}
                        activeOpacity={0.7}
                        onPress={()=>props.navigation.navigate('showPdf', {uri:item.uri})}
                    >
                        <Icon name = "file-pdf-o" type="font-awesome" size={20} color="rgba(217, 83, 79, 0.8)" style={style.icon_play} /> 
                        <Text style={style.text_des}>{item.name}</Text>
                        
                    </TouchableOpacity>
                </View>
                })}
            </View>
        </ScrollView>
    )

}

export default CourseDetail;