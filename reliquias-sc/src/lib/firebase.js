import firebase from "firebase"
//import { initializeApp } from "firebase/app";
//importamos firebase

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEe9f5gHQpEE9_DkY_JcUdluZtpczCQ6A",
    authDomain: "reliquias-sxc.firebaseapp.com",
    projectId: "reliquias-sxc",
    storageBucket: "reliquias-sxc.appspot.com",
    messagingSenderId: "312978840353",
    appId: "1:312978840353:web:c34354e4af34a2207ebc60"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase