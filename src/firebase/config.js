import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDLPBAICiT7drHDbNFS3j-GVh_RX9TutEs",
    authDomain: "photogallery-17a9b.firebaseapp.com",
    databaseURL: "https://photogallery-17a9b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "photogallery-17a9b",
    storageBucket: "photogallery-17a9b.appspot.com",
    messagingSenderId: "442642949840",
    appId: "1:442642949840:web:3b75440cd0cb122f80e0d5",
    measurementId: "G-P0F30R8L2V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
