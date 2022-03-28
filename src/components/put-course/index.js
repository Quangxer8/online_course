import React, { useState } from 'react';
import style from './style';
import { Picker } from '@react-native-community/picker';
import { ScrollView, View } from 'react-native';

function putCourse (){

    const [category, setCategory] = useState('course');

    return (<ScrollView>
        <View style ={{width:"80%", borderBottomColor: "rgba(217, 83, 79,0.3)", borderBottomWidth: 2}}>
            <Picker
            selectedValue={category}
            onValueChange={(itemValue) => {setGender(itemValue)}}
            style={style.dropdownPic}
            mode = "dialog"
            
            >
                <Picker.Item color = "black" label="course" value="course" />
                <Picker.Item label="Nữ" value="nu" />
            </Picker>
        </View>
    </ScrollView>)
}

export default putCourse;