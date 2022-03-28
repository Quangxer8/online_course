import firestore from '@react-native-firebase/firestore'; 

function apiPutCourse(){
  firestore()
  .collection('courss')
  .doc('3r5xcBAUSayXTStiS4bp')
  .update({
    name: 15
  })
  .then(() => {
    console.log('User updated!');
  });
}

function addNewUser(user){
  firestore()
  .collection('users')
  .add({
    email: user.email,
    name: user.name,
    sex: user.gender,
    phone: user.phone
  })
  .then(()=>{
    console.log('add user success!!');
  })
}

export{
    apiPutCourse,
    addNewUser
}