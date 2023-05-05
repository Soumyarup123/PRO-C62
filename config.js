import firebase from 'firebase';
//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDf0tj3TKilywr6Az_4MYKmQe2KEf0RLFw",
  authDomain: "c-60-attendance.firebaseapp.com",
  databaseURL: "https://c-60-attendance-default-rtdb.firebaseio.com",
  projectId: "c-60-attendance",
  storageBucket: "c-60-attendance.appspot.com",
  messagingSenderId: "872642932518",
  appId: "1:872642932518:web:5fd91d1dee686ccabedbe7",
  measurementId: "G-ELW0S1L59X"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database();
