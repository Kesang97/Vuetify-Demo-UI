// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8ZKMKjjeEQShVN1tOP9P1TJ2zQmF9Bw",
  authDomain: "on-track-dashboard.firebaseapp.com",
  projectId: "on-track-dashboard",
  storageBucket: "on-track-dashboard.appspot.com",
  messagingSenderId: "1039479706141",
  appId: "1:1039479706141:web:2edaa17e8c1b4831faacf4",
  measurementId: "G-G775KNZLRS"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true});

export default db;
