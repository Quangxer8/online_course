/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FormStart, UserLogin, FormForgotPassword, FormRegister, Home, VideoCourse, ScreenVideo, ScreenCourse, ScreenPdf, ScreenPutData, ScreenCourseMajor, ScreenMessAll } from './src/screen/insex';

import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './src/reducer'
import rootSaga from './src/saga';
import { ListCourse } from './src/components';


const sagaMiddleware = createSagaMiddleware();
const store = createStore( rootReducer, applyMiddleware(sagaMiddleware) );
sagaMiddleware.run(rootSaga); 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App (){
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="start"> 
          <Stack.Screen name="video" options= {{headerShown: false}} component={ScreenVideo} />  
          <Stack.Screen name="home" options={{headerShown: false}} component={Home}/>
          <Stack.Screen name="start" options= {{headerShown: false}} component={FormStart}/>
          <Stack.Screen name="login" options= {{headerShown: false}} component={UserLogin}/>
          <Stack.Screen name="register" options= {{headerShown: false}} component={FormRegister} /> 
          <Stack.Screen name="forgotPassword" options= {{headerShown: false}} component={FormForgotPassword} />
          <Stack.Screen name="course-detail" options= {{headerShown: false}} component={ScreenCourse} />  
          <Stack.Screen name="showPdf" options= {{headerShown: false}} component={ScreenPdf} /> 
          <Stack.Screen name="course-major" options= {{headerShown: false}} component={ScreenCourseMajor} /> 
          <Stack.Screen name="mess-all" options={{headerShown: false}} component={ScreenMessAll} />
        </Stack.Navigator>
        {/* <Tab.Navigator
          screenOptions = { ({route}) => (<View></View>)}
        >
            
          <Tab.Screen name="start" options= {{headerShown: false}} component={FormStart}/>
          <Tab.Screen name="login" options= {{headerShown: false}} component={UserLogin}/>
          <Tab.Screen name="register" options= {{headerShown: false}} component={FormRegister} /> 
          <Tab.Screen name="forgotPassword" options= {{headerShown: false}} component={FormForgotPassword} /> 
        </Tab.Navigator> */}
        {/* <Drawer.Navigator

        >
            
          <Drawer.Screen name="start" options= {{headerShown: false}} component={FormStart}/>
          <Drawer.Screen name="login" options= {{headerShown: false}} component={UserLogin}/>
          <Drawer.Screen name="register" options= {{headerShown: false}} component={FormRegister} /> 
          <Drawer.Screen name="forgotPassword" options= {{headerShown: false}} component={FormForgotPassword} /> 
        </Drawer.Navigator> */}

      </NavigationContainer>
    </Provider>
    
      
  );
};



export default App;
