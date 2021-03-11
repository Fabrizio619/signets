import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

//config

//etapes B

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmvduajDhL68xQPkVCbPfCF7lVwAzhjLM",
    authDomain: "pvt-h21-fabrizio.firebaseapp.com",
    databaseURL: "https://pvt-h21-fabrizio-default-rtdb.firebaseio.com",
    projectId: "pvt-h21-fabrizio",
    storageBucket: "pvt-h21-fabrizio.appspot.com",
    messagingSenderId: "818019251943",
    appId: "1:818019251943:web:5f31d15d7c77909522d442",
    measurementId: "G-700YYNEYP9"
  };



///Initialiser Firebase
  //c

//   Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


//d
// Initialiser Firestore
export const firestore = firebase.firestore();

// Initialiser le widget FirebaseUI
export const widgetFirebaseui = new firebaseui.auth.AuthUI(firebase.auth());
