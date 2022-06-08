import React, { useState, useEffect, useRef } from "react";
// import io from 'socket.io-client';
import {WebView} from 'react-native-webview';
import { SafeAreaView } from "react-native";

// const host = "http://localhost:20100";

function App() {
//   const [mess, setMess] = useState([]);
//   const [message, setMessage] = useState('');
//   const [id, setId] = useState();

//   const socketRef = useRef();

//   useEffect(() => {
//     socketRef.current = io("http://localhost:20100")
//     socketRef.current.emit("new-user", "user_android")
//     socketRef.current.on('user_connected', names => {
//       console.log(names)
//     })
//     socketRef.current.on('chat-message', data => {
//       console.log(data.name);
//       console.log(data.message);
//     })
//     return () => {
//       socketRef.current.disconnect();
//     }
//   }, [message]);

//   const test = () => {
//     console.log("oke");
//   }

//   test();
return (
  <SafeAreaView style={{ flex: 1 }}>
    <WebView 
      source={{uri: `http://192.168.43.164:5500/index.html` }} 
    />
  </SafeAreaView>
);


}

export default App;
