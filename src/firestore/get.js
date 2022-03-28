import firestore from '@react-native-firebase/firestore'; 


async function getData(){
    const users = await firestore().collection('videos').doc('UZhcVrdyKJ5Q7OYugbeF').get();
    // .then(res => res);
    // console.log(users['_data'].name);
    return users;
}

async function getAllCourseLevel1(){
  const data = []
  await firestore().collection('course').where('level', '==', "1").get()
  .then(querySnapshot => {
      for(let i = 0; i < querySnapshot._docs.length; i++){
          data.push(querySnapshot._docs[i]._data);
      }
  });

  return data;
}

async function getAllCourseLevel2(){
  const data = []
  await firestore().collection('course').where('level', '==', "2").get()
  .then(querySnapshot => {
      for(let i = 0; i < querySnapshot._docs.length; i++){
          data.push(querySnapshot._docs[i]._data);
      }
  });

  return data;
}

async function getAllVideoForId(id){
  const data = [];
  await firestore().collection('videos').where('course_id', '==', id).get()
  .then(querySnapshot =>{
    for(let i = 0; i < querySnapshot._docs.length; i++){
      data.push(querySnapshot._docs[i]._data);
    }
  });
  data.sort((a,b) =>{
    if(a.stt < b.stt ) return -1;
    if(a.stt > b.stt ) return 1;
    return 0;
  });
  return data;
}


async function getAllPdfForId(id){
  const data = [];
  await firestore().collection('pdfs').where('course_id', '==', id).get()
  .then(querySnapshot =>{
    for(let i = 0; i < querySnapshot._docs.length; i++){
      data.push(querySnapshot._docs[i]._data);
    }
  })
  data.sort((a,b) =>{
    if(a.stt < b.stt ) return -1;
    if(a.stt > b.stt ) return 1;
    return 0;
  });
  return data;
}


function apiPutCourse(){
    firestore()
    .collection('course')
    .doc('3r5xcBAUSayXTStiS4bp')
    .update({
      name: 18
    })
    .then(() => {
      console.log('User updated!');
    });
  }

async function getAllMajor(){
  const data = [];
  await firestore().collection('majors').get()
  .then(querySnapshot =>{
    for(let i = 0; i < querySnapshot._docs.length; i++){
      data.push(querySnapshot._docs[i]._data);
    }
  });
  return data;
}

async function getAllCourseForMajor(major_id){
  const data = [];
  await firestore().collection('course').where('major_id', '==', major_id).get()
  .then(querySnapshot =>{
    for(let i = 0; i < querySnapshot._docs.length; i++){
      data.push(querySnapshot._docs[i]._data);
    }
  })

  return data;
}


export {
    getData,
    apiPutCourse,
    getAllCourseLevel1,
    getAllCourseLevel2,
    getAllVideoForId,
    getAllPdfForId,
    getAllMajor,
    getAllCourseForMajor
}