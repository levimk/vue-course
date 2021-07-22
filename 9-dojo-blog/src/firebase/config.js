// fb/app == core functionality => import for all functionality
import firebase from 'firebase/app'; 

// functionality for firestore
import 'firebase/firestore'

require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vue-firebase-course-185b1.firebaseapp.com",
  projectId: "vue-firebase-course-185b1",
  storageBucket: "vue-firebase-course-185b1.appspot.com",
  messagingSenderId: "216310303344",
  appId: "1:216310303344:web:650d59213cadd9b91d42b5"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service => connect to firestore
const projectFirestore = firebase.firestore(); // depends on: import 'firebase/firestore'
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }