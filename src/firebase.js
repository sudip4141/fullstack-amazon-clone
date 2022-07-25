import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaqm-8m7aYLx3iT_vyazaTUn1fKRLNFlg",
  authDomain: "challenge-c0998.firebaseapp.com",
  projectId: "challenge-c0998",
  storageBucket: "challenge-c0998.appspot.com",
  messagingSenderId: "584432518556",
  appId: "1:584432518556:web:7f029d884f01cf27763459",
  measurementId: "G-B25LSKF7WE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };