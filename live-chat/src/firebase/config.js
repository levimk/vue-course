import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB--hNroOrwuSnX795S43XUx0dVWlFXn_E",
  authDomain: "vue-firebase-course-185b1.firebaseapp.com",
  projectId: "vue-firebase-course-185b1",
  storageBucket: "vue-firebase-course-185b1.appspot.com",
  messagingSenderId: "216310303344",
  appId: "1:216310303344:web:05d9e5e89daf04bc1d42b5"
};

firebase.initializeApp(firebaseConfig);


const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }
