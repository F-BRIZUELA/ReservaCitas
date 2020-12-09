import firebase from 'firebase'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyDfBDGiVG8-4EIM5pp8qxU4__3hA1bF1fg",
    authDomain: "registrocitas.firebaseapp.com",
    projectId: "registrocitas",
    storageBucket: "registrocitas.appspot.com",
    messagingSenderId: "441370268447",
    appId: "1:441370268447:web:cf4e9cdabd5cdcbb63d62a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   const DB = firebase.firestore()

export default {firebase, DB}
