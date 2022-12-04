import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMqGSfcPFGjjGGnd-mhOrO1u5d4e9e7Es",
  authDomain: "login-b18f7.firebaseapp.com",
  projectId: "login-b18f7",
  storageBucket: "login-b18f7.appspot.com",
  messagingSenderId: "32243067015",
  appId: "1:32243067015:web:63a305c15f0b5649adb022",
  measurementId: "G-MS1M33L18S"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, backend };